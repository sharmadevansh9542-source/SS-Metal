import PageHero from "../../components/PageHero";
import EnquiryForm from "../../components/EnquiryForm";
import siteConfig from "../../data/siteConfig";
import { PhoneIcon } from "../../components/Icons";

export const metadata = {
  title: "Contact SS Metal Industries | Moradabad Plant & Office",
  description: "Get in touch with SS Metal Industries for stainless steel coils, sheets, circles, kalvat utensils, and wholesale trade pricing."
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH • MORADABAD PLANT"
        title="Contact & Enquiries"
        highlight="Let's Talk Metal."
        description="Connect with our sales and manufacturing team for factory rates, ready stock availability, custom blanking dimensions, and wholesale orders."
        image="/images/company-headquarters.jpg"
        primaryAction={{
          label: "WhatsApp Quick Chat",
          href: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello SS Metal Industries, I have an enquiry.")}`
        }}
        secondaryAction={{
          label: "View Ready Stock ⚡",
          href: "/ready-stock"
        }}
        note={`Plant & Office: ${siteConfig.address}`}
      />

      <section className="section-pad">
        <div className="container contact-grid">
          <div className="contact-info" data-aos="fade-up">
            <p className="eyebrow">Contact Details</p>
            <h2>Good projects start with a <em>direct conversation.</em></h2>
            <p>
              Share your required grade, dimensions, gauge, and approximate quantity for immediate pricing and delivery schedules.
            </p>

            <div className="contact-method" data-aos="fade-up" data-aos-delay="100">
              <span className="contact-icon"><PhoneIcon /></span>
              <div>
                <small>Call Our Desk</small>
                <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>{siteConfig.phone}</a>
                <a href={`tel:${siteConfig.secondaryPhone.replaceAll(" ", "")}`}>{siteConfig.secondaryPhone}</a>
              </div>
            </div>

            <div className="contact-method" data-aos="fade-up" data-aos-delay="150">
              <span className="contact-icon">✉</span>
              <div>
                <small>Email Inquiries</small>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </div>

            <div className="contact-method" data-aos="fade-up" data-aos-delay="200">
              <span className="contact-icon">⌖</span>
              <div>
                <small>Manufacturing Unit &amp; Office</small>
                <p>{siteConfig.address}</p>
              </div>
            </div>

            <a
              className="map-link"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              Open plant location in Google Maps ↗
            </a>

            <div className="contact-note" data-aos="fade-up" data-aos-delay="250">
              <strong>Quick Quotation Tip</strong>
              <p>
                Mentioning grade (e.g., 304, 430, JSLU), circle diameter or coil width, and gauge in mm speeds up the estimation process.
              </p>
            </div>
          </div>

          <div className="contact-form-panel" data-aos="fade-up" data-aos-delay="150">
            <div className="form-heading">
              <span>01</span>
              <div>
                <h2>Send an Enquiry</h2>
                <p>Fields marked * are required. We usually respond within 2-4 hours.</p>
              </div>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </section>
    </>
  );
}
