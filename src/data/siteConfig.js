import { productMenu } from "./products";

const siteConfig = {
  brand: "SS Metal Industries",
  brandTitle: "SS METAL",
  brandSub: "INDUSTRIES • EST. 1980",
  tagline: "Stainless Steel Utensils & Kalvat Manufacturers Moradabad",
  description: "SS Metal Industries (Est. 1980) - Leading manufacturers of Stainless Steel Circles, Blanks, Utensils, Farma Design & Raw Material Stockiest in Moradabad.",
  phone: "+91 9412236335",
  secondaryPhone: "+91 94587 71652",
  tertiaryPhone: "+91 74548 74050",
  contactPerson1: "Mr. Pradeep Kumar Agarwal",
  // contactPerson2: "Shourya Bansal",
  email: "SSmetal1965@gmail.com",
  address: "Bypass Road, Manoharpur, Moradabad, Uttar Pradesh, 244102, India",
  founded: "1980",
  whatsappNumber: "919412236335",
  productMenu,
  navigation: [
    { label: "Home", href: "/" },
    { label: "Company Profile", href: "/about" },
    {
      label: "Products",
      href: "/products",
      menu: productMenu
    },
    { label: "Ready Stock", href: "/ready-stock" },
    { label: "Infrastructure", href: "/manufacturing" },
    { label: "Enquiry & Contact", href: "/contact" }
  ]
};

export default siteConfig;