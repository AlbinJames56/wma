import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

import ContextShare from "./ContextAPI/ContextShare.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextShare>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextShare>
  </StrictMode>
);
