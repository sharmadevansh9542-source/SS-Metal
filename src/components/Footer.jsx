import Link from "next/link";
import siteConfig from "../data/siteConfig";
import SmiLogo from "./SmiLogo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand info */}
          <div className="footer-brand">
            <Link href="/" className="brand-logo-link" style={{ marginBottom: 16, display: "inline-block" }}>
              <SmiLogo light={true} />
            </Link>
            <p>
              Manufacturers of Stainless Steel Circles, Blanks, Utensils & Farma Design. Stockiest of Stainless Steel Patta, Patti, Coil, Sheets, Wire, Rod & Pipe.
            </p>
            <div className="footer-badges">
              <span className="grade-badge footer-badge-amber">ISO Certified</span>
              <span className="grade-badge footer-badge-white">Export Quality</span>
              <span className="grade-badge footer-badge-white">Est. 1980</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/">› Home</Link></li>
              <li><Link href="/about">› Company Profile</Link></li>
              <li><Link href="/products">› Products Catalogue</Link></li>
              <li><Link href="/ready-stock">› Ready Stock Inventory</Link></li>
              <li><Link href="/manufacturing">› Infrastructure & Plant</Link></li>
              <li><Link href="/contact">› Contact & Enquiry</Link></li>
            </ul>
          </div>

          {/* Product Ranges */}
          <div>
            <h4 className="footer-heading">Product Ranges</h4>
            <ul className="footer-links">
              <li><Link href="/products/ss-coil">› SS Coil & Sheets</Link></li>
              <li><Link href="/products/ss-circle">› SS Circles & Blanks</Link></li>
              <li><Link href="/products/ss-utensils">› SS Utensils</Link></li>
              <li><Link href="/products/ss-farma-design">› SS Farma Design</Link></li>
              <li><Link href="/products/ss-wire">› SS Wire & Rods</Link></li>
              <li><Link href="/products/ss-pipe">› SS Pipes & Tubes</Link></li>
            </ul>
          </div>

          {/* Factory & Contact */}
          <div>
            <h4 className="footer-heading">Factory & Contact</h4>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0, marginTop: 4, color: "#f59e0b" }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
              </svg>
              <div>
                <strong>SS Metal Industries</strong><br />
                Bypass Road, Manoharpur, Moradabad, Uttar Pradesh, 244102, India
              </div>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0, marginTop: 4, color: "#f59e0b" }}>
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
              </svg>
              <div>
                <a href="tel:+919412236335">+91 9412236335</a> (Mr. Pradeep Kumar Agarwal)<br />
                <a href="tel:+919458771652">+91 9458771652</a> / <a href="tel:+917454874050">+91 74548 74050</a> (Shourya Bansal)
              </div>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ flexShrink: 0, marginTop: 4, color: "#f59e0b" }}>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <div>
                <a href="mailto:SSmetal1965@gmail.com">SSmetal1965@gmail.com</a>
              </div>
            </div>
            <div style={{ marginTop: 14 }}>
              <Link href="/contact" className="btn btn-outline-white btn-sm" style={{ width: "100%", justifyContent: "center" }}>
                <span>📄</span> Download Full Catalogue (PDF)
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 SS Metal Industries. All Rights Reserved. Moradabad, India.</p>
          <p>Stainless Steel Kalvat Utensils & Raw Materials Stockiest.</p>
        </div>
      </div>
    </footer>
  );
}
