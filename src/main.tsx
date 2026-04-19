import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { RatingsProvider } from "./context/RatingsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <RatingsProvider>
        <App />
      </RatingsProvider>
    </BrowserRouter>
  </StrictMode>
);
