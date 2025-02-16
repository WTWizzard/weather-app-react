import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { DataProvider } from "./context/DataProvider.jsx";

createRoot(document.getElementById("root")).render(
  <DataProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DataProvider>,
);
