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
            children: [
                { label: "Kitchenware", href: "/products/stainless-steel-kitchenware" },
                { label: "Cookware", href: "/products/cookware" },
                { label: "Barware", href: "/products/barware" },
                { label: "Bath Accessories", href: "/products/bath-accessories" },
                { label: "Unfinished / Kalvat", href: "/products/unfinished-kalvat-utensils" }
            ]
        },
        { label: "Manufacturing", href: "/manufacturing" },
        { label: "Quality", href: "/quality" },
        { label: "Contact", href: "/contact" }
    ]
};
export default siteConfig;