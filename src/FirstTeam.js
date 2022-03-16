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
      <div className="container-fluid w-lg-75">                          
        <div className="">
          <ModalImage small={firstTeam} large={firstTeam}
            className="img-fluid img-thumbnail my-3 "

            alt="Erste Mannschaft"

          />
        </div>
        <div className="countdownContainer rounded p-4">
          <h4>Saison 2020/2021</h4>
          <h5 className="lead">Hinten von links nach rechts:</h5>
          <p className="">Markus Schumann, Daniel Piehl, Elias Just, Nico Balschun, Luca Jena,
            Quentin Bernstein, Christopher Pauli, Jonas Höntsch, Andrè Barth</p>
          <h5 className="lead">Vorn von links nach rechts:</h5>
          <p>Ingo Grajek, Heiko Seifert, Hartmut Friedrich, Lars Hendrischke, Christian
            Gebert, Leon Gottschild, Patrick Fuhrmann, Christopher Scholz,
            Manuel Lages, Ole Friedrich, Paul Mühlmann, Erik Dobierzin</p>
          <h5 className="lead">Vorn von links nach rechts:</h5>
          <p>Phillipp Seifert, Claas Schmeißer, Daniel Albert, Etienne Kalkofen, Andreas
            Ludwig, Christian Protz, Tino Lai, Christoph Freyer</p>
        </div>

        <ContributionSite team='first' />
      </div>
    );
  }
}



export default FirstTeam;
