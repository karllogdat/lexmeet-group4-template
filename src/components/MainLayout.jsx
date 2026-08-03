import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ScrollProvider } from "../contexts/ScrollContext";

export default function MainLayout() {
  return (
    <div className="w-screen h-shrink flex flex-col">
      <ScrollProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </ScrollProvider>
    </div>
  );
}
