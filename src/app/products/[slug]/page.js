import Link from "next/link";
import { notFound } from "next/navigation";
import products, { productMenu } from "../../../data/products";
import PageHero from "../../../components/PageHero";
import ProductCard from "../../../components/ProductCard";
import { ArrowRight } from "../../../components/Icons";

export function generateStaticParams() {
  const productSlugs = products.map(p => ({ slug: p.slug }));
  const groupSlugs = productMenu
    .filter(g => g.items && g.items.length > 0)
    .map(g => ({ slug: g.slug }));
  return [...productSlugs, ...groupSlugs];
}

export async function generateMetadata({ params }) {
  const group = productMenu.find(g => g.slug === params.slug && g.items && g.items.length > 0);
  if (group) return { title: group.title };

  const product = products.find(p => p.slug === params.slug);
  return { title: product ? product.title : "Product" };
}

export default function ProductDetailPage({ params }) {
  // Check if current route is a product group overview page
  const group = productMenu.find(g => g.slug === params.slug && g.items && g.items.length > 0);
  if (group) {
    const groupProducts = products.filter(p => p.group === group.title);
    return (
      <>
        <PageHero
          eyebrow="PRODUCT RANGE"
          title={group.title}
          description={group.description || "Precision stainless steel solutions crafted for trade and industrial manufacturing."}
          parent={{ label: "Products", href: "/products" }}
          compact
        />
        <section className="section-pad">
          <div className="container">
            <div className="catalog-intro">
              <div>
                <p className="eyebrow">{group.title}</p>
                <h2>Precision forms for <em>industry & trade.</em></h2>
              </div>
              <p>
                Explore categories under {group.title}. Select an item below to see details, specifications and to enquire directly. Grade, thickness and size available on request.
              </p>
            </div>
            <div className="product-grid">
              {groupProducts.map((p, i) => (
                <ProductCard key={p.slug} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
        <section className="section-pad section-soft">
          <div className="container quality-strip-inner">
            <div>
              <p className="eyebrow">CUSTOM ENQUIRIES</p>
              <h2>Discuss your <em>{group.title}</em> requirement.</h2>
            </div>
            <p>
              Have custom specifications or bulk wholesale requirements? Grade, thickness and size available on request. Contact our manufacturing team directly.
            </p>
            <Link className="button button-copper" href={`/contact?group=${encodeURIComponent(group.title)}`}>
              Send an enquiry <ArrowRight />
            </Link>
          </div>
        </section>
      </>
    );
  }

  // Otherwise, find the product
  const product = products.find(p => p.slug === params.slug);
  if (!product) notFound();

  // Find parent group for breadcrumbs
  const parentGroup = productMenu.find(g => g.title === product.group) || {
    title: product.group,
    slug: "products",
    href: "/products"
  };

  // Pick related products preferring same category group first
  const sameGroup = products.filter(p => p.group === product.group && p.slug !== product.slug);
  const otherGroups = products.filter(p => p.group !== product.group && p.slug !== product.slug);
  const related = [...sameGroup, ...otherGroups].slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={product.group.toUpperCase()}
        title={product.title}
        description={product.short}
        parent={[
          { label: "Products", href: "/products" },
          { label: parentGroup.title, href: parentGroup.href }
        ]}
        compact
      />
      <section className="section-pad">
        <div className="container product-detail-grid">
          <div className="product-detail-visual">
            <img src={product.image} alt={`${product.title} illustration`} />
            <span>PRODUCT CATEGORY</span>
          </div>
          <div className="product-detail-copy">
            <p className="eyebrow">Category overview</p>
            <h2>Made for the needs of <em>your market.</em></h2>
            <p>{product.description}</p>
            <h3>Items to enquire about</h3>
            <ul className="item-list">
              {product.items.map(item => (
                <li key={item}>
                  <span>+</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="small-note">
              Availability, dimensions, material grade, finish and order quantity must be confirmed directly for each item. Grade, thickness and size available on request.
            </p>
            <Link
              className="button button-copper"
              href={`/contact?product=${encodeURIComponent(product.title)}`}
            >
              Enquire about this range <ArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className="section-pad section-soft">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">You may also explore</p>
              <h2>Related <em>categories.</em></h2>
            </div>
            <Link className="text-link" href="/products">
              All products <ArrowRight />
            </Link>
          </div>
          <div className="product-grid related-grid">
            {related.map((p, i) => (
              <ProductCard key={p.slug} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
