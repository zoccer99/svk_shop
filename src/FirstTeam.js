import React from "react";
import ContributionSite from "./ContributionSite";
import firstTeam from "./pictures/firstTeam.jpg";

function FirstTeam(props) {
  return (
    <div className="container-fluid">
        <div class="my-3 mx-2 text-center">
          <img
            className="img-fluid img-thumbnail rounded"
            src={firstTeam}
            alt="Erste Mannschaft"
          ></img>
          <div className="Player">
            <h2 className="text-center">
              Wir bedanken uns für das Trikotsponsoring bei Firma Rothermann
              Heizungs- und Sanitärtechnik.
            </h2>
            <h3 className="text-center">Hinten von links nach rechts:</h3>
            <h5 className="text-center"> 
              Lars Hendrischke (Betreuer), Ingo Grajek (Präsi), Jens Rothermann
              (Sponsor), Nico Balschun, Christian Koschik, Quentin Bernstein,
              Udo- Thomas Schirdewahn, Luca Jena, Elias Just, Manuel Lages,
              Christoph Scholz (SF), Etienne- Noel Kalkofen, Christoph Freyer,
              Andre Barth, Erik Dobierzin (Trainer)
            </h5>
            <h3 className="text-center">Vorn von links nach rechts:</h3>
            <h5 className="text-center">
              Matthias Scholle, Philipp Seifert, Leon Gottschild, Markus
              Schumann, Christopher Pauli, Andreas Ludwig, Julius- Niclas
              Pacholski, Philipp Schmidt, Daniel Piehl, Marc- Andre Preuß, Nils
              Jaeger, Christian Gebert (Betreuer)
              <br />
            </h5>
            <h3 className="text-center">Fehlend:</h3>
            <h5 className="text-center">
              Florian Seidemann, Robert Tischendorf, Matthias Neumann
              <br />
            </h5>
          </div>
        </div>
      <ContributionSite />
    </div>
  );
}

export default FirstTeam;
