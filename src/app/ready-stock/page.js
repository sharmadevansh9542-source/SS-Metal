import ReadyStockTable from "../../components/ReadyStockTable";
import PageHero from "../../components/PageHero";
import siteConfig from "../../data/siteConfig";

export const metadata = {
  title: "Ready Stock Raw Material Inventory | SS Metal Industries",
  description: "Stainless steel circles, sheets, patta, patti and coil in JSLU, J4, 304, 316, 410 and 430 grades available for immediate dispatch from Moradabad."
};

export default function ReadyStockPage() {
  return (
    <>
      <PageHero
        eyebrow="LIVE INVENTORY &amp; IMMEDIATE DISPATCH"
        title="Live Ready Stock Inventory"
        highlight="Raw Material Lots"
        description="Active stock of Stainless Steel Circles, Sheets, Patta, Patti and Coils in JSLU, J4, 304, 316, 410, and 430 grades ready for instant loading and dispatch from Moradabad."
        image="/images/company-headquarters.jpg"
        primaryAction={{
          label: "WhatsApp Order Now",
          href: `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent("Hello SS Metal Industries, I want to order Ready Stock.")}`
        }}
        secondaryAction={{
          label: "Request Custom Quote",
          href: "/contact"
        }}
        note="Real-time Stock Updated Daily • Bypass Road Dispatch Hub"
      />

      <section className="ready-stock-page-wrapper section-pad">
        <div className="container">
          <ReadyStockTable showHeader={true} />
        </div>
      </section>
    </>
  );
}
