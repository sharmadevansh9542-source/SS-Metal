'use client';
import { useState, useMemo } from 'react';
import { kalvatProducts, kalvatCategories } from '../data/kalvatProducts';
import KalvatProductVisual from './KalvatProductVisual';
import siteConfig from '../data/siteConfig';

export default function KalvatCatalogueList({ showHeader = true }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const filteredProducts = useMemo(() => {
    return kalvatProducts.filter((product) => {
      const matchCategory =
        selectedCategory === 'All' || product.category === selectedCategory;
      const matchSearch =
        search.trim() === '' ||
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase()) ||
        product.short.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, search]);

  return (
    <div className="kalvat-catalogue-container">
      {showHeader && (
        <div className="kalvat-catalogue-header">
          <h1 className="kalvat-catalogue-main-title">Products catalogue</h1>
          <p className="kalvat-catalogue-main-desc">
            Unfinished Kalvat utensils, barware, bathware and kitchenware. Ask for custom sizes and weights.
          </p>
        </div>
      )}

      {/* Toolbar: Category pills & Search */}
      <div className="kalvat-catalogue-toolbar">
        <div className="kalvat-category-pills">
          {kalvatCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`kalvat-cat-btn ${selectedCategory === cat ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="kalvat-search-box">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="kalvat-search-input"
          />
          {search && (
            <button
              type="button"
              className="kalvat-search-clear"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Product count */}
      <div className="kalvat-count-row">
        <span>{filteredProducts.length} products</span>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="kalvat-empty-state">
          <p>No products found matching &ldquo;{search}&rdquo; in {selectedCategory}.</p>
          <button
            type="button"
            className="btn btn-outline-dark btn-sm"
            onClick={() => {
              setSelectedCategory('All');
              setSearch('');
            }}
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="kalvat-grid">
          {filteredProducts.map((product) => {
            const waMsg = encodeURIComponent(
              `Hello SS Metal Industries, I am interested in Unfinished Kalvat Product: ${product.title} (${product.category}).\nSizes: ${product.sizes}\nFinish: ${product.finish}\nPlease share wholesale rate and minimum order quantity.`
            );
            const waHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${waMsg}`;

            return (
              <div key={product.id} className="kalvat-card">
                <div
                  className="kalvat-card-visual"
                  onClick={() => setQuickViewProduct(product)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setQuickViewProduct(product);
                    }
                  }}
                  title={`Click for Quick View: ${product.title}`}
                >
                  <KalvatProductVisual shape={product.shape} title={product.title} />
                </div>
                <div className="kalvat-card-body">
                  <span className="kalvat-card-cat">{product.category}</span>
                  <h3 className="kalvat-card-title">{product.title}</h3>
                  <div className="kalvat-card-actions">
                    <button
                      type="button"
                      className="kalvat-action-quickview"
                      onClick={() => setQuickViewProduct(product)}
                    >
                      Quick view
                    </button>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noreferrer"
                      className="kalvat-action-whatsapp"
                      title={`WhatsApp enquiry for ${product.title}`}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="kalvat-modal-overlay" onClick={() => setQuickViewProduct(null)}>
          <div className="kalvat-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="kalvat-modal-close"
              onClick={() => setQuickViewProduct(null)}
              aria-label="Close dialog"
            >
              ×
            </button>

            <div className="kalvat-modal-grid">
              <div className="kalvat-modal-visual">
                <KalvatProductVisual shape={quickViewProduct.shape} title={quickViewProduct.title} />
              </div>

              <div className="kalvat-modal-info">
                <span className="kalvat-modal-cat">{quickViewProduct.category}</span>
                <h2 className="kalvat-modal-title">{quickViewProduct.title}</h2>
                <p className="kalvat-modal-desc">{quickViewProduct.short}</p>

                <div className="kalvat-specs-table">
                  <div className="spec-row">
                    <span className="spec-label">Available Sizes:</span>
                    <span className="spec-val">{quickViewProduct.sizes}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Thickness:</span>
                    <span className="spec-val">{quickViewProduct.thickness}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Surface Finish:</span>
                    <span className="spec-val">{quickViewProduct.finish}</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Grades:</span>
                    <span className="spec-val">JSLU, J4, 304, 316, 410, 430</span>
                  </div>
                  <div className="spec-row">
                    <span className="spec-label">Origin:</span>
                    <span className="spec-val">In-house Manufactured, Moradabad</span>
                  </div>
                </div>

                <div className="kalvat-modal-actions">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                      `Hello SS Metal Industries, I want to inquire about Unfinished Kalvat Product: ${quickViewProduct.title} (${quickViewProduct.category}).\nSizes: ${quickViewProduct.sizes}\nThickness: ${quickViewProduct.thickness}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-whatsapp"
                  >
                    Inquire on WhatsApp
                  </a>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setQuickViewProduct(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
