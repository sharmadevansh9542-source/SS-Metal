import Link from "next/link";
import { notFound } from "next/navigation";
import products from "../../../data/products";
import PageHero from "../../../components/PageHero";
import ProductCard from "../../../components/ProductCard";
import { ArrowRight } from "../../../components/Icons";
export function generateStaticParams() { return products.map(p => ({ slug: p.slug })); }
export async function generateMetadata({ params }) {
  const product = products.find(p => p.slug === params.slug);
  return { title: product ? product.title : "Product" };
}
export default function ProductDetailPage({ params }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) notFound();
  const related = products.filter(p => p.slug !== product.slug).slice(0, 3);
  return <><PageHero eyebrow={product.eyebrow} title={product.title} description={product.short} compact/>
    <section className="section-pad"><div className="container product-detail-grid"><div className="product-detail-visual"><img src={product.image} alt={`${product.title} illustration`}/><span>PRODUCT CATEGORY</span></div><div className="product-detail-copy"><p className="eyebrow">Category overview</p><h2>Made for the needs of <em>your market.</em></h2><p>{product.description}</p><h3>Items to enquire about</h3><ul className="item-list">{product.items.map(item => <li key={item}><span>+</span>{item}</li>)}</ul><p className="small-note">Availability, dimensions, material grade, finish and order quantity must be confirmed directly for each item.</p><Link className="button button-primary" href={`/contact?product=${encodeURIComponent(product.title)}`}>Enquire about this range <ArrowRight/></Link></div></div></section>
    <section className="section-pad section-soft"><div className="container"><div className="section-heading"><div><p className="eyebrow">You may also explore</p><h2>Related <em>categories.</em></h2></div><Link className="text-link" href="/products">All products <ArrowRight/></Link></div><div className="product-grid related-grid">{related.map((p,i)=><ProductCard key={p.slug} product={p} index={i}/>)}</div></div></section>
  </>;
}
