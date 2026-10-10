import Link from "next/link";
import PageHero from "../../components/PageHero";
import { ArrowRight } from "../../components/Icons";

export const metadata = {
  title: "Manufacturing Infrastructure & Process | SS Metal Industries Moradabad",
  description: "Advanced hydraulic pressing, deep drawing, and circle blanking infrastructure at SS Metal Industries Moradabad plant."
};

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        eyebrow="IN-HOUSE CAPABILITIES & INFRASTRUCTURE"
        title="Manufacturing Process"
        highlight="Precision Pressing & Deep Drawing."
        description="A process-led approach to stainless steel circle blanking, kalvat utensils, custom dies, and precision cut-to-size industrial metal supplies."
        image="/images/ss-manufacturing-plant.jpg"
        primaryAction={{
          label: "Discuss Manufacturing Brief",
          href: "/contact"
        }}
        secondaryAction={{
          label: "View Kalvat Utensils",
          href: "/products/ss-utensils"
        }}
        note="Hydraulic pressing up to 500 tons • In-house tooling & die development"
      />

      <section className="section-pad">
        <div className="container split-content">
          <div>
            <p className="eyebrow">The Process</p>
            <h2>From Product Brief To <em>Manufacturing Delivery.</em></h2>
            <img
              className="inline-feature-image"
              src="/images/company-quality-lab.jpg"
              alt="SS Metal Industries Quality Assurance & Manufacturing Plant"
            />
          </div>
          <div className="rich-copy">
            <p className="body-large">
              Every manufacturing enquiry starts with understanding the intended application, gauge, draw ratio, and surface requirements.
            </p>
            <p>
              For in-house manufacturing and raw material blanking, we match the optimal stainless steel coil grade (JSLU, J4, 304, 316, 410, 430) with appropriate hydraulic tonnage to prevent wrinkling and ensure razor-sharp dimensional accuracy.
            </p>
            <div className="process-steps">
              <div>
                <span>01</span>
                <div>
                  <h3>Understand</h3>
                  <p>Share your product drawing, target dimensions, batch quantity, and application.</p>
                </div>
              </div>
              <div>
                <span>02</span>
                <div>
                  <h3>Specify</h3>
                  <p>Confirm material grade, thickness tolerances, blanking dies, and finish parameters.</p>
                </div>
              </div>
              <div>
                <span>03</span>
                <div>
                  <h3>Produce &amp; Dispatch</h3>
                  <p>Precision stamping, automated quality inspection, and prompt dispatch from Moradabad.</p>
                </div>
              </div>
            </div>
            <Link className="text-link" href="/contact">
              Discuss your custom requirement <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="simple-cta">
        <div className="container simple-cta-inner">
          <div>
            <p className="eyebrow light">BULK AND TRADE ENQUIRIES</p>
            <h2>Let&apos;s start with your manufacturing brief.</h2>
          </div>
          <Link className="button button-copper" href="/contact">
            Send an enquiry <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
