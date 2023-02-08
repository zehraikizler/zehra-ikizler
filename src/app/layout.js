import Footer from "@/components/footer";
import LeftSidebar from "@/components/sidebar/leftSidebar";
import RightSidebar from "@/components/sidebar/rightSidebar";

import "@/styles/global.css";
import "@/styles/reset.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head />
      <body>
        <LeftSidebar />
        <RightSidebar />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
