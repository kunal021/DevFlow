import Navbar from "@/components/shared/navbar/Navbar";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="relative background-light850_dark100">
      <Navbar />
      <div className="flex">
        LeftSidebar
        <section className="flex flex-1 flex-col min-h-screen px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="w-full mx-auto max-w-5xl">{children}</div>
        </section>
        RightSidebar
      </div>
      Toaster
    </main>
  );
}

export default Layout;
