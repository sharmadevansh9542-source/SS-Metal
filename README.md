# SS Metal Industries — Website Demo

A responsive, multi-page Next.js App Router demo inspired by the publicly visible business profile and stainless-steel product range associated with SS Metal Industries. It uses a configurable demo identity and original CSS/SVG product illustrations rather than claiming to contain the company's original artwork.

## Run locally (Windows / macOS / Linux)

1. Install Node.js 18.17+ (Node.js 20 LTS recommended).
2. Open this folder in a terminal.
3. Run:

```bash
npm install
npm run dev
```

4. Visit http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Pages included

- `/` — Home
- `/about` — Company overview
- `/products` — Product catalogue
- `/products/stainless-steel-kitchenware`
- `/products/cookware`
- `/products/barware`
- `/products/bath-accessories`
- `/products/unfinished-kalvat-utensils`
- `/manufacturing` — Manufacturing overview
- `/quality` — Quality approach
- `/contact` — Enquiry form and contact information

## Configure the identity

Edit `src/data/siteConfig.js` to change the demo brand, phone, email, address, social links and navigation. Product categories are in `src/data/products.js`.

Contact details shown in this demo are based on publicly indexed business information and should be verified before production use. The form validates inputs in the browser and shows a demo confirmation only; it does **not** send email. Connect a backend/email provider before using it for real enquiries.

## Reference audit and limitations

See `REFERENCE-AUDIT.md` for the page inventory and implementation notes. The reference website could not be exhaustively inspected page-by-page in this build environment, so this is a polished, runnable interpretation based on publicly indexed information and the requested page categories—not a pixel-perfect or verified full copy of every original page. Product illustrations are local original SVG assets, not original company photography.
"# SS-Metal" 
