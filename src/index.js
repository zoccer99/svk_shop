import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/gridCSS.css";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import UserProvider from "./Hooks/useContext";
import { faWheelchairMove } from "@fortawesome/free-solid-svg-icons";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Welcome />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
