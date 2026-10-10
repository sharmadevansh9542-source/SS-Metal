import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import siteConfig from "../data/siteConfig";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair"
});

export const metadata = {
  title: {
    default: "SS Metal Industries | Stainless Steel Utensils & Kalvat Manufacturers Moradabad",
    template: "%s | SS Metal Industries"
  },
  description: siteConfig.description
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a2540"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <a
          className="floating-whatsapp"
          href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20SS%20Metal%20Industries%2C%20I%20want%20to%20inquire%20about%20your%20products`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82-1.55 1.55-3.62 2.42-5.82 2.42-1.46 0-2.88-.39-4.14-1.14l-.3-.18-3.08.81.82-3-.19-.31a8.21 8.21 0 01-1.27-4.42c0-4.54 3.7-8.24 8.24-8.24z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}