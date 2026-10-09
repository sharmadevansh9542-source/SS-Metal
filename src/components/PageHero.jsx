import Link from "next/link";
import React from "react";

export default function PageHero({
  eyebrow = "SS Metal Industries",
  title,
  description,
  image = "/images/hero-metal.svg",
  compact = false,
  parent = null
}) {
  const parentTrail = Array.isArray(parent) ? parent : parent ? [parent] : [];

  return (
    <section className={`page-hero ${compact ? "page-hero-compact" : ""}`} style={{"--hero-image": `url('${image}')`}}>
      <div className="container page-hero-content">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          {parentTrail.map((item, idx) => (
            <React.Fragment key={item.href || idx}>
              <Link href={item.href}>{item.label}</Link>
              <span>/</span>
            </React.Fragment>
          ))}
          <span>{title}</span>
        </div>
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-hero-description">{description}</p>}
      </div>
    </section>
  );
}
