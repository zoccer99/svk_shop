import React from "react";
import Scholli from "./pictures/scholli.jpg";
import Markus from "./pictures/markus.jpg";
import Nico from "./pictures/nico.jpg";

function MobileGrid(props) {
  return (
    <div className="container">
      <div className="column">
        <div className="row">
            <div  className="imgTile_1 mt-3 col-12 p-0" > </div>
        </div>
        <div className="row">
          <div className="col-6 p-0 imgTile_2" ></div>
          <div className="col-6 p-0 imgTile_3" ></div>
        </div>
      </div>
    </div>
  );
}

export default MobileGrid;
