'use client';
import { useState } from "react";
import ProductCard from "./ProductCard";

const GROUPS = [
  "All",
  "Finished Products",
  "Raw Material",
  "In-house Manufacturing",
  "Trade & Cutting"
];

export default function ProductCatalogList({ products = [] }) {
  const [selectedGroup, setSelectedGroup] = useState("All");

  const filteredProducts = selectedGroup === "All"
    ? products
    : products.filter(p => p.group === selectedGroup);

  const getCount = (group) => {
    if (group === "All") return products.length;
    return products.filter(p => p.group === group).length;
  };

  return (
    <div className="product-catalog-wrap">
      <div className="catalog-filters" role="tablist" aria-label="Product categories filter">
        {GROUPS.map(group => {
          const isActive = selectedGroup === group;
          const count = getCount(group);
          return (
            <button
              key={group}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`catalog-filter-btn ${isActive ? "is-active" : ""}`}
              onClick={() => setSelectedGroup(group)}
            >
              <span>{group}</span>
              <span className="filter-count">({count})</span>
            </button>
          );
        })}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="no-products-msg">No products found in this category.</p>
      )}
    </div>
  );
}
