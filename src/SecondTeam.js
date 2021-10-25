import React from "react";
import ContributionSite from "./ContributionSite";
import secondTeam from "./pictures/secondTeam.jpg";

function SecondTeam(props) {
  return (
    <div className="container-fluid secondTeamWrapper">
      <div className="d-flex justify-content-center">
        <img
          className="img-fluid img-thumbnail my-3 myThumbnail"
          src={secondTeam}
          alt="Zweite Mannschaft"
          loading="lazy"
        ></img>
      </div>
      <div>
        <h5 >Hintere Reihe von links nach rechts:</h5>
        <p >
          Markus Schumann, Elias Just, Christoph Freyer, Silvio Gipp (SF), Tom
          Kratz
        </p>
        <h5>
          Mittlere Reihe von von links nach rechts:
        </h5>
        <p>
          Holger Stauch (Sponsor), Christian Gebert (Betreuer), Jürgen (Paul)
          Mühlmann (Betreuer), Ingo Grajek, Maik Wötzel, Christian Koschik,
          Uwe Schwager, Matthias Neumann, Robert Tischendorf, Erik Dobierzin,
          Lars Hendrischke, Heiko Seifert, Peter Hornbogen (Teammanager)

        </p>
        <h5>
          Vordere Reihe von von links nach rechts:
        </h5>
        <p >
          Jens Gustke, Andre Barth, Bernd Abendroth, Toni Böttcher, Andre
          Koschik, Denis Sosna, Etienne- Noel Kalkofen, Matthias Scholle

        </p>
        <h5 >Fehlend:</h5>
        <p >
          Dietmar Abendroth, Jens Schmeißer, Julius- Niclas Pacholski, Philipp
          Schmidt, Thomas Oertel, Philipp Meyer, Udo- Thomas Schirdewahn, Aiko
          Schmeißer, Christopher Pauli
        </p>
      </div>
      <ContributionSite />
    </div>
  );
}

export default SecondTeam;
