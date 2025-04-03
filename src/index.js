import React from "react";
import {createRoot} from "react-dom/client";
import ReactDOM from "react-dom";
import Welcome from "./Welcome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/gridCSS.css";
import "../node_modules/react-image-gallery/styles/css/image-gallery.css";
import '../node_modules/draft-js/dist/Draft.css';
import UserProvider from "./Hooks/useContext";


const app = document.getElementById("root");
const root = createRoot(app);
root.render(
  <UserProvider>
     <Welcome />
     </UserProvider>
);


// ReactDOM.render(
//   <React.StrictMode>
//     <UserProvider>
//       <Welcome />
//     </UserProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
