import Link from "next/link";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { ArrowRight } from "../components/Icons";
import siteConfig from "../data/siteConfig";

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="hero-image-layer"></div>
        <div className="container home-hero-inner">
          <div className="hero-copy">
            <p className="eyebrow light">
              <span className="eyebrow-line"></span> Stainless steel manufacturing
            </p>
            <h1>
              Made with metal.<br />
              <em>Built on trust.</em>
            </h1>
            <p className="hero-lead">
              A wide range of stainless steelware for kitchens, hospitality and manufacturing partners—shaped with care and finished for your market.
            </p>
            <div className="hero-actions">
              <Link className="button button-copper" href="/products">
                Explore our products <ArrowRight />
              </Link>
              <Link className="button button-outline-light" href="/about">
                Discover our story
              </Link>
            </div>
            <div className="hero-note">
              <span className="hero-note-line"></span>
              <span>
                Manufacturing experience<br />
                <strong>Since {siteConfig.founded}</strong>
              </span>
            </div>
          </div>
          <div className="hero-stamp">
            <span>SMI</span>
            <small>
              STAINLESS<br />STEELWARE
            </small>
            <i></i>
          </div>
        </div>
        <div className="hero-bottom-bar">
          <div className="container hero-bottom-inner">
            <span>Kitchenware</span>
            <b>×</b>
            <span>Cookware</span>
            <b>×</b>
            <span>Barware</span>
            <b>×</b>
            <span>Unfinished products</span>
            <span className="hero-bottom-caption">Built for business</span>
          </div>
        </div>
      </section>

      <section className="intro-section section-pad">
        <div className="container intro-grid">
          <div className="section-kicker">
            <span>01 / WHO WE ARE</span>
            <div className="vertical-rule"></div>
            <p>
              Manufacturing with<br />purpose and precision.
            </p>
          </div>
          <div className="intro-main">
            <p className="eyebrow">A partner for stainless steelware</p>
            <h2>
              Metalwork that meets the demands of <em>everyday life.</em>
            </h2>
            <p className="body-large">
              SS Metal Industries is associated with stainless steel kitchenware, cookware, bath accessories, barware and unfinished products. We bring practical product knowledge together with a manufacturing-first mindset to serve trade and bulk requirements.
            </p>
            <div className="intro-bottom">
              <Link className="text-link" href="/about">
                More about us <ArrowRight />
              </Link>
              <div className="intro-stat">
                <strong>1980</strong>
                <span>
                  Year established<br />as publicly described
                </span>
              </div>
            </div>
          </div>
          <div className="intro-image">
            <img
              src="/images/metal-work.svg"
              alt="Illustration of stainless steel vessels and metalwork"
            />
            <span className="image-caption">FORM · FINISH · FUNCTION</span>
          </div>
        </div>
      </section>

      <section className="products-section section-pad section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / OUR PRODUCT RANGE</p>
              <h2>
                Products made for<br />
                <em>many purposes.</em>
              </h2>
            </div>
            <div className="heading-side">
              <p>
                From polished hospitality pieces to unfinished utensil forms, explore the categories available for trade enquiries.
              </p>
              <Link className="text-link" href="/products">
                View all products <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="product-grid">
            {products.map((product, i) => (
              <ProductCard
                key={product.slug}
                product={product}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="manufacturing-section section-pad">
        <div className="container manufacturing-grid">
          <div className="manufacturing-art">
            <img
              src="/images/factory.svg"
              alt="Illustration of an industrial metal workshop"
            />
            <span className="art-label">BUILT FOR BULK REQUIREMENTS</span>
          </div>
          <div className="manufacturing-copy">
            <p className="eyebrow light">03 / OUR APPROACH</p>
            <h2>
              From raw form<br />to <em>ready potential.</em>
            </h2>
            <p>
              Manufacturing is more than machinery. It is a sequence of considered decisions—form, material, finish and consistency—made with the customer’s requirements in mind.
            </p>
            <div className="approach-list">
              <div>
                <span>01</span>
                <p>
                  <strong>Product understanding</strong>
                  <small>Clarify form, use and specifications.</small>
                </p>
              </div>
              <div>
                <span>02</span>
                <p>
                  <strong>Process-focused work</strong>
                  <small>Keep quality and finishing in view.</small>
                </p>
              </div>
              <div>
                <span>03</span>
                <p>
                  <strong>Trade partnership</strong>
                  <small>Discuss quantities and requirements directly.</small>
                </p>
              </div>
            </div>
            <Link className="button button-copper" href="/manufacturing">
              Explore manufacturing <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="quality-strip section-pad">
        <div className="container quality-strip-inner">
          <div>
            <p className="eyebrow">04 / QUALITY COMMITMENT</p>
            <h2>
              Good work shows<br />
              <em>in the details.</em>
            </h2>
          </div>
          <p>
            Clear specifications, attention to finish and product checks are important parts of reliable manufacturing. Ask us about the requirements for your product category.
          </p>
          <Link className="button button-dark" href="/quality">
            Our quality approach <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow light">LET'S TALK BUSINESS</p>
            <h2>
              Have a product<br />in mind?
            </h2>
            <p>
              Tell us what you need. Our team can discuss product ranges, bulk requirements and next steps.
            </p>
          </div>
          <div className="cta-action">
            <span>Direct enquiries welcome</span>
            <Link className="button button-copper" href="/contact">
              Start an enquiry <ArrowRight />
            </Link>
            <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>
              {siteConfig.phone} ↗
            </a>
          </div>
          <div className="cta-outline">S M I</div>
        </div>
      </section>
    </>
  );
}