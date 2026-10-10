'use client';
import Link from 'next/link';
import { popularKalvatProducts } from '../data/kalvatProducts';
import KalvatProductVisual from './KalvatProductVisual';
import siteConfig from '../data/siteConfig';

export default function PopularKalvatSection() {
  return (
    <section className="popular-kalvat-section">
      <div className="container">
        <div className="popular-kalvat-header">
          <h2 className="popular-kalvat-title">Our popular unfinished Kalvat products</h2>
          <p className="popular-kalvat-subtitle">
            Raw craftsmanship from 26 years of manufacturing, ready for polishing, plating or branding.
          </p>
        </div>

        <div className="popular-kalvat-grid">
          {popularKalvatProducts.map((product) => {
            const waMsg = encodeURIComponent(
              `Hello SS Metal Industries, I want to inquire about Unfinished Kalvat Product: ${product.title} (${product.category}).\nSizes available: ${product.sizes}`
            );
            const waHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${waMsg}`;

            return (
              <div key={product.id} className="popular-kalvat-card">
                <div className="popular-kalvat-card-visual">
                  <KalvatProductVisual shape={product.shape} title={product.title} />
                </div>
                <div className="popular-kalvat-card-body">
                  <span className="popular-kalvat-cat">{product.category}</span>
                  <h3 className="popular-kalvat-name">{product.title}</h3>
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="popular-kalvat-wa-link"
                    title={`Inquire about ${product.title} on WhatsApp`}
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="popular-kalvat-footer">
          <Link href="/products/ss-utensils" className="btn-view-catalogue">
            View all products in catalogue
          </Link>
        </div>
      </div>
    </section>
  );
}
