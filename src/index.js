import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../src/assets/fonts/CormorantInfant-SemiBold.ttf";
import "../src/assets/fonts/RingbearerMedium-51mgZ.ttf";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
