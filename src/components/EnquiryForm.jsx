'use client';
import { useState } from "react";
export default function EnquiryForm() {
  const [status, setStatus] = useState("");
  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("Thanks for your enquiry. This demo form is validated locally but is not connected to email delivery yet.");
    form.reset();
  }
  return <form className="enquiry-form" onSubmit={submit}>
    <div className="form-row"><label>Full name *<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Company name<input name="company" autoComplete="organization" placeholder="Company / business" /></label></div>
    <div className="form-row"><label>Email address *<input type="email" name="email" autoComplete="email" required placeholder="you@company.com" /></label><label>Phone number *<input type="tel" name="phone" autoComplete="tel" required minLength="8" placeholder="+91 ..." /></label></div>
    <label>Product of interest<select name="product" defaultValue=""><option value="" disabled>Select a product range</option><option>Stainless Steel Kitchenware</option><option>Cookware</option><option>Barware</option><option>Bath Accessories</option><option>Unfinished / Kalvat Utensils</option><option>Other / custom requirement</option></select></label>
    <label>Tell us about your requirement *<textarea name="message" rows="5" required placeholder="Product, quantity, specifications or other details..." /></label>
    <button className="button button-primary" type="submit">Submit enquiry <span>↗</span></button>
    {status && <p className="form-status" role="status">{status}</p>}
  </form>;
}
