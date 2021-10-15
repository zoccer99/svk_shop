import React from "react";
import ContributionSite from "./ContributionSite";
import secondTeam from "./pictures/secondTeam.jpg";

function SecondTeam(props) {
  return (
    <div className="container-fluid">
      <div class="mb-3 text-center d-flex flex-column ">
        <div className="d-flex justify-content-center">
          <img
            className="img-fluid img-thumbnail my-3 myThumbnail"
            src={secondTeam}
            alt="Zweite Mannschaft"
          ></img>
        </div>
        <div>
        <div className="card mt-4 PlayerCard">
          <div className="card-body">
          <h2 className="text-center ">
            Wir bedanken uns für das Trikotsponsoring bei Firma Rothermann
            Heizungs- und Sanitärtechnik.
          </h2>
          <h3 className="text-center">Hintere Reihe von links nach rechts:</h3>
          <h5 className="text-center ">
            Markus Schumann, Elias Just, Christoph Freyer, Silvio Gipp (SF), Tom
            Kratz
          </h5>
          <h3 className="text-center ">
            Mittlere Reihe von von links nach rechts:
          </h3>
          <h5 className="text-center ">
            Holger Stauch (Sponsor), Christian Gebert (Betreuer), Jürgen (Paul)
            Mühlmann (Betreuer), Ingo Grajek, Maik Wötzel, Christian Koschik,
            Uwe Schwager, Matthias Neumann, Robert Tischendorf, Erik Dobierzin,
            Lars Hendrischke, Heiko Seifert, Peter Hornbogen (Teammanager)
            <br />
          </h5>
          <h3 className="text-center">
            Vordere Reihe von von links nach rechts:
          </h3>
          <h5 className="text-center font-weight-light">
            Jens Gustke, Andre Barth, Bernd Abendroth, Toni Böttcher, Andre
            Koschik, Denis Sosna, Etienne- Noel Kalkofen, Matthias Scholle
            <br />
          </h5>
          <h3 className="text-center ">Fehlend:</h3>
          <h5 className="text-center">
            Dietmar Abendroth, Jens Schmeißer, Julius- Niclas Pacholski, Philipp
            Schmidt, Thomas Oertel, Philipp Meyer, Udo- Thomas Schirdewahn, Aiko
            Schmeißer, Christopher Pauli
            <br />
          </h5>
        </div>
        </div>
      </div>
      </div>
      <ContributionSite />
    </div>
  );
}

export default SecondTeam;
