import { Route, Routes } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/pokemon/:id" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
