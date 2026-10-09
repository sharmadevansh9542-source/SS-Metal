import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import siteConfig from "../data/siteConfig";

export const metadata = {
  title: { default: "SS Metal Industries | Stainless Steelware", template: "%s | SS Metal Industries" },
  description: siteConfig.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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