import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  {
    id: "transformer-repairing",
    slug: "transformer-repair",
    title: "Transformer Repairing",
    tagline: "Assessment, inspection, and restorative repair solutions for industrial transformers",
    shortDescription:
      "Harsh Industries provides transformer repair services for industrial units requiring inspection, fault assessment, and restorative attention. Contact our technical team to discuss your specific repair requirements.",
    detailedDescription:
      "Electrical transformers operating in manufacturing plants, processing facilities, and distribution systems are subject to continuous electrical, thermal, and mechanical stresses. Over time, operational anomalies or unexpected failures can disrupt plant operations. At Harsh Industries in Jalgaon, we offer dedicated transformer repairing services aimed at diagnosing issues and restoring transformer integrity. Every repair begins with an engineering discussion and equipment evaluation to understand the nature of the issue before proposing a tailored repair plan.",
    typicalRequirement:
      "Industrial plants facing transformer tripping, abnormal heating, insulation breakdown, mechanical damage, or scheduled overhauls requiring equipment evaluation and repair.",
    imageUrl: "/images/harsh-workshop-floor.png",
    imageAlt: "Actual transformer inspection and industrial electrical repair work at Harsh Industries workshop floor",
    pageUrl: "/services/transformer-repair",
    workflowSteps: [
      {
        step: "01",
        title: "Requirement & Fault Discussion",
        desc: "Clients share operational history, observed symptoms, nameplate ratings, and initial fault indicators with our engineering team.",
      },
      {
        step: "02",
        title: "Equipment Inspection & Assessment",
        desc: "Thorough physical and electrical assessment of the transformer components to identify internal winding, core, or structural abnormalities.",
      },
      {
        step: "03",
        title: "Repair Recommendation & Quotation",
        desc: "Clear scope of repair work outlining proposed restorative procedures, material requirements, and estimated completion timeline.",
      },
      {
        step: "04",
        title: "Workshop Execution & Restorative Work",
        desc: "Precision repair work conducted within our MIDC Jalgaon facility utilizing industrial machinery and quality materials.",
      },
      {
        step: "05",
        title: "Post-Repair Review & Dispatch",
        desc: "Equipment undergoes systematic checks prior to handover, ensuring readiness for industrial re-commissioning.",
      },
    ],
  },
  {
    id: "transformer-manufacturing",
    slug: "transformer-manufacturing",
    title: "Transformer Manufacturing",
    tagline: "Custom-built electrical transformers engineered for industrial distribution",
    shortDescription:
      "Design and manufacturing of electrical transformers tailored to client single-line diagrams, voltage ratios, and industrial installation requirements.",
    detailedDescription:
      "Harsh Industries manufactures industrial electrical transformers utilizing premium magnetic laminations, precision-wound copper conductors, and robust insulation barriers. Each unit is constructed to withstand industrial duty cycles and deliver reliable voltage regulation across demanding operational conditions.",
    typicalRequirement:
      "Electrical contractors, industrial plants, and infrastructure projects requiring reliable step-up, step-down, or isolation transformers built to exact project drawings.",
    imageUrl: "/images/harsh-blue-transformers.png",
    imageAlt: "Actual industrial transformer manufacturing and assembly at Harsh Industries",
    pageUrl: "/products/transformers",
  },
  {
    id: "ct-manufacturing",
    slug: "current-transformer-manufacturing",
    title: "Current Transformer (CT) Manufacturing",
    tagline: "Precision current measurement and protection instrument transformers",
    shortDescription:
      "Manufacturing of Current Transformers engineered to provide accurate current proportional outputs for protection relays and panel instrumentation.",
    detailedDescription:
      "Our Current Transformers are manufactured with carefully selected electrical steel cores and high-grade copper windings to ensure dependable secondary current output under normal and fault conditions, isolating delicate instruments from high-voltage line hazards.",
    typicalRequirement:
      "Switchgear manufacturers, panel builders, and electrical contractors needing custom-ratio CTs for metering cubicles, control desks, and protective relay schemes.",
    imageUrl: "/images/harsh-copper-coils.png",
    imageAlt: "Copper coil winding materials and transformer fabrication at Harsh Industries",
    pageUrl: "/products/current-transformers",
  },
  {
    id: "pt-manufacturing",
    slug: "potential-transformer-manufacturing",
    title: "Potential Transformer (PT) Manufacturing",
    tagline: "Accurate voltage step-down transformers for metering and control",
    shortDescription:
      "Manufacturing of Potential Transformers designed to step down line voltages to standardized levels for monitoring instruments and protective systems.",
    detailedDescription:
      "Harsh Industries produces Potential Transformers designed for consistent voltage transformation ratios, minimal phase error, and high dielectric withstand strength for seamless integration into industrial switchboards and control systems.",
    typicalRequirement:
      "Power distribution systems, industrial control panels, and substation projects requiring reliable voltage sensing for voltmeters, relays, and telemetry.",
    imageUrl: "/images/potential-transformers-pt.jpg",
    imageAlt: "Potential transformer manufacturing and insulation assembly",
    pageUrl: "/products/potential-transformers",
  },
];
