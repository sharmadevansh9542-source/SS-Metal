import Link from "next/link";
import siteConfig from "../data/siteConfig";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-about">
          <Link className="brand brand-footer" href="/">
            <span className="brand-mark"><span>SM</span></span>
            <span className="brand-copy"><strong>SS Metal</strong><small>INDUSTRIES</small></span>
          </Link>
          <p>
            Stainless steelware shaped by practical manufacturing experience, careful finishing and a commitment to dependable trade relationships.
          </p>
          <a
            className="footer-cta"
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
          >
            Discuss a bulk requirement ↗
          </a>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/about">About Us</Link>
          <Link href="/manufacturing">Manufacturing</Link>
          <Link href="/quality">Quality Approach</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="footer-products">
          <h3>Product Range</h3>
          <div className="footer-product-links">
            <Link href="/products">All Products</Link>
            <Link href="/products/stainless-steel-kitchenware">Kitchenware</Link>
            <Link href="/products/cookware">Cookware</Link>
            <Link href="/products/barware">Barware</Link>
            <Link href="/products/bath-accessories">Bath Accessories</Link>
            <Link href="/products/unfinished-kalvat-utensils">Unfinished / Kalvat</Link>
            <Link href="/products/ss-coil">SS Coil</Link>
            <Link href="/products/ss-sheet">SS Sheet</Link>
            <Link href="/products/ss-circle">SS Circle</Link>
            <Link href="/products/ss-blank">SS Blank</Link>
            <Link href="/products/ss-utensils">SS Utensils</Link>
            <Link href="/products/ss-farma-design">SS Farma Design</Link>
            <Link href="/products/ss-wire">SS Wire</Link>
            <Link href="/products/ss-rod">SS Rod</Link>
            <Link href="/products/ss-pipe">SS Pipe</Link>
          </div>
        </div>
        <div className="footer-contact">
          <h3>Get in touch</h3>
          <p>{siteConfig.address}</p>
          <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>{siteConfig.phone}</a>
          <a href={`tel:${siteConfig.secondaryPhone.replaceAll(" ", "")}`}>{siteConfig.secondaryPhone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {new Date().getFullYear()} {siteConfig.brand}. Demo website.</span>
          <span>Stainless steelware · Manufacturing · Bulk enquiries</span>
        </div>
      </div>
    </footer>
  );
}
