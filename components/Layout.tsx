import { ReactNode } from "react";

import Footer from "./Footer";
import Navbar from "./Navbar";
import CitySkyline from "./CitySkyline";

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <div>
      <Navbar />
      <main className="w-full max-w-2xl mx-auto pt-4 md:pt-8 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
      <CitySkyline />
    </div>
  </>
);

export default Layout;
