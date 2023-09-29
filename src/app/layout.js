import Footer from "../components/footer";
import Header from "../components/header";
import MouseTracking from "../components/mouseTracking";

import "../styles/global.css";
import "../styles/reset.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head />
      <body className="bg-white relative overflow-x-hidden">
        <div>
          <Header />
          <main>{children}</main>
          <MouseTracking />
          <Footer />
        </div>
      </body>
    </html>
  );
}
