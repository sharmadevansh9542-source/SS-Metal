import PageHero from "../../components/PageHero";
import ProductCatalogList from "../../components/ProductCatalogList";
import ReadyStockTable from "../../components/ReadyStockTable";
import products from "../../data/products";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCT CATALOGUE • MORADABAD"
        title="Our Products"
        highlight="Engineered For Industry."
        description="Explore stainless steel categories across Raw Materials, In-House Manufacturing, and Trade & Cutting—available in customized grades, gauges, and dimensions."
        image="/images/ss-coil.jpg"
        primaryAction={{
          label: "View Ready Stock ⚡",
          href: "/ready-stock"
        }}
        secondaryAction={{
          label: "Request Custom Quote",
          href: "/contact"
        }}
        note="Custom sizing, slitting & cutting available on request • Bypass Road Plant"
      />
      <section className="section-pad">
        <div className="container">
          <div className="catalog-intro">
            <div>
              <p className="eyebrow">Find your category</p>
              <h2>Precision forms for <em>industry & trade.</em></h2>
            </div>
            <p>
              Each product family has different forms, finishes and specification needs. Filter by category or select an item to learn more and enquire directly.
            </p>
          </div>
          <ProductCatalogList products={products} />
        </div>
      </section>

      {/* Ready Stock Live Section */}
      <section className="ready-stock-section" style={{ background: "#f8fafc", padding: "70px 0", borderTop: "1px solid #e2e8f0" }}>
        <div className="container">
          <ReadyStockTable showHeader={true} />
        </div>
      </section>
    </>
  );
}
