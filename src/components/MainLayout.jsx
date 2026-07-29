import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout() {
    return (
        <div className="w-screen h-shrink flex flex-col">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}