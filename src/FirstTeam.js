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
          <div className="card mt-4 PlayerCard">
            <div className="card-body">
              <p className="text-center">
                Wir bedanken uns für das Trikotsponsoring bei Firma Rothermann
                Heizungs- und Sanitärtechnik.
              </p>
              
              <h3 className="text-center mt-3 ">Hinten von links nach rechts:</h3>
              
              <p className="text-center">
                Markus Schuhmann,Daniel Piel,Elias Just, Nico Balschun, Luca Jena,
                Quentin Bernstein, Christopher pauli, Jonas Höhntsch, Andre Barth
              </p>
              <h3 className="text-center mt-3">Vorn von links nach rechts:</h3>
              <p className="text-center ">
                Ingo Grajek(Präsident), Heiko, -, Lars hendrischke, Christian
                gebbert, leon Gottschild, Patrick Fuhrmann, Christopher Scholz,
                Manuel Lages, Ole Friedrich, Paul Mühlmann, Erik Dobierzin
                <br />
              </p>
              <h3 className="text-center mt-3">Vorn von links nach rechts:</h3>
              <p className="text-center">
                Pinscher, Claas Schmeißer, Daniel Albert, Etienne Kalkofen, Adreas
                Ludwig, Christian Protz, Tino Lai, Christoph Freyer
                <br />
              </p>
              <h3 className="text-center">Fehlend:</h3>
              <p className="text-center ">
                <br />
              </p>
            </div>
            </div>
            </div>
            </div>
      <ContributionSite />
    </div>
  );
}

export default FirstTeam;
