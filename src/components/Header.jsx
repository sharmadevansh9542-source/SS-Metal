'use client';
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import siteConfig from "../data/siteConfig";
import { productMenu } from "../data/products";
import { MenuIcon } from "./Icons";

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
      // Level 1 panel width is ~240px, flyout is ~250px
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

  // Hover handlers with 150ms delay to prevent flicker between panels
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

  // Keyboard navigation
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
