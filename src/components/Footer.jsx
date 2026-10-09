import Link from "next/link";
import siteConfig from "../data/siteConfig";
import { productMenu } from "../data/products";

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
            {productMenu.map(group => {
              if (!group.items || group.items.length === 0) {
                return (
                  <Link key={group.href} href={group.href}>
                    {group.title}
                  </Link>
                );
              }
              return group.items.map(subItem => (
                <Link key={subItem.href} href={subItem.href}>
                  {subItem.label}
                </Link>
              ));
            })}
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
