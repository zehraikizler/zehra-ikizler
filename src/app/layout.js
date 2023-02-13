import Footer from "@/components/footer";
import MouseTracking from "@/components/mouseTracking";
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
        <main>{children}</main>
        <MouseTracking />
        <Footer />
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
