import { ProductCategory, ProductItem } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    id: "current-transformers",
    slug: "current-transformers",
    name: "Current Transformers (CTs)",
    tagline: "High-precision current reduction for metering and protective relays",
    description:
      "Current transformers are used to convert high electrical currents into proportional lower currents for measurement and protection applications.",
    imageUrl: "/images/current-transformers-ct.jpg",
    imageAlt: "Industrial Current Transformers for electrical panel and substation monitoring",
    features: [
      "Instrument current stepping",
      "Metering & protective relaying",
      "Indoor & outdoor application suitability",
      "Custom primary/secondary configurations",
    ],
    learnMoreUrl: "/products/current-transformers",
  },
  {
    id: "potential-transformers",
    slug: "potential-transformers",
    name: "Potential Transformers (PTs)",
    tagline: "Accurate voltage step-down for monitoring, control and metering systems",
    description:
      "Potential transformers reduce high voltage to suitable levels for electrical measurement, monitoring and protection systems.",
    imageUrl: "/images/potential-transformers-pt.jpg",
    imageAlt: "Potential Transformers designed for medium voltage measurement and instrument isolation",
    features: [
      "High voltage step-down isolation",
      "Switchgear & metering integration",
      "Protective relay sensing",
      "Engineered dielectric insulation",
    ],
    learnMoreUrl: "/products/potential-transformers",
  },
  {
    id: "transformers",
    slug: "transformers",
    name: "Transformers",
    tagline: "Electromagnetic induction power transfer for industrial distribution",
    description:
      "Electrical transformers are designed to transfer electrical energy between circuits through electromagnetic induction.",
    imageUrl: "/images/harsh-blue-transformers.png",
    imageAlt: "Actual manufactured industrial electrical transformers with ceramic bushings at Harsh Industries workshop",
    features: [
      "Electromagnetic energy transfer",
      "Industrial & commercial distribution",
      "Robust magnetic core assembly",
      "Custom winding configurations on enquiry",
    ],
    learnMoreUrl: "/products/transformers",
  },
];

export const productsDetailData: Record<string, ProductItem> = {
  "current-transformers": {
    id: "ct-detail",
    slug: "current-transformers",
    title: "Current Transformers (CTs)",
    badge: "Instrument Transformer Manufacturing",
    shortDescription:
      "Current transformers are designed to reproduce in their secondary circuit an alternating current that is substantially proportional to the primary current under standard operating conditions.",
    workingPrinciple:
      "A Current Transformer operates on the principle of electromagnetic induction. The primary winding carries the power circuit current, producing an alternating magnetic flux in the laminated iron core. This flux induces a proportional secondary current through a secondary winding with higher turns, scaling the high line current down to a safe, standardized magnitude (such as 1A or 5A) that conventional meters, instrumentation panels, and protective relays can safely measure without exposing operators to line hazards.",
    applications: [
      "Ammeter and power factor meter instrumentation in switchgear panels",
      "Protective relay actuation for overcurrent, earth fault, and differential protection",
      "Energy metering and sub-metering in industrial distribution boards",
      "Current monitoring across manufacturing plant feeder lines",
      "SCADA and automated electrical telemetry integration",
    ],
    features: [
      "Provides vital galvanic isolation between high-power transmission circuits and measuring instruments",
      "Engineered with magnetic core laminations designed to minimize phase angle errors and ratio errors",
      "Designed for reliable continuous operation within electrical switchgear enclosures",
      "Fabricated with copper conductors and high-grade insulation systems",
    ],
    imageUrl: "/images/current-transformers-ct.jpg",
    imageAlt: "Industrial Current Transformers ready for panel assembly",
    placeholderNotice:
      "Exact technical specifications, core dimensions, burden ratings, and accuracy classes are manufactured to customer specifications and are available upon enquiry.",
    specs: [
      { label: "Product Type", value: "Current Transformer (CT)" },
      { label: "Primary Current Range", value: "Available upon enquiry", note: "Configured to client electrical single-line diagram" },
      { label: "Secondary Rated Current", value: "Available upon enquiry", note: "Standard 1A / 5A ratings upon request" },
      { label: "Rated Frequency", value: "Available upon enquiry", note: "Standard 50 Hz industrial frequency" },
      { label: "Rated Capacity / Burden", value: "Available upon enquiry", note: "Dependent on connected relay and meter burden" },
      { label: "Accuracy Class", value: "Available upon enquiry", note: "Metering and protection classes as per requirement" },
      { label: "Insulation Type", value: "Available upon enquiry", note: "Dry resin / tape wound / oil-immersed options" },
      { label: "Mounting Arrangement", value: "Available upon enquiry", note: "Busbar mounting, ring-type, or foot-mounted" },
      { label: "Application Environment", value: "Available upon enquiry", note: "Indoor switchboard or outdoor yard" },
    ],
  },
  "potential-transformers": {
    id: "pt-detail",
    slug: "potential-transformers",
    title: "Potential Transformers (PTs)",
    badge: "Voltage Transformer Manufacturing",
    shortDescription:
      "Potential transformers (voltage transformers) reduce high primary system voltages down to standardized secondary levels for safe voltage measurement, protection relays, and system telemetry.",
    workingPrinciple:
      "A Potential Transformer operates as a high-precision step-down transformer under low secondary load (near open-circuit conditions). It steps high primary voltage down to a safe, predictable secondary level (such as 110V phase-to-phase) with a strictly controlled ratio and minimal phase displacement. This allows standard voltmeters, wattmeters, synchronize relays, and protection systems to monitor high-voltage lines with safety and measurement fidelity.",
    applications: [
      "Busbar and feeder voltage monitoring in electrical substations",
      "Under-voltage and over-voltage protective relay systems",
      "Kilowatt-hour and maximum demand metering panels",
      "Synchronizing check relays and automated transfer switches (ATS)",
      "Industrial motor control center (MCC) voltage sensing",
    ],
    features: [
      "Accurate voltage transformation with tightly managed ratio errors across normal operational ranges",
      "Dielectric insulation engineered to withstand continuous operating voltage and transient line surges",
      "Compact structural footprint for integration into industrial switchboard cubicles",
      "Electrostatic shielding provisions to mitigate electromagnetic noise in precision metering circuits",
    ],
    imageUrl: "/images/potential-transformers-pt.jpg",
    imageAlt: "Potential Transformers engineered for high voltage reduction and instrumentation",
    placeholderNotice:
      "Specific system voltage ratings, insulation levels, winding ratios, and thermal burden ratings are tailored to industrial project requirements and available upon enquiry.",
    specs: [
      { label: "Product Type", value: "Potential Transformer (PT) / Voltage Transformer (VT)" },
      { label: "Primary Rated Voltage", value: "Available upon enquiry", note: "Customized to incoming industrial service voltage" },
      { label: "Secondary Rated Voltage", value: "Available upon enquiry", note: "Standard 110V / custom secondary outputs" },
      { label: "Rated Frequency", value: "Available upon enquiry", note: "50 Hz nominal operating frequency" },
      { label: "Rated Burden (VA)", value: "Available upon enquiry", note: "Sized to meter and relay load consumption" },
      { label: "Accuracy Class", value: "Available upon enquiry", note: "Specified as per metering or protection requirements" },
      { label: "Insulation Class", value: "Available upon enquiry", note: "High-grade industrial dielectric insulation" },
      { label: "Mounting Arrangement", value: "Available upon enquiry", note: "Base mounting / switchgear bracket mounting" },
      { label: "Service Application", value: "Available upon enquiry", note: "Indoor panel mounting or outdoor installation" },
    ],
  },
  transformers: {
    id: "transformers-detail",
    slug: "transformers",
    title: "Electrical Transformers",
    badge: "Industrial Transformer Manufacturing",
    shortDescription:
      "Industrial electrical transformers designed to step up or step down electrical energy between circuits through electromagnetic induction with high electrical efficiency and rugged mechanical reliability.",
    workingPrinciple:
      "Electrical transformers function on Faraday's law of mutual electromagnetic induction. An alternating current flowing through the primary winding generates a time-varying magnetic flux in the core. This magnetic circuit links with the secondary winding, inducing an alternating electromotive force (voltage) proportional to the turn ratio of the coils. This enables energy transfer across different voltage tiers without direct electrical connection, providing voltage conversion and galvanic isolation for industrial equipment.",
    applications: [
      "Industrial plant power distribution and localized step-down feeds",
      "Factory machinery and heavy motor drive power supply",
      "Control power supply for commercial and industrial automation panels",
      "Isolation of sensitive electronic equipment from electrical distribution transients",
      "Voltage matching for specialized electrical equipment",
    ],
    features: [
      "Precision-wound magnetic core built with low-loss electrical steel laminations",
      "High conductivity copper conductors wound for optimal thermal dissipation and mechanical rigidity",
      "Robust insulation barriers designed to withstand thermal cycling and electrical stresses",
      "Built for continuous duty in demanding industrial plant environments",
    ],
    imageUrl: "/images/harsh-blue-transformers.png",
    imageAlt: "Actual heavy industrial electrical transformers manufactured at Harsh Industries workshop",
    placeholderNotice:
      "Capacity ratings (kVA/MVA), primary/secondary voltages, tap changer options, cooling configurations, and physical dimensions are designed per client enquiry and single-line diagram.",
    specs: [
      { label: "Product Type", value: "Electrical Transformer" },
      { label: "Rated Capacity", value: "Available upon enquiry", note: "Configured based on industrial plant load analysis" },
      { label: "Primary Voltage Rating", value: "Available upon enquiry", note: "Built to match client incoming supply" },
      { label: "Secondary Voltage Rating", value: "Available upon enquiry", note: "Configured to machinery and panel requirements" },
      { label: "Rated Frequency", value: "Available upon enquiry", note: "50 Hz standard" },
      { label: "Cooling Method", value: "Available upon enquiry", note: "Air Natural (AN) / Oil Immersed options on enquiry" },
      { label: "Insulation Class", value: "Available upon enquiry", note: "High-temperature dielectric material systems" },
      { label: "Vector Group / Configuration", value: "Available upon enquiry", note: "Winding arrangement as per system requirement" },
      { label: "Installation Type", value: "Available upon enquiry", note: "Indoor factory floor or outdoor substation" },
    ],
  },
};
