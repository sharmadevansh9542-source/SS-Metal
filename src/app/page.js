import Link from "next/link";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import PopularKalvatSection from "../components/PopularKalvatSection";
import StatsSection from "../components/StatsSection";
import { ArrowRight } from "../components/Icons";
import siteConfig from "../data/siteConfig";

const featuredCategories = [
  {
    name: "Raw Material",
    slug: "raw-material",
    href: "/products/raw-material",
    image: "/images/ss-coil.jpg",
    eyebrow: "Raw Material",
    description: "High-grade stainless steel coils and sheets supplied for industrial forming, stamping and fabrication."
  },
  {
    name: "In-house Manufacturing",
    slug: "in-house-manufacturing",
    href: "/products/in-house-manufacturing",
    image: "/images/ss-manufacturing-plant.jpg",
    eyebrow: "In-house Manufacturing",
    description: "Precision-cut circles, blanks, fabricated utensils and custom farma tooling produced in-house."
  },
  {
    name: "Trade & Cutting",
    slug: "trade-and-cutting",
    href: "/products/trade-and-cutting",
    image: "/images/ss-trade-cutting.jpg",
    eyebrow: "Trade & Cutting",
    description: "Stainless steel wires, solid rods and commercial pipes cut to size for trade and engineering applications."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-image-layer"></div>
        <div className="container home-hero-inner">
          <div className="hero-copy">
            <p className="eyebrow light" data-aos="fade-up" data-aos-delay="100">
              <span className="eyebrow-line"></span> Stainless steel manufacturing
            </p>
            <h1 data-aos="fade-up" data-aos-delay="150">
              Made with metal.<br />
              <em>Built on trust.</em>
            </h1>
            <p className="hero-lead" data-aos="fade-up" data-aos-delay="200">
              Precision stainless steel coils, sheets, circles, blanks, and cut-to-size products for trade and manufacturing partners—shaped with care and engineered for industry.
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="250">
              <Link className="button button-copper" href="/products">
                Explore our products <ArrowRight />
              </Link>
              <Link className="button button-outline-light" href="/about">
                Discover our story
              </Link>
            </div>
            <div className="hero-note" data-aos="fade-up" data-aos-delay="300">
              <span className="hero-note-line"></span>
              <span>
                Manufacturing experience<br />
                <strong>Since {siteConfig.founded}</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Ready Stock Callout Strip */}
      <section className="ready-stock-strip" data-aos="fade-up">
        <div className="container ready-stock-strip-inner">
          <div className="rss-left">
            <div className="rss-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
            </div>
            <div className="rss-text">
              <h4>Looking for Immediate Delivery? Check Ready Stock Inventory</h4>
              <p>We maintain active stock of SS Circles, Blanks, Coils, Sheets, Pipes, and Farma tooling ready for quick dispatch.</p>
            </div>
          </div>
          <div>
            <Link href="/ready-stock" className="btn btn-accent">
              <span>Browse Ready Stock Table</span> <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section-credentials">
        <div className="container">
          <div className="credentials-grid">
            <div className="credential-card" data-aos="fade-up" data-aos-delay="100">
              <div className="credential-badge-icon">
                <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div className="credential-info">
                <h3>Since 1980</h3>
                <p>Over 4 decades of continuous excellence in stainless steelware and metal manufacturing.</p>
              </div>
            </div>

            <div className="credential-card" data-aos="fade-up" data-aos-delay="200">
              <div className="credential-badge-icon">
                <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <div className="credential-info">
                <h3>ISO Certified</h3>
                <p>Adherence to rigorous international quality management systems and precise manufacturing standards.</p>
              </div>
            </div>

            <div className="credential-card" data-aos="fade-up" data-aos-delay="300">
              <div className="credential-badge-icon">
                <svg viewBox="0 0 24 24" width="34" height="34" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                </svg>
              </div>
              <div className="credential-info">
                <h3>Export Quality</h3>
                <p>Supplying world-class industrial stainless steel and formed products customized for top businesses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="section-about">
        <div className="container">
          <div className="about-grid">
            <div data-aos="fade-up">
              <span className="section-kicker">Welcome to SS Metal Industries</span>
              <h2 className="section-title">Pioneering Industrial &amp; Formed Steelware in India</h2>
              <div className="title-divider"></div>
              <p className="about-lead">
                SS Metal Industries is a well-known stainless steel manufacturing company providing premium raw materials, in-house blanks, circles, utensils, and trade products in India.
              </p>
              <div className="about-body">
                <p>
                  Established in 1980, the relentless quality of our products has earned profound goodwill and made SS Metal Industries a reputed benchmark name in the stainless steel industry today.
                </p>
                <p>
                  We proudly proclaim that we have exceeded the expectation of every customer by offering an outstanding range of stainless steel products with great value for money. We operate a fully equipped plant to manufacture the best quality steelware to meet excellent international quality standards.
                </p>
                <p>
                  Every product from the house of SS Metal Industries is a result of endearing master craftsmanship. The in-house technical team clinically tests every product for its metallurgical and dimensional quality before delivery.
                </p>
              </div>

              <h4 style={{ fontSize: "1rem", color: "#0a2540", marginTop: 14 }}>Steel Grades Manufactured &amp; Stocked:</h4>
              <div className="grades-pill-group">
                <span className="grade-badge">Grade JSLU</span>
                <span className="grade-badge">Grade J4</span>
                <span className="grade-badge">Grade 304</span>
                <span className="grade-badge">Grade 316</span>
                <span className="grade-badge">Grade 410</span>
                <span className="grade-badge">Grade 430</span>
              </div>

              <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap", marginTop: 10 }}>
                <Link href="/about" className="btn btn-primary">
                  <span>Full Company Profile</span>
                </Link>
                <Link href="/manufacturing" className="btn btn-outline">
                  <span>Factory &amp; Plant Tour</span>
                </Link>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="150">
              <div className="about-media-card">
                <img src="/images/company-headquarters.jpg" alt="SS Metal Industries Manufacturing Plant & Headquarters Moradabad" />
                <div className="about-floating-badge">
                  <div className="num">35K+</div>
                  <div className="lbl">Pieces Produced Daily</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Unfinished Kalvat Products Section */}
      <PopularKalvatSection />
      <section className="featured-categories-section">
        <div className="container">
          <div className="featured-categories-header" data-aos="fade-up">
            <div>
              <p className="eyebrow">Product Categories</p>
              <h2>
                Crafted for <em>industry &amp; trade.</em>
              </h2>
            </div>
            <Link className="text-link" href="/products">
              Explore all categories <ArrowRight />
            </Link>
          </div>
          <div className="featured-categories-grid">
            {featuredCategories.map((cat, idx) => (
              <article
                key={cat.slug}
                className="featured-category-card"
                data-aos="fade-up"
                data-aos-delay={(idx + 1) * 120}
              >
                <Link
                  className="featured-category-visual"
                  href={cat.href}
                  aria-label={`View ${cat.name}`}
                >
                  <span className="featured-category-num">0{idx + 1}</span>
                  <img src={cat.image} alt={`${cat.name} illustration`} />
                </Link>
                <div className="featured-category-body">
                  <span className="featured-category-eyebrow">{cat.eyebrow}</span>
                  <h3 className="featured-category-title">
                    <Link href={cat.href}>{cat.name}</Link>
                  </h3>
                  <p className="featured-category-desc">{cat.description}</p>
                  <Link className="featured-category-link" href={cat.href}>
                    Explore Products <ArrowRight />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Signature & Popular Products */}
      <section className="products-section section-pad section-soft">
        <div className="container">
          <div className="section-heading" data-aos="fade-up">
            <div>
              <span className="section-kicker">Signature Highlights</span>
              <h2 className="section-title">
                Our Popular &ndash; In-House &amp; Industrial Products
              </h2>
              <div className="title-divider"></div>
            </div>
            <div className="heading-side">
              <p>
                From precision circles and blanks to coils, sheets, and cut-to-size materials, explore our ready and custom manufacturing options.
              </p>
              <Link className="text-link" href="/products">
                View all products in catalogue <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="product-grid">
            {products.slice(0, 6).map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Live Stats */}
      <StatsSection />

      {/* Executive Leadership / Management Team */}
      <section className="section-team">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }} data-aos="fade-up">
            <span className="section-kicker">Executive Leadership</span>
            <h2 className="section-title">Management Team</h2>
            <div className="title-divider center"></div>
            <p style={{ color: "#64748b", fontSize: "1.05rem" }}>
              Meet our visionary leadership driving quality, continuous innovation, and trusted customer relationships worldwide.
            </p>
          </div>

          <div className="team-grid">
            <div className="team-card" data-aos="fade-up" data-aos-delay="150">
              <div className="team-avatar">SB</div>
              <div className="team-info">
                <h3>Mr. Pradeep Kumar Agarwal</h3>
                <p className="team-role">Managing Director</p>
                <div className="team-phone">
                  <span>📞</span>
                  <a href="tel:+919412236335">+91 9412236335</a> • <a href="tel:+919458771652">+91 9458771652</a>
                </div>
              </div>
            </div>

            {/* <div className="team-card">
              <div className="team-avatar">SB</div>
              <div className="team-info">
                <h3>Shourya Bansal</h3>
                <p className="team-role">Managing Director</p>
                <div className="team-phone">
                  <span>📞</span>
                  <a href="tel:+919458771652">+91 9458771652</a> • <a href="tel:+917454874050">+91 74548 74050</a>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>

      {/* Manufacturing Infrastructure Preview */}
      <section style={{ padding: "80px 0", background: "#f8fafc" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }} data-aos="fade-up">
            <span className="section-kicker">World-Class Facility</span>
            <h2 className="section-title">Manufacturing Infrastructure</h2>
            <div className="title-divider center"></div>
            <p style={{ color: "#64748b" }}>
              Equipped with high-tonnage hydraulic deep draw presses, automatic beading &amp; trimming lines, and state-of-the-art dispatch warehouse located on Moradabad Bypass.
            </p>
          </div>

          <div className="infra-gallery-grid">
            <div className="infra-card" data-aos="fade-up" data-aos-delay="100">
              <img src="/images/ss-coil.jpg" alt="Main Warehouse & Storage" />
              <div className="infra-caption">📍 Main Coils Storage &amp; Dispatch Line</div>
            </div>
            <div className="infra-card" data-aos="fade-up" data-aos-delay="200">
              <img src="/images/factory.jpg" alt="Machinery Lines" />
              <div className="infra-caption">⚙️ Heavy Forming &amp; Deep Draw Plant</div>
            </div>
            <div className="infra-card" data-aos="fade-up" data-aos-delay="300">
              <img src="/images/ss-trade-cutting.jpg" alt="Pipes and Blanks Staging" />
              <div className="infra-caption">📦 Precision Cut Blanks &amp; Tubes Staging</div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 36 }} data-aos="fade-up" data-aos-delay="200">
            <Link href="/manufacturing" className="btn btn-outline">
              <span>View Full Infrastructure &amp; Plant Tour</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-cta-banner">
        <div className="container" data-aos="fade-up">
          <h2>Partner with India&apos;s Leading Stainless Steel Manufacturer</h2>
          <p>
            Whether you need precision circles, pre-cut blanks, raw steel coils, sheets, or pipes, our directors are available to serve your requirements.
          </p>
          <div className="section-cta-banner-btns">
            <Link href="/contact" className="btn btn-accent btn-lg">
              <span>Send Business Enquiry</span>
            </Link>
            <a
              href="https://wa.me/919412236335?text=Hello%20SS%20Metal%20Industries%2C%20I%20want%20to%20inquire%20about%20your%20products"
              target="_blank"
              rel="noreferrer"
              className="btn btn-whatsapp btn-lg"
            >
              <span>Chat on WhatsApp Now</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
