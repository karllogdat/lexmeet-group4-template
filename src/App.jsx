import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DesignSystemPage from "./pages/DesignSystemPage";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/design-system" element={<DesignSystemPage />} />
      </Route>
    </Routes>
  );
}

export default App;
