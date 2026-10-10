import Link from "next/link";
import PageHero from "../../components/PageHero";
import siteConfig from "../../data/siteConfig";
import { ArrowRight } from "../../components/Icons";

export const metadata = {
  title: "Company Profile - SS Metal Industries Moradabad",
  description: "Established in 1980, SS Metal Industries is a premier manufacturer of stainless steel circles, blanks, utensils, and raw material stockiest in Moradabad."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ESTABLISHED 1980 • MORADABAD"
        title="About SS Metal Industries"
        highlight="Four Decades Of Metal Craftsmanship."
        description="Four decades of trusted excellence in stainless steel raw materials, in-house circle blanking, kalvat utensils, and industrial metal supplies across India."
        image="/images/company-headquarters.jpg"
        primaryAction={{
          label: "Explore Our Products",
          href: "/products"
        }}
        secondaryAction={{
          label: "View Ready Stock ⚡",
          href: "/ready-stock"
        }}
        note="Manufacturing Plant & Head Office • Bypass Road, Moradabad"
      />

      {/* Main Company Story Section */}
      <section className="section-pad">
        <div className="container about-executive-grid">
          <div className="about-executive-copy">
            <span className="section-kicker">COMPANY PROFILE &amp; HERITAGE</span>
            <h2 className="section-title">
              Experience shaped by four decades of <em>metal craftsmanship.</em>
            </h2>
            <div className="title-divider"></div>

            <p className="body-large">
              Established in {siteConfig.founded}, <strong>SS Metal Industries</strong> has grown into one of North India&apos;s benchmark manufacturing and distribution houses for stainless steel industrial goods, blanks, and formed steelware.
            </p>
            <p>
              Headquartered on Bypass Road, Manoharpur, Moradabad, our integrated facility combines wholesale raw material stockholding (coils, sheets, patta, patti, pipes, rods, and wires) with advanced in-house hydraulic pressing, deep-drawing, and circle blanking operations.
            </p>
            <p>
              Under the visionary leadership of <strong>{siteConfig.contactPerson1}</strong> and <strong>{siteConfig.contactPerson2}</strong>, we have built enduring trade partnerships with utensil manufacturers, automotive fabricators, engineering units, and export houses across India and overseas markets.
            </p>

            <div className="executive-highlights-list">
              <div className="executive-highlight-item">
                <span className="highlight-icon">✓</span>
                <div>
                  <strong>In-House Manufacturing Excellence</strong>
                  <p>Precision circles, blanks, farma tooling, and deep-drawn kalvat vessels made to exact customer drawings.</p>
                </div>
              </div>
              <div className="executive-highlight-item">
                <span className="highlight-icon">✓</span>
                <div>
                  <strong>Certified Multi-Grade Stocking</strong>
                  <p>Readily available inventories in JSLU, J4, 304, 316, 410, and 430 grades for immediate factory dispatch.</p>
                </div>
              </div>
              <div className="executive-highlight-item">
                <span className="highlight-icon">✓</span>
                <div>
                  <strong>Strict Metallurgical Quality Control</strong>
                  <p>Every lot is clinically checked for thickness tolerance, chemical composition, and flawless drawing performance.</p>
                </div>
              </div>
            </div>

            <div className="about-action-group">
              <Link href="/products" className="btn btn-primary">
                <span>Explore Products Catalogue</span> <ArrowRight />
              </Link>
              <Link href="/ready-stock" className="btn btn-warning">
                <span>Check Ready Stock</span>
              </Link>
            </div>
          </div>

          <div className="about-executive-visual">
            <div className="corporate-image-wrapper">
              <img
                src="/images/company-headquarters.jpg"
                alt="SS Metal Industries Manufacturing Plant and Headquarters Moradabad"
                className="corporate-main-img"
              />
              <div className="corporate-floating-card">
                <div className="cfc-number">40+</div>
                <div className="cfc-text">
                  <strong>Years of Metal Mastery</strong>
                  <span>Est. {siteConfig.founded} • Moradabad Plant</span>
                </div>
              </div>
            </div>

            <div className="plant-quick-specs">
              <div className="plant-spec-box">
                <span className="ps-val">35,000+</span>
                <span className="ps-lbl">Pieces Daily Capacity</span>
              </div>
              <div className="plant-spec-box">
                <span className="ps-val">6+ Grades</span>
                <span className="ps-lbl">JSLU, J4, 304, 316, 410, 430</span>
              </div>
              <div className="plant-spec-box">
                <span className="ps-val">100% QC</span>
                <span className="ps-lbl">In-house Lab Checked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance & Infrastructure Section */}
      <section className="section-pad section-soft">
        <div className="container">
          <div className="about-executive-grid reverse-on-desktop">
            <div className="about-executive-visual">
              <div className="corporate-image-wrapper">
                <img
                  src="/images/company-quality-lab.jpg"
                  alt="SS Metal Industries In-house Quality Assurance Laboratory"
                  className="corporate-main-img"
                />
                <div className="corporate-floating-card">
                  <div className="cfc-icon">🔬</div>
                  <div className="cfc-text">
                    <strong>Quality Assurance Lab</strong>
                    <span>Spectrometer &amp; Caliper Inspection</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-executive-copy">
              <span className="section-kicker">INFRASTRUCTURE &amp; LAB TESTING</span>
              <h2 className="section-title">
                Zero-compromise testing for <em>repeatable precision.</em>
              </h2>
              <div className="title-divider"></div>

              <p className="body-large">
                At SS Metal Industries, quality is not a final checkpoint—it is engineered into every stage of coil slitting, circle cutting, and utensil drawing.
              </p>
              <p>
                Our on-site testing facility is equipped with optical emission spectrometers, digital micrometers, and mechanical drawing testers to confirm the metallurgical integrity of every consignment before it leaves our premises.
              </p>

              <div className="quality-checklist-grid">
                <div className="qc-check-item">
                  <h4>Spectrometric Analysis</h4>
                  <p>Accurate verification of Nickel, Chromium, and Carbon content ensuring strict compliance with AISI/ASTM standards.</p>
                </div>
                <div className="qc-check-item">
                  <h4>Dimensional Gauging</h4>
                  <p>Continuous digital micrometer measurement ensuring uniform thickness tolerance from 0.4 mm to 1.2 mm.</p>
                </div>
                <div className="qc-check-item">
                  <h4>Deep-Drawing Integrity</h4>
                  <p>Uniform grain structure verification to prevent splitting, cracking, or orange-peel effects during spinning operations.</p>
                </div>
                <div className="qc-check-item">
                  <h4>Smooth Burr-Free Edges</h4>
                  <p>Precision shearing lines ensuring smooth, safe edges ready for direct die insertion in customer facilities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="section-pad">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR CORE PHILOSOPHY</p>
              <h2>Practical values.<br /><em>Lasting trade partnerships.</em></h2>
            </div>
            <p className="heading-description">
              A reliable manufacturing partnership is built on transparent grades, guaranteed delivery timelines, and consistent batch quality.
            </p>
          </div>
          <div className="value-grid">
            <article>
              <span>01</span>
              <h3>Material Authenticity</h3>
              <p>Absolute transparency in grade certification. When you order 304 or J4, you receive verified metallurgy every single time.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Master Craftsmanship</h3>
              <p>Four decades of tooling insight ensures optimal blank diameters, minimum scrap generation, and perfect drawing depths.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Prompt Dispatch</h3>
              <p>Massive ready-stock warehousing in Moradabad enables rapid dispatch for high-volume orders across India.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Leadership & Direct Contact Banner */}
      <section className="company-leadership-band">
        <div className="container">
          <div className="leadership-content">
            <div className="leadership-text">
              <span className="eyebrow light">DIRECT EXECUTIVE DESK</span>
              <h2>Speak with our leadership team directly.</h2>
              <p>
                Whether you need custom circle dimensions, large volume coil supply, or technical advice for deep drawing tooling, our directors are accessible.
              </p>
            </div>
            <div className="leadership-contacts-box">
              <div className="leader-card">
                <h4>{siteConfig.contactPerson1}</h4>
                <p>Founder &amp; Managing Partner</p>
                <a href={`tel:${siteConfig.phone}`} className="leader-tel">{siteConfig.phone}</a>
              </div>
              <div className="leader-card">
                <h4>{siteConfig.contactPerson2}</h4>
                <p>Director &amp; Operations</p>
                <a href={`tel:${siteConfig.secondaryPhone}`} className="leader-tel">{siteConfig.secondaryPhone}</a>
              </div>
              <div className="leader-action">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello SS Metal Industries, I want to discuss a business requirement.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-whatsapp"
                >
                  Direct WhatsApp Chat
                </a>
                <Link href="/contact" className="btn btn-outline-white">
                  Send Formal Enquiry →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}