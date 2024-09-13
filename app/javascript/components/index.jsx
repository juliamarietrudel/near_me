import React from "react";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const root = createRoot(
  document.body.appendChild(document.createElement("div"))
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
