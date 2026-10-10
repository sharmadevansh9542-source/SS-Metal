'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { readyStockItems } from '../data/readyStock';
import siteConfig from '../data/siteConfig';

export default function ReadyStockTable({ showHeader = true, compact = false }) {
  const [search, setSearch] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('ALL');

  const grades = ['ALL', '304', 'J4', '316', '430', 'JSLU'];

  const filteredItems = useMemo(() => {
    return readyStockItems.filter(item => {
      const matchSearch =
        item.item.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.grade.toLowerCase().includes(search.toLowerCase()) ||
        item.size.toLowerCase().includes(search.toLowerCase());

      const matchGrade = selectedGrade === 'ALL' || item.grade === selectedGrade;

      return matchSearch && matchGrade;
    });
  }, [search, selectedGrade]);

  return (
    <div className="ready-stock-container">
      {showHeader && (
        <div className="ready-stock-header-block">
          <h2 className="ready-stock-main-heading">Raw material</h2>
          <p className="ready-stock-main-description">
            Stainless steel circles, sheets, patta, patti and coil in JSLU, J4, 304, 316, 410 and 430 grades.
          </p>
        </div>
      )}

      {/* Filter and search toolbar */}
      <div className="ready-stock-toolbar">
        <div className="ready-stock-grade-chips">
          <span className="chips-label">Filter Grade:</span>
          {grades.map(grade => (
            <button
              key={grade}
              type="button"
              className={`grade-chip ${selectedGrade === grade ? 'is-active' : ''}`}
              onClick={() => setSelectedGrade(grade)}
            >
              {grade}
            </button>
          ))}
        </div>

        <div className="ready-stock-search-wrap">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
          </svg>
          <input
            type="text"
            placeholder="Search item, size, grade..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="ready-stock-search-input"
          />
          {search && (
            <button
              type="button"
              className="clear-search-btn"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Table Card */}
      <div className="ready-stock-card">
        <div className="ready-stock-table-responsive">
          <table className="ready-stock-table">
            <thead>
              <tr>
                <th className="th-item">Item</th>
                <th className="th-grade">Grade</th>
                <th className="th-size">Size</th>
                <th className="th-quantity">Quantity</th>
                <th className="th-status">Status</th>
                <th className="th-action"></th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="ready-stock-empty">
                    No items found matching your filter.
                  </td>
                </tr>
              ) : (
                filteredItems.map(row => {
                  const whatsappMsg = encodeURIComponent(
                    `Hello SS Metal Industries, I want to order Ready Stock:\nItem: ${row.item} (${row.category})\nGrade: ${row.grade}\nSize: ${row.size}\nQuantity: ${row.quantity}`
                  );
                  const orderHref = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMsg}`;

                  return (
                    <tr key={row.id} className="ready-stock-row">
                      <td className="td-item">
                        <span className="item-title">{row.item}</span>
                        <span className="item-subtitle">{row.category}</span>
                      </td>
                      <td className="td-grade">
                        <span className="grade-text">{row.grade}</span>
                      </td>
                      <td className="td-size">
                        <span className="size-text">{row.size}</span>
                      </td>
                      <td className="td-quantity">
                        <span className="quantity-text">{row.quantity}</span>
                      </td>
                      <td className="td-status">
                        <span className={`stock-badge ${row.statusCode}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="td-action">
                        <a
                          href={orderHref}
                          target="_blank"
                          rel="noreferrer"
                          className="order-btn-link"
                          title={`Order ${row.item} (${row.grade})`}
                        >
                          Order
                        </a>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer info */}
        <div className="ready-stock-table-footer">
          <span className="footer-note">
            ⚡ <strong>Real-time Stock:</strong> For custom cut pieces, coil slitting or non-standard dimensions, please contact our dispatch team directly.
          </span>
          <Link href="/contact" className="btn btn-outline-dark btn-sm">
            Custom Quotation ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
