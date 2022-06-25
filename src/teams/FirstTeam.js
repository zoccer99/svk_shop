import React from "react";
import ContributionSite from "../Blog/ContributionSite";
import firstTeam from "../pictures/firstTeam.jpg";
import ModalImage from "react-modal-image";
import PlayerCard from "../PlayerCard";

import gebbi from "../pictures/profiles/gebbi.webp";
import SpielerNico from "../pictures/Spielerprofile/Balschun_Nico.JPG";
import SpielerQuentin from "../pictures/Spielerprofile/Bernstein_Quentin.JPG";
import SpielerEtienne from "../pictures/Spielerprofile/Kalkofen_Etienne.JPG";
import SpielerErik from "../pictures/Spielerprofile/Dobierzin_Erik.JPG";
import SpielerElias from "../pictures/Spielerprofile/Just_Elias.JPG";
import SpielerLeon from "../pictures/Spielerprofile/Gottschild_Leon.JPG";

class FirstTeam extends React.Component {
  randomNumbers(max) {
    let temp = Math.floor(Math.random() * max);
    return temp;
  }

  render() {
    return (
      <div className="container-fluid w-lg-75">
        <blockquote className="blockquote">
          <h1 className="mb-0">Erste Mannschaft</h1>
          <h2 className="blockquote-footer pt-4 ">
            Kreisoberliga Saison 2020/2021
          </h2>
        </blockquote>
        <div className="">
          <ModalImage
            small={firstTeam}
            large={firstTeam}
            className="img-fluid img-thumbnail my-3 "
            alt="Erste Mannschaft"
          />
        </div>
        <div className="countdownContainer rounded p-4">
          <h4>Saison 2020/2021</h4>
          <h5 className="lead">Hinten von links nach rechts:</h5>
          <p className="">
            Markus Schumann, Daniel Piehl, Elias Just, Nico Balschun, Luca Jena,
            Quentin Bernstein, Christopher Pauli, Jonas Höntsch, Andrè Barth
          </p>
          <h5 className="lead">Vorn von links nach rechts:</h5>
          <p>
            Ingo Grajek, Heiko Seifert, Hartmut Friedrich, Lars Hendrischke,
            Christian Gebert, Leon Gottschild, Patrick Fuhrmann, Christopher
            Scholz, Manuel Lages, Ole Friedrich, Paul Mühlmann, Erik Dobierzin
          </p>
          <h5 className="lead">Vorn von links nach rechts:</h5>
          <p>
            Phillipp Seifert, Claas Schmeißer, Daniel Albert, Etienne Kalkofen,
            Andreas Ludwig, Christian Protz, Tino Lai, Christoph Freyer
          </p>
        </div>

        <ContributionSite team="first" />
        <div id="widget1"></div>
        <script type="text/javascript">
          new fussballdeWidgetAPI().showWidget('widget1',
          '02HRFJV13C000000VUM1DNPHVT26GPRA');
        </script>
        <div className="container">
          <div className="row mb-3">
            <div className="col">
              <PlayerCard
                img={SpielerNico}
                name="Nico Balschun"
                einsätze={this.randomNumbers(30)}
                tore={this.randomNumbers(30)}
                assists={this.randomNumbers(30)}
              />
            </div>
            <div className="col">
              <PlayerCard
                img={SpielerElias}
                name="Elias Just"
                einsätze={this.randomNumbers(10)}
                tore={this.randomNumbers(6)}
                assists={this.randomNumbers(3)}
              />
            </div>
            <div className="col">
              <PlayerCard
                img={SpielerErik}
                name="Erik Dobierzin"
                einsätze={this.randomNumbers(0)}
                tore={this.randomNumbers(0)}
                assists={this.randomNumbers(0)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PlayerCard
                img={SpielerLeon}
                name="Leon Gottschild"
                einsätze={this.randomNumbers(30)}
                tore={this.randomNumbers(20)}
                assists={this.randomNumbers(15)}
              />
            </div>
            <div className="col">
              <PlayerCard
                img={SpielerEtienne}
                name="Etienne Kalkofen"
                einsätze={this.randomNumbers(27)}
                tore="13"
                assists="10"
              />
            </div>
            <div className="col">
              <PlayerCard
                img={SpielerQuentin}
                name="Quentin Bernstein"
                einsätze={this.randomNumbers(3)}
                tore="0"
                assists="0"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstTeam;
