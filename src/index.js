import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/gridCSS.css";


ReactDOM.render(
    <React.StrictMode>
      <Welcome />
    </React.StrictMode>,
  document.getElementById("root")
);
