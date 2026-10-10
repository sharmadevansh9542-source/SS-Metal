import Link from "next/link";
import { ArrowRight } from "./Icons";

export default function ProductCard({ product, index = 0 }) {
  const formattedIndex = String(index + 1).padStart(2, '0');
  return (
    <article
      className="product-card"
      data-aos="fade-up"
      data-aos-delay={(index % 4) * 80}
    >
      <Link className="product-visual" href={`/products/${product.slug}`} aria-label={`View ${product.title}`}>
        <span className="product-number">{formattedIndex}</span>
        <img src={product.image} alt={`${product.title} illustration`} />
        <span className="visual-arrow"><ArrowRight /></span>
      </Link>
      <div className="product-card-copy">
        <p className="eyebrow">{product.eyebrow}</p>
        <h3><Link href={`/products/${product.slug}`}>{product.title}</Link></h3>
        <p>{product.short}</p>
        <Link className="text-link" href={`/products/${product.slug}`}>Explore range <ArrowRight /></Link>
      </div>
    </article>
  );
}
