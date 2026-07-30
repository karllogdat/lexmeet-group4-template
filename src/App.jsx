import { Routes, Route } from "react-router";
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
import LawyersProfilePage from "./pages/LawyersProfile";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
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
        <Route path="/lawyers-profile" element={<LawyersProfilePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
