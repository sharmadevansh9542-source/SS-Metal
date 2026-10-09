const siteConfig = {
    brand: "SS Metal Industries",
    tagline: "Precision-crafted stainless steelware",
    description: "Stainless steel kitchenware, cookware, barware, bath accessories and unfinished metal products for trade and manufacturing partners.",
    phone: "+91 94587 71652",
    secondaryPhone: "+91 63979 92907",
    email: "info@sagarmetalindustries.com",
    address: "Bypass Road, Manoharpur, Moradabad, Uttar Pradesh 244001, India",
    founded: "1980",
    whatsappNumber: "919458771652",
    navigation: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        {
            label: "Products",
            href: "/products",
            groups: [
                {
                    heading: "Finished Products",
                    items: [
                        { label: "All Products", href: "/products" },
                        { label: "Kitchenware", href: "/products/stainless-steel-kitchenware" },
                        { label: "Cookware", href: "/products/cookware" },
                        { label: "Barware", href: "/products/barware" },
                        { label: "Bath Accessories", href: "/products/bath-accessories" },
                        { label: "Unfinished / Kalvat", href: "/products/unfinished-kalvat-utensils" }
                    ]
                },
                {
                    heading: "Raw Material",
                    items: [
                        { label: "SS Coil", href: "/products/ss-coil" },
                        { label: "SS Sheet", href: "/products/ss-sheet" }
                    ]
                },
                {
                    heading: "In-house Manufacturing",
                    items: [
                        { label: "SS Circle", href: "/products/ss-circle" },
                        { label: "SS Blank", href: "/products/ss-blank" },
                        { label: "SS Utensils", href: "/products/ss-utensils" },
                        { label: "SS Farma Design", href: "/products/ss-farma-design" }
                    ]
                },
                {
                    heading: "Trade & Cutting",
                    items: [
                        { label: "SS Wire", href: "/products/ss-wire" },
                        { label: "SS Rod", href: "/products/ss-rod" },
                        { label: "SS Pipe", href: "/products/ss-pipe" }
                    ]
                }
            ],
            children: [
                { label: "Kitchenware", href: "/products/stainless-steel-kitchenware" },
                { label: "Cookware", href: "/products/cookware" },
                { label: "Barware", href: "/products/barware" },
                { label: "Bath Accessories", href: "/products/bath-accessories" },
                { label: "Unfinished / Kalvat", href: "/products/unfinished-kalvat-utensils" },
                { label: "SS Coil", href: "/products/ss-coil" },
                { label: "SS Sheet", href: "/products/ss-sheet" },
                { label: "SS Circle", href: "/products/ss-circle" },
                { label: "SS Blank", href: "/products/ss-blank" },
                { label: "SS Utensils", href: "/products/ss-utensils" },
                { label: "SS Farma Design", href: "/products/ss-farma-design" },
                { label: "SS Wire", href: "/products/ss-wire" },
                { label: "SS Rod", href: "/products/ss-rod" },
                { label: "SS Pipe", href: "/products/ss-pipe" }
            ]
        },
        { label: "Manufacturing", href: "/manufacturing" },
        { label: "Quality", href: "/quality" },
        { label: "Contact", href: "/contact" }
    ]
};

export default siteConfig;