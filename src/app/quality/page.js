import Link from "next/link";
import PageHero from "../../components/PageHero";
import { ArrowRight } from "../../components/Icons";

export const metadata = {
  title: "Quality Assurance & Standards | SS Metal Industries",
  description: "Strict metallurgical inspection, dimensional tolerances, and material traceability at SS Metal Industries Moradabad."
};

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="METALLURGICAL ASSURANCE • MORADABAD"
        title="Quality in Every Detail"
        highlight="Tested For Performance."
        description="Every batch of stainless steel coil, sheet, blank, and deep-drawn product undergoes rigorous physical and dimensional testing before dispatch."
        image="/images/company-quality-lab.jpg"
        primaryAction={{
          label: "Inquire Quality Specifications",
          href: "/contact"
        }}
        secondaryAction={{
          label: "View Ready Stock Inventory",
          href: "/ready-stock"
        }}
        note="Thickness tolerance verification • Composition & draw-ability testing"
      />

      <section className="section-pad">
        <div className="container split-content">
          <div data-aos="fade-up">
            <p className="eyebrow">Our Standard</p>
            <h2>Consistency starts with <em>meticulous clarity.</em></h2>
            <img
              className="inline-feature-image"
              src="/images/company-quality-lab.jpg"
              alt="Metallurgical testing and quality control lab"
            />
          </div>
          <div className="rich-copy" data-aos="fade-up" data-aos-delay="150">
            <p className="body-large">
              Quality is engineered into every stage of production—from the raw coil uncoiling to final blanking, trimming, and packaging.
            </p>
            <p>
              We ensure our clients receive exactly what is ordered: calibrated thickness across the sheet width, uniform grain structure for deep-drawing without cracking, and pure surface cleanliness.
            </p>
            <div className="process-steps">
              <div data-aos="fade-up" data-aos-delay="100">
                <span>01</span>
                <div>
                  <h3>Grade Verification</h3>
                  <p>Accurate metallurgical checks ensuring JSLU, J4, 304, 316, 410, and 430 grade composition.</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="150">
                <span>02</span>
                <div>
                  <h3>Micrometer Gauge Calibration</h3>
                  <p>Micrometer checks across the coil body to ensure zero variation in thickness tolerances.</p>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <span>03</span>
                <div>
                  <h3>Drawing &amp; Forming Test</h3>
                  <p>Sample hydraulic pressing runs to guarantee zero tearing, orange peel, or stress fractures.</p>
                </div>
              </div>
            </div>
            <Link className="text-link" href="/contact">
              Request material test report details <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad section-soft">
        <div className="container quality-cards">
          <article data-aos="fade-up" data-aos-delay="100">
            <span>01</span>
            <h3>Specification Clarity</h3>
            <p>Confirm dimensions, material grade, gauge tolerance, and intended draw depth prior to production.</p>
          </article>
          <article data-aos="fade-up" data-aos-delay="200">
            <span>02</span>
            <h3>Surface Integrity</h3>
            <p>Define surface finish (2B, No. 4, BA, Mirror) and protect with standard laser/PVC film coating.</p>
          </article>
          <article data-aos="fade-up" data-aos-delay="300">
            <span>03</span>
            <h3>Lot Traceability</h3>
            <p>Full batch labeling and weight verification for transparent logistics and invoicing.</p>
          </article>
          <article data-aos="fade-up" data-aos-delay="400">
            <span>04</span>
            <h3>Safe Industrial Packaging</h3>
            <p>Moisture-resistant strapping and palletizing to prevent transport abrasion and edge damage.</p>
          </article>
        </div>
      </section>

      <section className="simple-cta">
        <div className="container simple-cta-inner" data-aos="fade-up">
          <div>
            <p className="eyebrow light">HAVE SPECIFIC STANDARDS?</p>
            <h2>Share your technical quality requirements.</h2>
          </div>
          <Link className="button button-copper" href="/contact">
            Contact our QA team <ArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
