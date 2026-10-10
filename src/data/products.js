export const productMenu = [
  {
    title: "All Products",
    slug: "all-products",
    href: "/products",
    items: []
  },
  {
    title: "Raw Material",
    slug: "raw-material",
    href: "/products/raw-material",
    description: "High-grade stainless steel coils and sheets supplied for industrial forming and fabrication. Grade, thickness and size available on request.",
    items: [
      { label: "SS Coil", slug: "ss-coil", href: "/products/ss-coil" },
      { label: "SS Sheet", slug: "ss-sheet", href: "/products/ss-sheet" }
    ]
  },
  {
    title: "In-house Manufacturing",
    slug: "in-house-manufacturing",
    href: "/products/in-house-manufacturing",
    description: "Precision-cut circles, blanks, fabricated utensils and custom farma tooling produced in-house. Grade, thickness and size available on request.",
    items: [
      { label: "SS Circle", slug: "ss-circle", href: "/products/ss-circle" },
      { label: "SS Blank", slug: "ss-blank", href: "/products/ss-blank" },
      { label: "SS Utensils", slug: "ss-utensils", href: "/products/ss-utensils" },
      { label: "SS Farma Design", slug: "ss-farma-design", href: "/products/ss-farma-design" }
    ]
  },
  {
    title: "Trade & Cutting",
    slug: "trade-and-cutting",
    href: "/products/trade-and-cutting",
    description: "Stainless steel wires, solid rods and commercial pipes cut to size for trade and engineering applications. Grade, thickness and size available on request.",
    items: [
      { label: "SS Wire", slug: "ss-wire", href: "/products/ss-wire" },
      { label: "SS Rod", slug: "ss-rod", href: "/products/ss-rod" },
      { label: "SS Pipe", slug: "ss-pipe", href: "/products/ss-pipe" }
    ]
  }
];

const products = [
  {
    slug: "ss-coil",
    title: "SS Coil",
    short: "Precision-slit and full-width coils for industrial forming.",
    description: "High-grade stainless steel coils supplied for stamping, roll forming and deep drawing requirements. Grade, thickness and size available on request.",
    image: "/images/ss-coil.jpg",
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
    description: "Circles cut in-house with uniform edges and consistent material thickness, ideal for utensil drawing and vessel pressing. Grade, thickness and size available on request.",
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
    image: "/images/ss-blank.jpg",
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
    image: "/images/ss-pipe.jpg",
    eyebrow: "Trade & Cutting",
    group: "Trade & Cutting",
    items: ["Round & rectangular tubing", "Mirror & satin surface finishes", "Grade, thickness and size available on request", "Custom cut lengths"]
  }
];

export default products;
