import Link from "next/link";
import PageHero from "../../components/PageHero";
import siteConfig from "../../data/siteConfig";
import { ArrowRight } from "../../components/Icons";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The company"
        title="About SS Metal Industries"
        description="A manufacturing-led business associated with stainless steelware and unfinished metal products."
      />
      <section className="section-pad">
        <div className="container split-content">
          <div>
            <p className="eyebrow">Our story</p>
            <h2>Experience shaped by <em>the material.</em></h2>
          </div>
          <div className="rich-copy">
            <p className="body-large">
              SS Metal Industries is a leading stainless steel manufacturer and stockiest supplying raw material coils, sheets, in-house circles, blanks, utensils, and trade cutting products.
            </p>
            <p>
              The business profile references a history dating to {siteConfig.founded} and a base in Manoharpur, Moradabad, Uttar Pradesh. This demo site presents those broad themes in a configurable format; detailed company claims and product specifications should be confirmed directly before publishing.
            </p>
            <p>
              Our approach is built around understanding the product, keeping finish and utility in view, and communicating clearly with customers about their requirements.
            </p>
            <Link className="text-link" href="/products">
              Explore our product range <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-pad section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">What guides us</p>
              <h2>Practical values.<br /><em>Lasting relationships.</em></h2>
            </div>
            <p className="heading-description">
              A good manufacturing relationship depends on clarity, repeatable processes and open communication.
            </p>
          </div>
          <div className="value-grid">
            <article>
              <span>01</span>
              <h3>Product utility</h3>
              <p>Start with the real purpose of each product and the needs of its end user.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Attention to finish</h3>
              <p>Make finishing requirements part of the conversation from the beginning.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Trade partnership</h3>
              <p>Communicate openly about product details, quantities and delivery expectations.</p>
            </article>
          </div>
        </div>
      </section>
      <section className="simple-cta">
        <div className="container simple-cta-inner">
          <div>
            <p className="eyebrow light">NEXT STEP</p>
            <h2>Let's discuss your requirement.</h2>
          </div>
          <Link className="button button-copper" href="/contact">
            Contact our team <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}