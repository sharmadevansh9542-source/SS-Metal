import Link from "next/link";

export default function PageHero({
  eyebrow = "SS Metal Industries",
  title,
  description,
  image = "/images/hero-metal.svg",
  compact = false,
  parent = null
}) {
  return (
    <section className={`page-hero ${compact ? "page-hero-compact" : ""}`} style={{"--hero-image": `url('${image}')`}}>
      <div className="container page-hero-content">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          {parent && (
            <>
              <Link href={parent.href}>{parent.label}</Link>
              <span>/</span>
            </>
          )}
          <span>{title}</span>
        </div>
        <p className="eyebrow light">{eyebrow}</p>
        <h1>{title}</h1>
        {description && <p className="page-hero-description">{description}</p>}
      </div>
    </section>
  );
}
