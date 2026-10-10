'use client';
import Link from "next/link";
import React from "react";
import siteConfig from "../data/siteConfig";

export default function PageHero({
  eyebrow = "SS Metal Industries",
  title,
  highlight = "",
  description,
  image = "/images/company-headquarters.jpg",
  compact = false,
  parent = null,
  primaryAction = null,
  secondaryAction = null,
  note = null
}) {
  const parentTrail = Array.isArray(parent) ? parent : parent ? [parent] : [];

  return (
    <section className={`page-hero home-style-hero ${compact ? "page-hero-compact" : ""}`}>
      <div
        className="hero-image-layer"
        style={{
          backgroundImage: `linear-gradient(90deg, #071d36 0%, rgba(7, 29, 54, 0.95) 42%, rgba(10, 37, 69, 0.76) 68%, rgba(10, 37, 69, 0.2) 100%), url('${image}')`
        }}
      ></div>

      <div className="container page-hero-content">
        <div className="hero-copy">
          {/* Breadcrumb glassmorphism badge */}
          <nav className="hero-breadcrumb-badge" aria-label="Breadcrumb" data-aos="fade-up" data-aos-delay="50">
            <Link href="/" className="hbb-home">Home</Link>
            <span className="hbb-sep">/</span>
            {parentTrail.map((item, idx) => (
              <React.Fragment key={item.href || idx}>
                <Link href={item.href} className="hbb-link">{item.label}</Link>
                <span className="hbb-sep">/</span>
              </React.Fragment>
            ))}
            <span className="hbb-current">{title}</span>
          </nav>

          <p className="eyebrow light" data-aos="fade-up" data-aos-delay="100">
            <span className="eyebrow-line"></span> {eyebrow}
          </p>

          <h1 className="hero-title" data-aos="fade-up" data-aos-delay="150">
            {title}
            {highlight && (
              <>
                <br />
                <em>{highlight}</em>
              </>
            )}
          </h1>

          {description && <p className="hero-lead" data-aos="fade-up" data-aos-delay="200">{description}</p>}

          <div className="hero-actions" data-aos="fade-up" data-aos-delay="250">
            {primaryAction ? (
              primaryAction.href.startsWith("http") ? (
                <a
                  href={primaryAction.href}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-copper"
                >
                  {primaryAction.label}
                </a>
              ) : (
                <Link href={primaryAction.href} className="button button-copper">
                  {primaryAction.label}
                </Link>
              )
            ) : (
              <Link href="/products" className="button button-copper">
                Explore Products
              </Link>
            )}

            {secondaryAction ? (
              <Link href={secondaryAction.href} className="button button-outline-light">
                {secondaryAction.label}
              </Link>
            ) : (
              <Link href="/ready-stock" className="button button-outline-light">
                ⚡ Ready Stock
              </Link>
            )}
          </div>

          <div className="hero-note" data-aos="fade-up" data-aos-delay="300">
            <span className="hero-note-line"></span>
            <span>
              {note || (
                <>
                  Stainless steel manufacturing<br />
                  <strong>Since {siteConfig.founded} &bull; Moradabad Plant</strong>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
