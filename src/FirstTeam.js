import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContributionSite from "./ContributionSite";
import firstTeam from "./pictures/firstTeam.jpg";

function FirstTeam(props) {
  return (
    <div className="container-fluid ">
      <div class="mb-3 text-center d-flex flex-column">
        <img
          className="img-fluid img-thumbnail my-3"
          src={firstTeam}
          alt="Erste Mannschaft"
        ></img>
        <div className="Player">
          <h2 className="text-center font-weight-bold">
            Wir bedanken uns für das Trikotsponsoring bei Firma Rothermann
            Heizungs- und Sanitärtechnik.
          </h2>
          <h3 className="text-center font-italic">
            Hinten von links nach rechts:
          </h3>
          <h5 className="">
            Markus Schuhmann,Daniel Piel,Elias Just, Nico Balschun, Luca Jena, Quentin Bernstein, Christopher pauli, Jonas Höhntsch, Andre Barth
          </h5>
          <h3 className="text-center font-italic">
            Vorn von links nach rechts:
          </h3>
          <h5 className="text-center font-weight-light">
           Ingo Grajek(Präsident), Heiko, -, Lars hendrischke, Christian gebbert, leon Gottschild, Patrick Fuhrmann, Christopher Scholz, Manuel Lages, Ole Friedrich, Paul Mühlmann, Erik Dobierzin
            <br />
          </h5>
          <h3 className="text-center font-italic">
            Vorn von links nach rechts:
          </h3>
          <h5 className="text-center font-weight-light">
           Pinscher, Claas Schmeißer, Daniel Albert, Etienne Kalkofen, Adreas Ludwig, Christian Protz, Tino Lai, Christoph Freyer
            <br />
          </h5>
          <h3 className="text-center font-italic">Fehlend:</h3>
          <h5 className="text-center font-weight-light">
            
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
