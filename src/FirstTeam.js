import React, { useEffect } from "react";
import ContributionSite from "./ContributionSite";
import firstTeam from "./pictures/firstTeam.jpg";
import ModalImage from "react-modal-image";

class FirstTeam extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="container-fluid w-75">
        <div className="">
          <ModalImage small={firstTeam} large={firstTeam}
            className="img-fluid img-thumbnail my-3 "

            alt="Erste Mannschaft"

          />
        </div>
        <div className="light rounded p-4">
          <h5 >Hinten von links nach rechts:</h5>
          <p >Markus Schuhmann, Daniel Piel, Elias Just, Nico Balschun, Luca Jena,
            Quentin Bernstein, Christopher Pauli, Jonas Höhntsch, Andrè Barth</p>
          <h5>Vorn von links nach rechts:</h5>
          <p>Ingo Grajek(Präsident), Heiko, -, Lars hendrischke, Christian
            Gebbert, Leon Gottschild, Patrick Fuhrmann, Christopher Scholz,
            Manuel Lages, Ole Friedrich, Paul Mühlmann, Erik Dobierzin</p>
          <h5>Vorn von links nach rechts:</h5>
          <p>Phillip Pinscher, Claas Schmeißer, Daniel Albert, Etienne Kalkofen, Adreas
            Ludwig, Christian Protz, Tino Lai, Christoph Freyer</p>
        </div>

        <ContributionSite team='first' />
      </div>
    );
  }
}



export default FirstTeam;
