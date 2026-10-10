import Link from "next/link";
import { notFound } from "next/navigation";
import products, { productMenu } from "../../../data/products";
import siteConfig from "../../../data/siteConfig";
import PageHero from "../../../components/PageHero";
import ProductCard from "../../../components/ProductCard";
import KalvatCatalogueList from "../../../components/KalvatCatalogueList";
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
  if (product && product.slug === "ss-utensils") {
    return {
      title: "SS Utensils - Unfinished Kalvat Products Catalogue | SS Metal Industries",
      description: "Unfinished Kalvat utensils, tapers, mugs, jugs, pots, cutlery holders, ice buckets, barware and bathware manufactured in Moradabad."
    };
  }
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
          eyebrow="PRODUCT RANGE • MORADABAD"
          title={group.title}
          highlight="Precision Industrial Supply."
          description={group.description || "Precision stainless steel solutions crafted for trade and industrial manufacturing."}
          parent={{ label: "Products", href: "/products" }}
          primaryAction={{
            label: "Check Ready Stock ⚡",
            href: "/ready-stock"
          }}
          secondaryAction={{
            label: "Request Custom Quote",
            href: `/contact?group=${encodeURIComponent(group.title)}`
          }}
          note="Direct factory pricing & immediate dispatch from Moradabad"
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

  // Special case: SS Utensils renders the full Unfinished Kalvat Products Catalogue
  if (product.slug === "ss-utensils") {
    return (
      <>
        <PageHero
          eyebrow="IN-HOUSE MANUFACTURING • MORADABAD"
          title="Unfinished Kalvat Products"
          highlight="Utensil Blanks & Deep Drawn Forms."
          description="Direct factory supply of unfinished stainless steel tapers, mugs, jugs, pots, cutlery holders, ice buckets, barware, and bathroom containers manufactured in Moradabad."
          image={product.image}
          parent={[
            { label: "Products", href: "/products" },
            { label: "In-house Manufacturing", href: "/products/in-house-manufacturing" }
          ]}
          primaryAction={{
            label: "WhatsApp Factory Enquiries",
            href: `https://wa.me/${siteConfig.whatsappNumber}?text=Hello%2C%20I%20am%20interested%20in%20Unfinished%20Kalvat%20products`
          }}
          secondaryAction={{
            label: "Request Custom Mould / Farma",
            href: "/contact"
          }}
          note="Over 24+ standard tooling dies ready for bulk stamping & production"
        />

        {/* Unfinished Kalvat Products Catalogue Section (Matches Screenshot 1) */}
        <section className="kalvat-catalogue-page-wrapper section-pad">
          <div className="container">
            <KalvatCatalogueList showHeader={true} />
          </div>
        </section>

        {/* Manufacturing Highlights & Technical Overview */}
        <section className="section-pad section-soft">
          <div className="container product-detail-grid">
            <div className="product-detail-visual">
              <img src={product.image} alt="In-house Unfinished Utensils Manufacturing" />
              <span>IN-HOUSE MANUFACTURING</span>
            </div>
            <div className="product-detail-copy">
              <p className="eyebrow">Moradabad Manufacturing Unit</p>
              <h2>Precision Pressing &amp; <em>Deep Drawn Kalvat.</em></h2>
              <p>{product.description}</p>
              <h3>Capabilities &amp; Bulk Enquiries</h3>
              <ul className="item-list">
                {product.items.map(item => (
                  <li key={item}>
                    <span>+</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="small-note">
                Manufactured from premium JSLU, J4, 304, 316, 410, and 430 grade stainless steel coils. Custom dies, weights, and gauges available on request for export and domestic utensil manufacturers.
              </p>
              <Link
                className="button button-copper"
                href={`/contact?product=${encodeURIComponent(product.title)}`}
              >
                Discuss Custom Kalvat Production <ArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Related In-House Manufacturing Categories */}
        <section className="section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">In-House Manufacturing</p>
                <h2>Other <em>manufacturing categories.</em></h2>
              </div>
              <Link className="text-link" href="/products/in-house-manufacturing">
                View all in-house <ArrowRight />
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

  return (
    <>
      <PageHero
        eyebrow={`${product.group.toUpperCase()} • PRECISION SUPPLY`}
        title={product.title}
        highlight="Engineered For Industry."
        description={product.short}
        image={product.image}
        parent={[
          { label: "Products", href: "/products" },
          { label: parentGroup.title, href: parentGroup.href }
        ]}
        primaryAction={{
          label: "Inquire This Product",
          href: `/contact?product=${encodeURIComponent(product.title)}`
        }}
        secondaryAction={{
          label: "Check Ready Stock ⚡",
          href: "/ready-stock"
        }}
        note="Certified metallurgical standard & custom sizing available"
      />
      <section className="section-pad">
        <div className="container product-detail-grid">
          <div className="product-detail-visual">
            <div className="product-visual-frame">
              <img src={product.image} alt={`${product.title} - SS Metal Industries Moradabad`} />
              <div className="product-visual-tag">
                <span>{product.group}</span>
              </div>
            </div>
            <div className="product-visual-footer-bar">
              <span className="pv-dot"></span> 100% In-house Inspection &amp; Mill Test Certified
            </div>
          </div>
          <div className="product-detail-copy">
            <p className="eyebrow">{product.group} &bull; PRECISION SPECIFICATION</p>
            <h2>High-Performance <em>{product.title}.</em></h2>
            <p className="product-lead-desc">{product.description}</p>

            <div className="product-quick-specs-grid">
              <div className="p-spec-item">
                <span className="p-spec-k">Available Grades:</span>
                <span className="p-spec-v">JSLU, J4, 304, 316, 410, 430</span>
              </div>
              <div className="p-spec-item">
                <span className="p-spec-k">Supply Formats:</span>
                <span className="p-spec-v">Standard &amp; Custom Sized Lots</span>
              </div>
              <div className="p-spec-item">
                <span className="p-spec-k">Dispatch Hub:</span>
                <span className="p-spec-v">Bypass Road, Manoharpur, Moradabad</span>
              </div>
            </div>

            <h3>Key Forms &amp; Supply Variations</h3>
            <ul className="item-list">
              {product.items.map(item => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="product-cta-action-row">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  `Hello SS Metal Industries, I want to inquire about: ${product.title} (${product.group}). Please share availability, rates and MOQ.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-whatsapp"
              >
                Inquire on WhatsApp
              </a>
              <Link
                className="button button-copper"
                href={`/contact?product=${encodeURIComponent(product.title)}`}
              >
                Send Formal RFQ <ArrowRight />
              </Link>
              <Link
                className="btn btn-outline"
                href="/ready-stock"
              >
                ⚡ Live Ready Stock
              </Link>
            </div>

            <p className="small-note">
              Custom thicknesses, gauges, slit widths, and circle diameters manufactured to precise technical drawings. Material Test Certificate (MTC) provided upon dispatch.
            </p>
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
