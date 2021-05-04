import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/gridCSS.css";
import { CookiesProvider } from "react-cookie";

ReactDOM.render(
  <CookiesProvider>
    <React.StrictMode>
      <Welcome />
    </React.StrictMode>
  </CookiesProvider>,
  document.getElementById("root")
);
