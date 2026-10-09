'use client';
import { useState, useEffect } from "react";
import siteConfig from "../data/siteConfig";

export default function EnquiryForm() {
  const [status, setStatus] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const prod = params.get("product");
      if (prod) {
        setSelectedProduct(prod);
      }
    }
  }, []);

  function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setStatus("Thanks for your enquiry. This demo form is validated locally but is not connected to email delivery yet.");
    form.reset();
  }

  const productNav = siteConfig.navigation.find(item => item.label === "Products");
  const groups = productNav?.groups || [];

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          Full name *
          <input name="name" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          Company name
          <input name="company" autoComplete="organization" placeholder="Company / business" />
        </label>
      </div>
      <div className="form-row">
        <label>
          Email address *
          <input type="email" name="email" autoComplete="email" required placeholder="you@company.com" />
        </label>
        <label>
          Phone number *
          <input type="tel" name="phone" autoComplete="tel" required minLength="8" placeholder="+91 ..." />
        </label>
      </div>
      <label>
        Product of interest
        <select
          name="product"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
        >
          <option value="" disabled>Select a product range</option>
          {groups.map(group => (
            <optgroup key={group.heading} label={group.heading}>
              {group.items
                .filter(item => item.href !== "/products")
                .map(item => (
                  <option key={item.label} value={item.label}>
                    {item.label}
                  </option>
                ))}
            </optgroup>
          ))}
          <option value="Other / custom requirement">Other / custom requirement</option>
        </select>
      </label>
      <label>
        Tell us about your requirement *
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Product, quantity, specifications or other details (Grade, thickness and size available on request)..."
        />
      </label>
      <button className="button button-primary" type="submit">
        Submit enquiry <span>↗</span>
      </button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
