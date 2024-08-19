import Navbar from "@/components/shared/navbar/Navbar";
import LeftSidebar from "@/components/shared/sidebar/LeftSidebar";
import RightSidebar from "@/components/shared/sidebar/RightSidebar";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative background-light850_dark100">
      <Navbar />
      <div className="flex">
        <LeftSidebar />
        <section className="flex flex-1 flex-col min-h-screen px-4 pb-6 pt-24 max-md:pb-14 sm:px-6">
          <div className="w-full mx-auto max-w-5xl">{children}</div>
        </section>
        <RightSidebar />
      </div>
      {/* Toaster */}
    </main>
  );
}

export default Layout;
