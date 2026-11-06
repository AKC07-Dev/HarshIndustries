import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      fullName,
      companyName,
      mobileNumber,
      emailAddress,
      enquiryType,
      requirementDetails,
      honeypot, // Anti-bot honeypot field
    } = body;

    // 1. Bot check: honeypot field must be empty
    if (honeypot) {
      return NextResponse.json(
        { error: "Spam detected." },
        { status: 400 }
      );
    }

    // 2. Validate Full Name
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // 3. Validate Mobile Number (Indian 10-digit format or international phone format)
    const cleanPhone = (mobileNumber || "").replace(/[\s\-\(\)]/g, "");
    const phoneRegex = /^(\+?[0-9]{1,3})?[0-9]{10}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Please enter a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    // 4. Validate Email Address if supplied
    if (emailAddress && emailAddress.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailAddress.trim())) {
        return NextResponse.json(
          { error: "Please provide a valid email address or leave the field blank." },
          { status: 400 }
        );
      }
    }

    // 5. Validate Enquiry Type
    const validEnquiryTypes = [
      "Transformer Manufacturing",
      "Current Transformer (CT)",
      "Potential Transformer (PT)",
      "Transformer Repairing",
      "General Enquiry",
      "Other",
    ];

    if (!enquiryType || !validEnquiryTypes.includes(enquiryType)) {
      return NextResponse.json(
        { error: "Please select a valid enquiry type from the dropdown." },
        { status: 400 }
      );
    }

    // 6. Validate Requirement Details
    if (!requirementDetails || typeof requirementDetails !== "string" || requirementDetails.trim().length < 5) {
      return NextResponse.json(
        { error: "Please provide brief details of your equipment requirement or repair inquiry (min 5 characters)." },
        { status: 400 }
      );
    }

    // Submission Record
    const submissionRecord = {
      id: `ENQ-${Date.now()}`,
      receivedAt: new Date().toISOString(),
      fullName: fullName.trim(),
      companyName: companyName ? companyName.trim() : "Individual / Not Specified",
      mobileNumber: cleanPhone,
      emailAddress: emailAddress ? emailAddress.trim() : "None provided",
      enquiryType,
      requirementDetails: requirementDetails.trim(),
    };

    // Logging for audit trail (Production ready for Resend, Sendgrid, or SMTP webhook)
    console.log("=== NEW HARSH INDUSTRIES ENQUIRY RECEIVED ===");
    console.log(JSON.stringify(submissionRecord, null, 2));

    /*
     * NOTE FOR PRODUCTION DEPLOYMENT:
     * To forward this enquiry directly to tusharchitte31@yahoo.co.in via an email provider:
     * 1. Add RESEND_API_KEY or SMTP credentials to your .env.local file
     * 2. Call your email provider API here (e.g. resend.emails.send({ to: 'tusharchitte31@yahoo.co.in', ... }))
     */

    return NextResponse.json(
      {
        success: true,
        referenceId: submissionRecord.id,
        message:
          "Thank you! Your enquiry has been registered. Our technical team at Harsh Industries will contact you shortly.",
        mode: "development_logged",
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : "An unexpected server error occurred";
    console.error("Enquiry processing error:", errMessage);
    return NextResponse.json(
      { error: "An unexpected server error occurred while processing your enquiry. Please call us directly." },
      { status: 500 }
    );
  }
}
