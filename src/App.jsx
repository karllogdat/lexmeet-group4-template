import { useEffect } from "react"; // 1. Import ang useEffect
import { Routes, Route, useLocation } from "react-router"; // 2. Import ang useLocation

import HomePage from "./pages/HomePage";
import DesignSystemPage from "./pages/DesignSystemPage";
import MainLayout from "./components/MainLayout";
import LawPracticePage from "./pages/LawPracticePage";
import EverydayLawMainPage from "./pages/EverydayLawMainPage";
import EverydayLawBlogPage from "./pages/EverydayLawBlogPage";
import EverydayLawBlogListPage from "./pages/blog-list/EverydayLawBlogListPage";
import LawUpdatesBlogListPage from "./pages/blog-list/LawUpdatesBlogListPage";
import LawyersBlogListPage from "./pages/blog-list/LawyersBlogListPage";
import LawOfficePage from "./pages/LawOffice";
import LawyersProfile from "./pages/LawyersProfile";
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  const { pathname } = useLocation(); // 3. Kunin ang kasalukuyang URL path

  // 4. I-trigger ang scroll to top sa bawat pagbabago ng pathname
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/design-system" element={<DesignSystemPage />} />
          <Route path="/law-practice" element={<LawPracticePage />} />
          <Route path="everyday-law">
            <Route index element={<EverydayLawMainPage />} />
            <Route path="blog" element={<EverydayLawBlogPage />} />
            <Route
              path="everyday-law-blog-list"
              element={<EverydayLawBlogListPage />}
            />
            <Route
              path="law-updates-blog-list"
              element={<LawUpdatesBlogListPage />}
            />
            <Route path="lawyers-blog-list" element={<LawyersBlogListPage />} />
          </Route>
          <Route path="/law-office" element={<LawOfficePage />} />
          <Route path="/lawyers-profile" element={<LawyersProfile />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
