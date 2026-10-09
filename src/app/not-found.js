import Link from "next/link";
export default function NotFound() {
  return <section className="not-found"><div className="container"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>This page isn't<br/><em>in the catalogue.</em></h1><p>The page may have moved or the address may be incorrect.</p><Link className="button button-primary" href="/">Return to home ↗</Link></div></section>;
}
