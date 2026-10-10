'use client';
import { useState } from "react";
import ProductCard from "./ProductCard";
import { productMenu } from "../data/products";

export default function ProductCatalogList({ products = [] }) {
  const [selectedGroupSlug, setSelectedGroupSlug] = useState("all-products");

  const filterTabs = productMenu.map(group => ({
    label: group.title === "All Products" ? "All" : group.title,
    slug: group.slug,
    title: group.title,
    isAll: !group.items || group.items.length === 0
  }));

  const activeTab = filterTabs.find(tab => tab.slug === selectedGroupSlug) || filterTabs[0];

  const filteredProducts = activeTab.isAll
    ? products
    : products.filter(p => p.group === activeTab.title);

  const getCount = (tab) => {
    if (tab.isAll) return products.length;
    return products.filter(p => p.group === tab.title).length;
  };

  return (
    <div className="product-catalog-wrap">
      <div className="catalog-filters" role="tablist" aria-label="Product categories filter" data-aos="fade-up">
        {filterTabs.map(tab => {
          const isActive = selectedGroupSlug === tab.slug;
          const count = getCount(tab);
          return (
            <button
              key={tab.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`catalog-filter-btn ${isActive ? "is-active" : ""}`}
              onClick={() => setSelectedGroupSlug(tab.slug)}
            >
              <span>{tab.label}</span>
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
