import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AlgoProvider from "./context/AlgoProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AlgoProvider>
      <App />
    </AlgoProvider>
  </StrictMode>
);
