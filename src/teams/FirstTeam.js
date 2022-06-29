import React from "react";
import ContributionSite from "../Blog/ContributionSite";
import firstTeam from "../pictures/firstTeam.jpg";
import ModalImage from "react-modal-image";
import PlayerCard from "../PlayerCard";

import gebbi from "../pictures/profiles/gebbi.webp";
import SpielerNico from "../pictures/Spielerprofile/Balschun_Nico.JPG";
import SpielerLeon from "../pictures/Spielerprofile/Gottschild_Leon.JPG";
import SpielerQuentin from "../pictures/Spielerprofile/Bernstein_Quentin.JPG";
import SpielerEtienne from "../pictures/Spielerprofile/Kalkofen_Etienne.JPG";
import SpielerErik from "../pictures/Spielerprofile/Dobierzin_Erik.JPG";
import SpielerElias from "../pictures/Spielerprofile/Just_Elias.JPG";
import SpielerLudwig from "../pictures/Spielerprofile/Ludwig_Andreas.JPG";
import SpielerProtz from "../pictures/Spielerprofile/Protz_Christian.JPG";
import SpielerBarth from "../pictures/Spielerprofile/Barth_Andre.JPG";
import SpielerFriedrich from "../pictures/Spielerprofile/Friedrich_Ole.JPG";
import SpielerLages from "../pictures/Spielerprofile/Lages_Manuel.JPG";
import SpielerPauli from "../pictures/Spielerprofile/Pauli_Christopher.JPG";
import SpielerPiehl from "../pictures/Spielerprofile/Piel_Daniel.JPG";
import SpielerSeifert from "../pictures/Spielerprofile/Lages_Manuel.JPG";
import SpielerAlbert from "../pictures/Spielerprofile/Albert_Daniel.JPG";
import SpielerFuhrmann from "../pictures/Spielerprofile/Fuhrmann_Patrick.JPG";
import SpielerLai from "../pictures/Spielerprofile/Lai_Tino.JPG";
import SpielerSchmeißer from "../pictures/Spielerprofile/Schmeißer_Claas.JPG";
import SpielerBalschunTom from "../pictures/Spielerprofile/Balschun_Nico.JPG";
import SpielerScholz from "../pictures/Spielerprofile/Scholz_Christoph.JPG";

const FirstTeam = () => {
  const randomNumbers = (max) => {
    let temp = Math.floor(Math.random() * max);
    return temp;
  };
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
      <script type="text/javascript">
        new fussballdeWidgetAPI().showWidget('widget1',
        '02HRFJV13C000000VUM1DNPHVT26GPRA');
      </script>
      <div className="container ">
        <div className="row mb-5">
          <div className="col-12 col-sm-4 ">
            <PlayerCard
              img={SpielerLudwig}
              name="Andreas Ludwig"
              einsätze={0}
              tore={0}
              assists={0}
            />
          </div>
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerBarth}
              name="Andre Barth"
              einsätze={0}
              tore="0"
              assists="0"
            />
          </div>
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerFriedrich}
              name="Ole Friedrich"
              einsätze={0}
              tore="0"
              assists="0"
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerLages}
              name="Manuel Lages"
              einsätze={0}
              tore={0}
              assists={0}
            />
          </div>
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerPauli}
              name="Christopher Pauli"
              einsätze={0}
              tore="0"
              assists="0"
            />
          </div>
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerPiehl}
              name="Daniel Piehl"
              einsätze={0}
              tore="0"
              assists="0"
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerProtz}
              name="Christian Protz"
              einsätze={0}
              tore={0}
              assists={0}
            />
          </div>
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerSeifert}
              name="Phillipp Seifert"
              einsätze={0}
              tore="0"
              assists="0"
            />
          </div>
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerFuhrmann}
              name="Patrick Fuhrmann"
              einsätze={0}
              tore={0}
              assists={0}
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col">
            <PlayerCard
              img={SpielerNico}
              name="Nico Balschun"
              einsätze={randomNumbers(30)}
              tore={randomNumbers(30)}
              assists={randomNumbers(30)}
            />
          </div>
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerElias}
              name="Elias Just"
              einsätze={randomNumbers(10)}
              tore={randomNumbers(6)}
              assists={randomNumbers(3)}
            />
          </div>

          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerErik}
              name="Erik Dobierzin"
              einsätze={randomNumbers(0)}
              tore={randomNumbers(0)}
              assists={randomNumbers(0)}
              />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerLeon}
              name="Leon Gottschild"
              einsätze={randomNumbers(30)}
              tore={randomNumbers(20)}
              assists={randomNumbers(15)}
            />
          </div>
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerEtienne}
              name="Etienne Kalkofen"
              einsätze={randomNumbers(27)}
              tore="13"
              assists="10"
            />
          </div>
          <div className="col-12 col-sm-4">
            <PlayerCard
              img={SpielerSchmeißer}
              name="Claas Schmeißer"
              einsätze={0}
              tore="0"
              assists="0"
            />
          </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-sm-4">
              <PlayerCard
                img={SpielerAlbert}
                name="Daniel Albert"
                einsätze={0}
                tore="0"
                assists="0"
              />
            </div>
            <div className="col-12 col-sm-4">
              <PlayerCard
                img={SpielerBalschunTom}
                name="Tom Balschun"
                einsätze={0}
                tore={0}
                assists={0}
              />
            </div>

            <div className="col-12 col-sm-4">
              <PlayerCard
                img={SpielerLai}
                name="Tino Lai"
                einsätze={0}
                tore="0"
                assists="0"
              />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 col-sm-4">
              <PlayerCard
                img={SpielerScholz}
                name="Christopher Scholz"
                einsätze={0}
                tore="0"
                assists="0"
              />
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default FirstTeam;
