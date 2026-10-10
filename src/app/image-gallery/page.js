import Link from "next/link";
import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Image Gallery - SS Metal Industries",
  description: "SS Metal Industries manufacturing facility, quality laboratory, and product lines in Moradabad."
};

export default function ImageGalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="PLANT & PRODUCTS"
        title="Manufacturing & Facility Gallery"
        description="Photos of SS Metal Industries Moradabad plant, quality testing laboratory, and precision stainless steel lines."
        compact
      />
      <section className="section-pad">
        <div className="container" style={{ textAlign: "center", padding: "40px 0" }}>
          <p style={{ fontSize: "16px", color: "#64748b", marginBottom: "24px" }}>
            Explore our company facilities, live ready inventory, and industrial manufacturing lines.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/about" className="btn btn-primary">
              Company Profile &amp; Facilities →
            </Link>
            <Link href="/ready-stock" className="btn btn-warning">
              View Ready Stock →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
