import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import DesignSystemPage from "./pages/DesignSystemPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/design-system" element={<DesignSystemPage />} />
    </Routes>
  );
}

export default App;
