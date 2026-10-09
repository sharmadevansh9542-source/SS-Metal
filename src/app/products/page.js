import PageHero from "../../components/PageHero";
import ProductCatalogList from "../../components/ProductCatalogList";
import products from "../../data/products";

export const metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Product catalogue"
        title="Our Products"
        description="Explore stainless steelware categories for kitchen, hospitality, utility and bulk manufacturing enquiries."
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
    </>
  );
}
