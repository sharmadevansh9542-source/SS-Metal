# Reference audit — SSmetalindustries.com

## Reference
- Homepage: https://www.SSmetalindustries.com/
- Publicly indexed company profile identifies the business as a manufacturer of stainless-steel kitchenware, cookware, bath accessories and bar accessories, with unfinished/Kalvat products and a manufacturing focus.
- Publicly indexed company information mentions establishment in 1980 and a base in Manoharpur, Moradabad, Uttar Pradesh. Verify all business details with the company before production use.

## Inspection status
The reference homepage and all linked destinations could not be reliably crawled and visually inspected end-to-end in this environment. Consequently, the implementation does not claim exact page-for-page or pixel-perfect parity. It provides a practical multi-page industrial catalogue with clearly configurable content.

## Implemented page inventory
| Local route | Purpose |
| --- | --- |
| `/` | Hero, company intro, category cards, manufacturing section, enquiry CTA |
| `/about` | Company overview and company values |
| `/products` | Product category listing |
| `/products/stainless-steel-kitchenware` | Kitchenware category |
| `/products/cookware` | Cookware category |
| `/products/barware` | Barware category |
| `/products/bath-accessories` | Bath accessories category |
| `/products/unfinished-kalvat-utensils` | Unfinished/Kalvat utensils category |
| `/manufacturing` | Manufacturing overview |
| `/quality` | Quality approach |
| `/contact` | Contact information and validated demo enquiry form |

## Navigation hierarchy
- Home
- About Us
- Products
  - Stainless Steel Kitchenware
  - Cookware
  - Barware
  - Bath Accessories
  - Unfinished / Kalvat Utensils
- Manufacturing
- Quality
- Contact

## Shared components
- Header with desktop navigation and responsive mobile menu
- Footer
- Page title / breadcrumb hero
- Product category cards
- Product detail cards / local SVG illustrations
- Enquiry call-to-action
- Contact form with required-field and email validation
- Floating WhatsApp enquiry link (configurable)

## Visual direction
The site uses a traditional industrial/manufacturer aesthetic: deep navy, steel grey, white, restrained copper accent, strong typography, generous content spacing and rectangular product cards. The product illustrations are original local SVGs designed as placeholders and are not represented as original company assets.

## Assets and incomplete features
- Local SVG illustrations are included under `public/images/`.
- Original company logo and product photography were not verified/reused.
- Search, product pricing and checkout are intentionally not included because this is a B2B enquiry catalogue.
- Contact form currently runs in demo mode and does not deliver email. A backend/API and email provider are required for real submissions.
- Exact responsive screenshots and pixel comparison against the live reference were not completed.
