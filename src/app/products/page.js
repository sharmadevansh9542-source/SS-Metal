import PageHero from "../../components/PageHero";
import ProductCatalogList from "../../components/ProductCatalogList";
import ReadyStockTable from "../../components/ReadyStockTable";
import products from "../../data/products";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product catalogue"
        title="Our Products"
        description="Explore stainless steel categories for raw materials, in-house manufacturing, and cut-to-size trade enquiries."
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
