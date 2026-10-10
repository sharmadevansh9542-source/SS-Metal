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
  title: { default: "SS Metal Industries | Stainless Steelware", template: "%s | SS Metal Industries" },
  description: siteConfig.description
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#152A33"
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
          href={`https://wa.me/${siteConfig.whatsappNumber}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Enquire on WhatsApp"
        >
          <span>✆</span>
          <b>WhatsApp Enquiry</b>
        </a>
      </body>
    </html>
  );
}