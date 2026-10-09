const products = [
  {
    slug: "stainless-steel-kitchenware",
    title: "Stainless Steel Kitchenware",
    short: "Everyday utility, carefully formed in stainless steel.",
    description: "A broad range of practical stainless-steel kitchen products for distributors, wholesalers and commercial buyers. Product shapes, finishes and pack options can be configured for project requirements.",
    image: "/images/kitchenware.svg",
    eyebrow: "Kitchen essentials",
    group: "Finished Products",
    items: ["Mixing bowls", "Serving bowls", "Storage containers", "Utility vessels"]
  },
  {
    slug: "cookware",
    title: "Cookware",
    short: "Durable forms for busy kitchens and food service.",
    description: "Cookware concepts designed around useful forms, consistent finishing and dependable everyday performance. Confirm material grade, dimensions and compatibility before ordering.",
    image: "/images/cookware.svg",
    eyebrow: "Cookware range",
    group: "Finished Products",
    items: ["Cooking pots", "Saucepans", "Lids and covers", "Commercial kitchen vessels"]
  },
  {
    slug: "barware",
    title: "Barware",
    short: "Polished pieces for hospitality, gifting and service.",
    description: "A range of stainless-steel barware and hospitality pieces with clean silhouettes and polished finishes. Custom bulk enquiries are welcome.",
    image: "/images/barware.svg",
    eyebrow: "Hospitality",
    group: "Finished Products",
    items: ["Ice buckets", "Beer mugs", "Bar accessories", "Serving pieces"]
  },
  {
    slug: "bath-accessories",
    title: "Bath Accessories",
    short: "Functional metal accessories with a clean finish.",
    description: "Stainless-steel accessory concepts for bath and utility spaces. Ask the team about available designs, finish options and order quantities.",
    image: "/images/bathware.svg",
    eyebrow: "Bath & utility",
    group: "Finished Products",
    items: ["Bathroom containers", "Utility holders", "Small metal accessories", "Custom product enquiries"]
  },
  {
    slug: "unfinished-kalvat-utensils",
    title: "Unfinished / Kalvat Utensils",
    short: "Manufacturing-ready forms for downstream finishing.",
    description: "Unfinished stainless-steel utensils and Kalvat products for finishing, polishing and further processing. Specifications and dimensions must be confirmed for each requirement.",
    image: "/images/kalvat.svg",
    eyebrow: "Bulk manufacturing",
    group: "Finished Products",
    items: ["Unfinished vessels", "Bowls and containers", "Kalvat utensil forms", "Bulk product enquiries"]
  },
  {
    slug: "ss-coil",
    title: "SS Coil",
    short: "Precision-slit and full-width coils for industrial forming.",
    description: "High-grade stainless steel coils supplied for stamping, roll forming and deep drawing requirements. Grade, thickness and size available on request.",
    image: "/images/ss-coil.svg",
    eyebrow: "Raw Material",
    group: "Raw Material",
    items: ["Hot rolled & cold rolled coils", "Slit coils & custom widths", "Grade, thickness and size available on request", "Custom packaging & bulk supply"]
  },
  {
    slug: "ss-sheet",
    title: "SS Sheet",
    short: "Flat stainless steel sheets cut to standard and custom sizes.",
    description: "Stainless steel sheets suitable for fabrication, utensil production, and engineering works. Grade, thickness and size available on request.",
    image: "/images/ss-sheet.svg",
    eyebrow: "Raw Material",
    group: "Raw Material",
    items: ["Standard & cut-to-length sheets", "Commercial & industrial finishes", "Grade, thickness and size available on request", "Custom order quantities"]
  },
  {
    slug: "ss-circle",
    title: "SS Circle",
    short: "Precision-cut circles for spinning and utensil pressing.",
    description: "Circles cut in-house with uniform edges and consistent material thickness, ideal for kitchenware drawing and vessel pressing. Grade, thickness and size available on request.",
    image: "/images/ss-circle.svg",
    eyebrow: "In-house Manufacturing",
    group: "In-house Manufacturing",
    items: ["Deep drawing quality circles", "Smooth trimmed edges", "Grade, thickness and size available on request", "Bulk manufacturing lots"]
  },
  {
    slug: "ss-blank",
    title: "SS Blank",
    short: "Pre-cut blanks ready for press, stamp, and forming lines.",
    description: "Manufactured stainless steel blanks tailored for precise stamping and forming lines. Grade, thickness and size available on request.",
    image: "/images/ss-blank.svg",
    eyebrow: "In-house Manufacturing",
    group: "In-house Manufacturing",
    items: ["Press-ready shaped blanks", "Custom dimension tooling", "Grade, thickness and size available on request", "Batch manufacturing enquiries"]
  },
  {
    slug: "ss-utensils",
    title: "SS Utensils",
    short: "In-house fabricated stainless steel utensils for trade distribution.",
    description: "Sturdy, reliably manufactured stainless steel utensils formed in our facility. Grade, thickness and size available on request.",
    image: "/images/ss-utensils.svg",
    eyebrow: "In-house Manufacturing",
    group: "In-house Manufacturing",
    items: ["Daily utility utensils", "Commercial serving pieces", "Grade, thickness and size available on request", "Custom bulk packaging"]
  },
  {
    slug: "ss-farma-design",
    title: "SS Farma Design",
    short: "Custom patterned and shaped farma designs for specialized metal fabrication.",
    description: "Specialized farma design tooling and shaped metal templates produced in-house for traditional and modern metal forming. Grade, thickness and size available on request.",
    image: "/images/ss-farma-design.svg",
    eyebrow: "In-house Manufacturing",
    group: "In-house Manufacturing",
    items: ["Custom Farma patterns", "Forming dies & templates", "Grade, thickness and size available on request", "Tailored tooling enquiries"]
  },
  {
    slug: "ss-wire",
    title: "SS Wire",
    short: "Drawn and cut stainless steel wire in various tempers and gauges.",
    description: "Stainless steel wire supplied for spring making, kitchen baskets, mesh, and structural applications. Grade, thickness and size available on request.",
    image: "/images/ss-wire.svg",
    eyebrow: "Trade & Cutting",
    group: "Trade & Cutting",
    items: ["Bright & annealed wire coils", "Cut length straight wires", "Grade, thickness and size available on request", "Trade & coil supply"]
  },
  {
    slug: "ss-rod",
    title: "SS Rod",
    short: "Solid round and hex stainless steel rods cut to requirement.",
    description: "High-tensile stainless steel rods for machining, fabrication, shafting, and hardware production. Grade, thickness and size available on request.",
    image: "/images/ss-rod.svg",
    eyebrow: "Trade & Cutting",
    group: "Trade & Cutting",
    items: ["Round, hex & square bar stock", "Cut-to-size trade lots", "Grade, thickness and size available on request", "Commercial enquiry support"]
  },
  {
    slug: "ss-pipe",
    title: "SS Pipe",
    short: "Welded and seamless stainless steel pipes and tubes.",
    description: "Durable stainless steel pipes for architectural railings, plumbing, exhaust and industrial piping systems. Grade, thickness and size available on request.",
    image: "/images/ss-pipe.svg",
    eyebrow: "Trade & Cutting",
    group: "Trade & Cutting",
    items: ["Round & rectangular tubing", "Mirror & satin surface finishes", "Grade, thickness and size available on request", "Custom cut lengths"]
  }
];

export default products;
