'use client';
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import siteConfig from "../data/siteConfig";
import { MenuIcon } from "./Icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  // Close menus on route navigation
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  return (
    <header className="site-header">
      <div className="topline">
        <div className="container topline-inner">
          <span>Manufacturer of stainless steelware & unfinished products</span>
          <div className="topline-contact">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <span>•</span>
            <a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>{siteConfig.phone}</a>
          </div>
        </div>
      </div>
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label={`${siteConfig.brand} home`} onClick={closeAll}>
          <span className="brand-mark"><span>SM</span></span>
          <span className="brand-copy"><strong>SS Metal</strong><small>INDUSTRIES</small></span>
        </Link>
        <button
          className="mobile-menu-button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MenuIcon open={menuOpen}/>
        </button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {siteConfig.navigation.map(item => {
            if (item.groups || item.children) {
              const groups = item.groups || [{ heading: "Categories", items: item.children }];
              const isProductsActive = pathname.startsWith("/products");

              return (
                <div className="nav-dropdown" key={item.label} ref={dropdownRef}>
                  <button
                    type="button"
                    className={`nav-link dropdown-toggle ${isProductsActive ? "is-active-parent" : ""}`}
                    onClick={() => setProductsOpen(!productsOpen)}
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <span className={`chevron ${productsOpen ? "rotate" : ""}`}>⌄</span>
                  </button>

                  <div className={`dropdown-menu ${productsOpen ? "show" : ""}`}>
                    {/* Column 1: Finished Products & Raw Material */}
                    <div className="dropdown-col">
                      {groups.slice(0, 2).map(group => (
                        <div className="dropdown-group" key={group.heading}>
                          <span className="dropdown-group-label">{group.heading}</span>
                          <div className="dropdown-items">
                            {group.items.map(subItem => {
                              const isActive = pathname === subItem.href;
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className={`dropdown-item ${isActive ? "is-active" : ""}`}
                                  onClick={closeAll}
                                >
                                  {subItem.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Column 2: In-house Manufacturing & Trade & Cutting */}
                    <div className="dropdown-col">
                      {groups.slice(2).map(group => (
                        <div className="dropdown-group" key={group.heading}>
                          <span className="dropdown-group-label">{group.heading}</span>
                          <div className="dropdown-items">
                            {group.items.map(subItem => {
                              const isActive = pathname === subItem.href;
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className={`dropdown-item ${isActive ? "is-active" : ""}`}
                                  onClick={closeAll}
                                >
                                  {subItem.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;
            return (
              <Link
                className={`nav-link ${isActive ? "is-active" : ""}`}
                key={item.href}
                href={item.href}
                onClick={closeAll}
              >
                {item.label}
              </Link>
            );
          })}
          <Link className="nav-enquiry" href="/contact" onClick={closeAll}>
            Send Enquiry <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
