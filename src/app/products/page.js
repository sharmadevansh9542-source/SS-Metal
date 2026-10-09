import PageHero from "../../components/PageHero";
import ProductCard from "../../components/ProductCard";
import products from "../../data/products";
export const metadata = { title: "Products" };
export default function ProductsPage() {
  return <><PageHero eyebrow="Product catalogue" title="Our Products" description="Explore stainless steelware categories for kitchen, hospitality, utility and bulk manufacturing enquiries."/><section className="section-pad"><div className="container"><div className="catalog-intro"><p className="eyebrow">Find your category</p><p>Each product family has different forms, finishes and specification needs. Select a category to learn more or contact us with your specific requirement.</p></div><div className="product-grid">{products.map((product, i) => <ProductCard key={product.slug} product={product} index={i}/>)}</div></div></section></>;
}
