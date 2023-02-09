import Footer from "@/components/footer";
import LeftSidebar from "@/components/sidebar/leftSidebar";
import RightSidebar from "@/components/sidebar/rightSidebar";

import "@/styles/global.css";
import "@/styles/reset.css";

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head />
      <body className="bg-light relative flex gap-x-10">
        <LeftSidebar />
        <RightSidebar />

        <main className="ml-56">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
