'use client';
import Link from "next/link";
import { useState } from "react";
import siteConfig from "../data/siteConfig";
import { MenuIcon } from "./Icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="topline">
        <div className="container topline-inner">
          <span>Manufacturer of stainless steelware & unfinished products</span>
          <div className="topline-contact"><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><span>•</span><a href={`tel:${siteConfig.phone.replaceAll(" ", "")}`}>{siteConfig.phone}</a></div>
        </div>
      </div>
      <div className="container nav-wrap">
        <Link className="brand" href="/" aria-label={`${siteConfig.brand} home`} onClick={() => setMenuOpen(false)}>
          <span className="brand-mark"><span>SM</span></span>
          <span className="brand-copy"><strong>SS Metal</strong><small>INDUSTRIES</small></span>
        </Link>
        <button className="mobile-menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><MenuIcon open={menuOpen}/></button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {siteConfig.navigation.map(item => item.children ? (
            <div className="nav-dropdown" key={item.label}>
              <button className="nav-link dropdown-toggle" onClick={() => setProductsOpen(!productsOpen)} aria-expanded={productsOpen}>{item.label}<span className="chevron">⌄</span></button>
              <div className={`dropdown-menu ${productsOpen ? "show" : ""}`}>
                <Link href={item.href} onClick={() => {setMenuOpen(false);setProductsOpen(false)}}>All Products</Link>
                {item.children.map(child => <Link key={child.href} href={child.href} onClick={() => {setMenuOpen(false);setProductsOpen(false)}}>{child.label}</Link>)}
              </div>
            </div>
          ) : <Link className="nav-link" key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
          <Link className="nav-enquiry" href="/contact" onClick={() => setMenuOpen(false)}>Send Enquiry <span>↗</span></Link>
        </nav>
      </div>
    </header>
  );
}
