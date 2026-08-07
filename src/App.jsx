import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";

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
import BlogList from "./pages/blog-list/BlogList";
import BlogPage from "./pages/blog-list/BlogPage";

function App() {
  const { pathname } = useLocation();
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

          {/* Everyday Law Parent Route */}
          <Route path="/everyday-law">
            <Route index element={<EverydayLawMainPage />} />
            <Route path="blog" element={<EverydayLawBlogPage />} />

            <Route
              path="everyday-law-blog-list"
              element={<BlogList type="everyday_law" />}
            />
            <Route
              path="law-updates-blog-list"
              element={<BlogList type="law_updates" />}
            />
            <Route
              path="lawyers-blog-list"
              element={<BlogList type="lawyers_blog" />}
            />

            {/* Individual blogs */}
            <Route
              path="everyday-law-blog-list/:id"
              element={<BlogPage type="everyday_law" />}
            />

            <Route
              path="law-updates-blog-list/:id"
              element={<BlogPage type="law_updates" />}
            />

            <Route
              path="lawyers-blog-list/:id"
              element={<BlogPage type="lawyers_blog" />}
            />
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
