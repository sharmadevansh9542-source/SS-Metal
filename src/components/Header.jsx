'use client';
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import siteConfig from "../data/siteConfig";
import { productMenu } from "../data/products";
import { MenuIcon } from "./Icons";
import SmiLogo from "./SmiLogo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [activeGroupSlug, setActiveGroupSlug] = useState(null);
  const [mobileOpenGroup, setMobileOpenGroup] = useState(null);
  const [openLeft, setOpenLeft] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const dropdownTimerRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
    setActiveGroupSlug(null);
    setMobileOpenGroup(null);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProductsOpen(false);
        setActiveGroupSlug(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Check if flyout would overflow right edge of viewport
  const updateOverflow = useCallback(() => {
    if (dropdownRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const totalWidthNeeded = rect.left + 240 + 250;
      if (totalWidthNeeded > window.innerWidth - 16) {
        setOpenLeft(true);
      } else {
        setOpenLeft(false);
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateOverflow);
    return () => window.removeEventListener("resize", updateOverflow);
  }, [updateOverflow]);

  const closeAll = () => {
    setMenuOpen(false);
    setProductsOpen(false);
    setActiveGroupSlug(null);
    setMobileOpenGroup(null);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    updateOverflow();
    setProductsOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (dropdownTimerRef.current) clearTimeout(dropdownTimerRef.current);
    dropdownTimerRef.current = setTimeout(() => {
      setProductsOpen(false);
      setActiveGroupSlug(null);
    }, 180);
  };

  const handleGroupMouseEnter = (group) => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    updateOverflow();
    if (group.items && group.items.length > 0) {
      setActiveGroupSlug(group.slug);
    } else {
      setActiveGroupSlug(null);
    }
  };

  const handleGroupMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setActiveGroupSlug(null);
    }, 150);
  };

  const handleFlyoutMouseEnter = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
  };

  const handleFlyoutMouseLeave = () => {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = setTimeout(() => {
      setActiveGroupSlug(null);
    }, 150);
  };

  const handleTriggerKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setProductsOpen(true);
      updateOverflow();
      setTimeout(() => {
        const first = dropdownRef.current?.querySelector(".dropdown-item-interactive");
        if (first) first.focus();
      }, 50);
    } else if (e.key === "Escape") {
      setProductsOpen(false);
      setActiveGroupSlug(null);
    }
  };

  const handleLevel1KeyDown = (e, group, index) => {
    const items = dropdownRef.current?.querySelectorAll(".dropdown-item-interactive");
    if (!items || items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = items[index + 1] || items[0];
      next?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = items[index - 1] || items[items.length - 1];
      prev?.focus();
    } else if (e.key === "ArrowRight") {
      if (group.items && group.items.length > 0) {
        e.preventDefault();
        setActiveGroupSlug(group.slug);
        setTimeout(() => {
          const firstSub = dropdownRef.current?.querySelector(`.flyout-${group.slug} .flyout-item`);
          firstSub?.focus();
        }, 50);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setProductsOpen(false);
      setActiveGroupSlug(null);
      triggerRef.current?.focus();
    }
  };

  const handleFlyoutKeyDown = (e, group, subIndex) => {
    const subItems = dropdownRef.current?.querySelectorAll(`.flyout-${group.slug} .flyout-item`);
    if (!subItems || subItems.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = subItems[subIndex + 1] || subItems[0];
      next?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = subItems[subIndex - 1] || subItems[subItems.length - 1];
      prev?.focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveGroupSlug(null);
      const parentLink = dropdownRef.current?.querySelector(`.group-link-${group.slug}`);
      parentLink?.focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setProductsOpen(false);
      setActiveGroupSlug(null);
      triggerRef.current?.focus();
    }
  };

  const isProductsActive = pathname.startsWith("/products");

  return (
    <header className="site-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-contacts">
            <span className="top-item">
              <svg className="top-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"/>
              </svg>
              <a href="tel:+919412236335">+91 9412236335</a> / <a href="tel:+919458771652">9458771652</a>
            </span>
            <span className="top-item">
              <svg className="top-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:SSmetal1965@gmail.com">SSmetal1965@gmail.com</a>
            </span>
            <span className="top-item top-item-address">
              <svg className="top-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
              </svg>
              Bypass Road, Manoharpur, Moradabad, UP
            </span>
          </div>
          <div className="top-actions">
            <Link href="/ready-stock" className="badge-stock-alert">
              <span>⚡</span> Live Ready Stock Available
            </Link>
            <Link href="/contact" className="top-item top-pdf-btn">
              <svg className="top-icon" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              Download PDF
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="container header-inner">
        <Link className="brand-logo-link" href="/" aria-label="SS Metal Industries Home" onClick={closeAll}>
          <SmiLogo />
        </Link>

        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <div className="nav-links">
            {siteConfig.navigation.map(item => {
            if (item.label === "Products") {
              return (
                <div
                  className={`nav-dropdown ${productsOpen ? "is-open" : ""}`}
                  key={item.label}
                  ref={dropdownRef}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button
                    ref={triggerRef}
                    type="button"
                    className={`nav-link dropdown-toggle ${isProductsActive ? "is-active-parent" : ""}`}
                    onClick={() => {
                      updateOverflow();
                      setProductsOpen(!productsOpen);
                    }}
                    onKeyDown={handleTriggerKeyDown}
                    aria-expanded={productsOpen}
                    aria-haspopup="true"
                    aria-controls="products-level1-menu"
                    id="products-dropdown-toggle"
                  >
                    {item.label}
                    <span className={`chevron ${productsOpen ? "rotate" : ""}`}>⌄</span>
                  </button>

                  {/* DESKTOP 2-LEVEL NESTED FLYOUT MENU */}
                  <div
                    id="products-level1-menu"
                    className={`dropdown-menu desktop-dropdown-menu ${productsOpen ? "show" : ""} ${openLeft ? "flyout-left" : ""}`}
                    role="menu"
                    aria-labelledby="products-dropdown-toggle"
                  >
                    <div className="dropdown-level-1">
                      {productMenu.map((group, index) => {
                        const hasChildren = group.items && group.items.length > 0;
                        const isGroupActive = group.slug === "all-products"
                          ? pathname === "/products"
                          : pathname === group.href || group.items.some(sub => pathname === sub.href);
                        const isGroupFlyoutOpen = activeGroupSlug === group.slug;

                        return (
                          <div
                            key={group.slug}
                            className="dropdown-item-row"
                            onMouseEnter={() => handleGroupMouseEnter(group)}
                            onMouseLeave={handleGroupMouseLeave}
                          >
                            <Link
                              href={group.href}
                              className={`dropdown-group-link dropdown-item-interactive group-link-${group.slug} ${isGroupActive ? "is-active-group" : ""} ${isGroupFlyoutOpen ? "is-active-hover" : ""}`}
                              role="menuitem"
                              aria-haspopup={hasChildren ? "true" : undefined}
                              aria-expanded={hasChildren ? isGroupFlyoutOpen : undefined}
                              onClick={closeAll}
                              onFocus={() => {
                                updateOverflow();
                                if (hasChildren) setActiveGroupSlug(group.slug);
                                else setActiveGroupSlug(null);
                              }}
                              onKeyDown={(e) => handleLevel1KeyDown(e, group, index)}
                            >
                              <span>{group.title}</span>
                              {hasChildren && <span className="group-arrow">›</span>}
                            </Link>

                            {/* Flyout panel on hover/focus */}
                            {hasChildren && (
                              <div
                                className={`flyout-panel flyout-${group.slug} ${isGroupFlyoutOpen ? "is-visible" : ""} ${openLeft ? "flyout-left" : ""}`}
                                role="menu"
                                aria-label={`${group.title} sub-categories`}
                                onMouseEnter={handleFlyoutMouseEnter}
                                onMouseLeave={handleFlyoutMouseLeave}
                              >
                                <div className="flyout-header">
                                  <Link href={group.href} onClick={closeAll}>
                                    <span>{group.title}</span>
                                    <span>↗</span>
                                  </Link>
                                </div>
                                <div className="flyout-items">
                                  {group.items.map((subItem, subIndex) => {
                                    const isSubActive = pathname === subItem.href;
                                    return (
                                      <Link
                                        key={subItem.href}
                                        href={subItem.href}
                                        className={`flyout-item ${isSubActive ? "is-active" : ""}`}
                                        role="menuitem"
                                        onClick={closeAll}
                                        onKeyDown={(e) => handleFlyoutKeyDown(e, group, subIndex)}
                                      >
                                        {subItem.label}
                                      </Link>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* MOBILE ACCORDION MENU */}
                  <div className={`dropdown-menu mobile-dropdown-menu ${productsOpen ? "show" : ""}`}>
                    <div className="mobile-accordion">
                      {productMenu.map((group) => {
                        const hasChildren = group.items && group.items.length > 0;
                        const isGroupActive = group.slug === "all-products"
                          ? pathname === "/products"
                          : pathname === group.href || group.items.some(sub => pathname === sub.href);
                        const isAccordionOpen = mobileOpenGroup === group.slug;

                        if (!hasChildren) {
                          // All Products direct link
                          return (
                            <Link
                              key={group.slug}
                              href={group.href}
                              className={`mobile-all-products-link ${isGroupActive ? "is-active" : ""}`}
                              onClick={closeAll}
                            >
                              {group.title}
                            </Link>
                          );
                        }

                        return (
                          <div key={group.slug} className="mobile-accordion-group">
                            <button
                              type="button"
                              className={`mobile-group-header ${isGroupActive ? "is-active-group" : ""}`}
                              aria-expanded={isAccordionOpen}
                              onClick={() => {
                                setMobileOpenGroup(isAccordionOpen ? null : group.slug);
                              }}
                            >
                              <span>{group.title}</span>
                              <span className={`mobile-group-chevron ${isAccordionOpen ? "rotate" : ""}`}>›</span>
                            </button>

                            <div className={`mobile-accordion-body ${isAccordionOpen ? "is-open" : ""}`}>
                              <Link
                                href={group.href}
                                className="mobile-group-overview-link"
                                onClick={closeAll}
                              >
                                View all {group.title} →
                              </Link>
                              {group.items.map(subItem => {
                                const isSubActive = pathname === subItem.href;
                                return (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className={`mobile-sub-link ${isSubActive ? "is-active" : ""}`}
                                    onClick={closeAll}
                                  >
                                    {subItem.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            const isActive = pathname === item.href;
            const isReadyStock = item.href === "/ready-stock";
            return (
              <Link
                className={`nav-link ${isActive ? "is-active active" : ""} ${isReadyStock ? "nav-ready-stock-pill" : ""}`}
                key={item.href}
                href={item.href}
                onClick={closeAll}
              >
                {item.label}
              </Link>
            );
          })}
          </div>
        </nav>

        <div className="header-cta-group">
          <a
            href="https://wa.me/919412236335?text=Hello%20SS%20Metal%20Industries%2C%20I%20want%20to%20inquire%20about%20your%20products"
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp header-whatsapp"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82-1.55 1.55-3.62 2.42-5.82 2.42-1.46 0-2.88-.39-4.14-1.14l-.3-.18-3.08.81.82-3-.19-.31a8.21 8.21 0 01-1.27-4.42c0-4.54 3.7-8.24 8.24-8.24z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
          <Link href="/contact" className="btn btn-primary header-quote" onClick={closeAll}>
            <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Get Quote</span>
          </Link>
          <button
            className="mobile-menu-button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon open={menuOpen}/>
          </button>
        </div>
      </div>
    </header>
  );
}
