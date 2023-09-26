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
      <body className="bg-white relative overflow-x-hidden">
        <div>
          <LeftSidebar />
          <RightSidebar />
          <main>{children}</main>
          <MouseTracking />
          <Footer />
        </div>
      </body>
    </html>
  );
}
