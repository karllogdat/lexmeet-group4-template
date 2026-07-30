import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DesignSystemPage from "./pages/DesignSystemPage";
import MainLayout from "./components/MainLayout";
import LawPracticePage from "./pages/LawPracticePage";
import EverydayLawMainPage from "./pages/EverydayLawMainPage";
import EverydayLawBlogPage from "./pages/EverydayLawBlogPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
        <Route path="/law-practice" element={<LawPracticePage />} />
        <Route path="/everyday-law" element={<EverydayLawMainPage />} />
        <Route path="/everyday-law/blog" element={<EverydayLawBlogPage />} />
      </Route>
    </Routes>
  );
}

export default App;
