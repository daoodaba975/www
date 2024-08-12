import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <div className="bg-snow dark:bg-night">
      <Navbar />
      <main className="w-full max-w-2xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;
