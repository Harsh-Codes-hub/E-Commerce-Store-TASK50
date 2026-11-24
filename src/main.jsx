import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./providers/ThemeProvider.jsx";
import ProductProvider from "./providers/ProductProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>,
);
