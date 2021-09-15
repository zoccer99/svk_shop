import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContributionSite from "./ContributionSite";
import firstTeam from "./pictures/firstTeam.jpg";

function FirstTeam(props) {
  return (
    <div className="container-fluid ">
      <div class="mb-3 text-center d-flex flex-column">
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid img-thumbnail my-3 myThumbnail"
            src={firstTeam}
            alt="Erste Mannschaft"
          ></img>
        </div>
        <div>
          <h2 className="text-center ">
            Wir bedanken uns für das Trikotsponsoring bei Firma Rothermann
            Heizungs- und Sanitärtechnik.
          </h2>
          <h3 className="text-center ">Hinten von links nach rechts:</h3>
          <h5 className="text-center">
            Markus Schuhmann,Daniel Piel,Elias Just, Nico Balschun, Luca Jena,
            Quentin Bernstein, Christopher pauli, Jonas Höhntsch, Andre Barth
          </h5>
          <h3 className="text-center ">Vorn von links nach rechts:</h3>
          <h5 className="text-center ">
            Ingo Grajek(Präsident), Heiko, -, Lars hendrischke, Christian
            gebbert, leon Gottschild, Patrick Fuhrmann, Christopher Scholz,
            Manuel Lages, Ole Friedrich, Paul Mühlmann, Erik Dobierzin
            <br />
          </h5>
          <h3 className="text-center ">Vorn von links nach rechts:</h3>
          <h5 className="text-center">
            Pinscher, Claas Schmeißer, Daniel Albert, Etienne Kalkofen, Adreas
            Ludwig, Christian Protz, Tino Lai, Christoph Freyer
            <br />
          </h5>
          <h3 className="text-center">Fehlend:</h3>
          <h5 className="text-center ">
            <br />
          </h5>
        </div>
      </div>
      <div class="wrapper">
        <div class="divider div-transparent"></div>
      </div>
      <ContributionSite />
    </div>
  );
}

export default FirstTeam;
