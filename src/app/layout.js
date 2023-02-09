import Footer from "@/components/footer";
import LeftSidebar from "@/components/sidebar/leftSidebar";
import RightSidebar from "@/components/sidebar/rightSidebar";

import "@/styles/global.css";
import "@/styles/reset.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head />
      <body className="bg-light relative">
        <LeftSidebar />
        <RightSidebar />

        <main className="mx-56 pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
