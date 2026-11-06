"use client";

import React, { useState } from "react";
import { companyData, getPhoneLink, getWhatsAppLink } from "@/data/company";
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  MessageSquare
} from "lucide-react";

interface EnquiryFormProps {
  defaultType?: string;
  defaultNote?: string;
  variant?: "card" | "embedded";
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  defaultType = "Transformer Manufacturing",
  defaultNote = "",
  variant = "card",
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    mobileNumber: "",
    emailAddress: "",
    enquiryType: defaultType,
    requirementDetails: defaultNote,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [serverError, setServerError] = useState("");

  const enquiryTypes = [
    "Transformer Manufacturing",
    "Current Transformer (CT)",
    "Potential Transformer (PT)",
    "Transformer Repairing",
    "General Enquiry",
    "Other",
  ];

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const cleanPhone = formData.mobileNumber.replace(/[\s\-\(\)]/g, "");
    const phoneRegex = /^(\+?[0-9]{1,3})?[0-9]{10}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number.";
    }

    if (formData.emailAddress.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailAddress.trim())) {
        newErrors.emailAddress = "Please enter a valid email address.";
      }
    }

    if (!formData.requirementDetails.trim() || formData.requirementDetails.trim().length < 5) {
      newErrors.requirementDetails = "Please specify your requirement details (at least 5 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed. Please try again.");
      }

      setIsSuccess(true);
      setReferenceId(data.referenceId || `ENQ-${Date.now()}`);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to submit enquiry. Please call us directly.";
      setServerError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setReferenceId("");
    setFormData({
      fullName: "",
      companyName: "",
      mobileNumber: "",
      emailAddress: "",
      enquiryType: defaultType,
      requirementDetails: "",
      honeypot: "",
    });
    setErrors({});
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl p-8 bg-white border border-emerald-200 shadow-xl text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <h3 className="font-heading text-2xl font-bold text-navy-900">
          Enquiry Received
        </h3>

        <p className="text-sm text-steel-600 mt-2 max-w-md mx-auto">
          Thank you for reaching out to Harsh Industries. Your requirement has been logged with reference code:
        </p>

        <div className="my-4 inline-block px-4 py-2 bg-steel-100 rounded-lg font-mono text-sm font-semibold text-navy-900 border border-steel-200">
          {referenceId}
        </div>

        <p className="text-xs text-steel-500 max-w-sm mx-auto mb-6">
          Our engineering desk in MIDC Jalgaon will review your details and contact you via phone or WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={getWhatsAppLink(`Hello Harsh Industries, I submitted enquiry reference ${referenceId}. Following up regarding details.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={resetForm}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-steel-100 hover:bg-steel-200 text-steel-700 text-xs font-medium transition-colors"
          >
            Submit Another Requirement
          </button>
        </div>
      </div>
    );
  }

  const containerClasses =
    variant === "card"
      ? "bg-white rounded-2xl p-6 sm:p-8 border border-steel-200/80 shadow-xl"
      : "bg-transparent";

  return (
    <div className={containerClasses}>
      <div className="mb-6">
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-navy-900">
          Send an Industrial Equipment Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-steel-600 mt-1">
          Share your equipment rating, single-line requirements, or repair query. All technical specifications are finalized upon direct engineering review.
        </p>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Submission Note</p>
            <p className="mt-0.5">{serverError}</p>
            <p className="mt-1 text-xs">
              Direct assistance:{" "}
              <a href={getPhoneLink(companyData.phones.primary.raw)} className="underline font-semibold">
                {companyData.phones.primary.display}
              </a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Anti-spam Honeypot field (hidden from real users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="hp_field">Do not fill this field</label>
          <input
            id="hp_field"
            type="text"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-steel-700 mb-1"
            >
              Full Name <span className="text-red-500" title="Required">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              required
              placeholder="e.g. Ramesh Patil"
              value={formData.fullName}
              onChange={(e) => {
                setFormData({ ...formData, fullName: e.target.value });
                if (errors.fullName) setErrors({ ...errors, fullName: "" });
              }}
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-steel-50/50 text-navy-900 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.fullName
                  ? "border-red-400 focus:ring-red-400"
                  : "border-steel-300 focus:border-electric-500 focus:ring-electric-500/20"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>

          {/* Company Name */}
          <div>
            <label
              htmlFor="companyName"
              className="block text-xs font-semibold text-steel-700 mb-1"
            >
              Company / Business Name{" "}
              <span className="text-steel-400 text-[10px] font-normal">(Optional)</span>
            </label>
            <input
              id="companyName"
              type="text"
              placeholder="e.g. Patil Electrical Enterprises"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-steel-300 bg-steel-50/50 text-navy-900 placeholder-steel-400 focus:bg-white focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Mobile Number */}
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-xs font-semibold text-steel-700 mb-1"
            >
              Mobile Number <span className="text-red-500" title="Required">*</span>
            </label>
            <input
              id="mobileNumber"
              type="tel"
              required
              placeholder="+91 98765 43210"
              value={formData.mobileNumber}
              onChange={(e) => {
                setFormData({ ...formData, mobileNumber: e.target.value });
                if (errors.mobileNumber) setErrors({ ...errors, mobileNumber: "" });
              }}
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-steel-50/50 text-navy-900 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.mobileNumber
                  ? "border-red-400 focus:ring-red-400"
                  : "border-steel-300 focus:border-electric-500 focus:ring-electric-500/20"
              }`}
            />
            {errors.mobileNumber && (
              <p className="text-xs text-red-500 mt-1">{errors.mobileNumber}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-xs font-semibold text-steel-700 mb-1"
            >
              Email Address{" "}
              <span className="text-steel-400 text-[10px] font-normal">(Optional)</span>
            </label>
            <input
              id="emailAddress"
              type="email"
              placeholder="engineer@company.com"
              value={formData.emailAddress}
              onChange={(e) => {
                setFormData({ ...formData, emailAddress: e.target.value });
                if (errors.emailAddress) setErrors({ ...errors, emailAddress: "" });
              }}
              className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-steel-50/50 text-navy-900 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 ${
                errors.emailAddress
                  ? "border-red-400 focus:ring-red-400"
                  : "border-steel-300 focus:border-electric-500 focus:ring-electric-500/20"
              }`}
            />
            {errors.emailAddress && (
              <p className="text-xs text-red-500 mt-1">{errors.emailAddress}</p>
            )}
          </div>
        </div>

        {/* Enquiry Type Dropdown */}
        <div>
          <label
            htmlFor="enquiryType"
            className="block text-xs font-semibold text-steel-700 mb-1"
          >
            Enquiry Type <span className="text-red-500" title="Required">*</span>
          </label>
          <select
            id="enquiryType"
            value={formData.enquiryType}
            onChange={(e) =>
              setFormData({ ...formData, enquiryType: e.target.value })
            }
            className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-steel-300 bg-steel-50/50 text-navy-900 focus:bg-white focus:outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-500/20"
          >
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Requirement Details */}
        <div>
          <label
            htmlFor="requirementDetails"
            className="block text-xs font-semibold text-steel-700 mb-1"
          >
            Requirement Details / Equipment Notes{" "}
            <span className="text-red-500" title="Required">*</span>
          </label>
          <textarea
            id="requirementDetails"
            rows={4}
            required
            placeholder="Please mention your required voltage/current ratio, transformer type, quantity, or specific repair symptoms..."
            value={formData.requirementDetails}
            onChange={(e) => {
              setFormData({ ...formData, requirementDetails: e.target.value });
              if (errors.requirementDetails) setErrors({ ...errors, requirementDetails: "" });
            }}
            className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-steel-50/50 text-navy-900 placeholder-steel-400 focus:bg-white focus:outline-none focus:ring-2 resize-y ${
              errors.requirementDetails
                ? "border-red-400 focus:ring-red-400"
                : "border-steel-300 focus:border-electric-500 focus:ring-electric-500/20"
            }`}
          />
          {errors.requirementDetails && (
            <p className="text-xs text-red-500 mt-1">{errors.requirementDetails}</p>
          )}
        </div>

        {/* Submit Button & Direct Contacts */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-electric-500 hover:bg-electric-600 disabled:bg-steel-400 text-white font-semibold text-sm shadow-md hover:shadow-electric-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-electric-400"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Equipment Enquiry</span>
              </>
            )}
          </button>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Instant WhatsApp</span>
          </a>
        </div>

        <p className="text-[11px] text-steel-400 text-center sm:text-left mt-2">
          Your contact information will be used solely for responding to your equipment or service enquiry by Harsh Industries.
        </p>
      </form>
    </div>
  );
};
