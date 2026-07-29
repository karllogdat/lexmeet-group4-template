import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DesignSystemPage from "./pages/DesignSystemPage";
import MainLayout from "./components/MainLayout";
import LawPracticePage from "./pages/LawPracticePage";
import EverydayLawMainPage from "./pages/EverydayLawMainPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
        <Route path="/law-practice" element={<LawPracticePage />} />
        <Route path="/everyday-law" element={<EverydayLawMainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
