import React, { useEffect, useState } from "react";
import ContributionSite from "../Blog/ContributionSite";
import firstTeam25 from "../pictures/firstTeam25.jpeg";
import ModalImage from "react-modal-image";
import PlayerCardFlip from "../PlayerCardFlip";

import SpielerNico from "../pictures/Spielerprofile/Balschun_Nico.JPG";
import SpielerLeon from "../pictures/Spielerprofile/Gottschild_Leon.JPG";
import SpielerEtienne from "../pictures/Spielerprofile/Kalkofen_Etienne.JPG";
import SpielerErik from "../pictures/Spielerprofile/Dobierzin_Erik.JPG";
import SpielerElias from "../pictures/Spielerprofile/Just_Elias.JPG";
import SpielerLudwig from "../pictures/Spielerprofile/Ludwig_Andreas.JPG";
import SpielerProtz from "../pictures/Spielerprofile/Protz_Christian.JPG";
import SpielerBarth from "../pictures/Spielerprofile/Barth_Andre.JPG";
import SpielerFriedrich from "../pictures/Spielerprofile/Friedrich_Ole.JPG";
import SpielerPauli from "../pictures/Spielerprofile/Pauli_Christopher.JPG";
import SpielerFuhrmann from "../pictures/Spielerprofile/Fuhrmann_Patrick.JPG";
import SpielerLai from "../pictures/Spielerprofile/Lai_Tino.JPG";
import SpielerSchmeißer from "../pictures/Spielerprofile/Schmeißer_Claas.JPG";
import SpielerAlbert from "../pictures/Spielerprofile/Albert_Daniel.JPG";
import SpielerScholz from "../pictures/Spielerprofile/Scholz_Christoph.JPG";
import SpielerFreyer from "../pictures/Spielerprofile/Freyer_Christoph.JPG";
import SpielerBeier from "../pictures/Spielerprofile/Beier_Niklas.JPG";
import SpielerBorrmann from "../pictures/Spielerprofile/Borrmann_Samuel.JPG";
import SpielerIrl from "../pictures/Spielerprofile/Irl_Andre.JPG";
import SpielerTom from "../pictures/Spielerprofile/Balschun_Tom.JPG";
import SpielerKrohne from "../pictures/Spielerprofile/Krohne_Sebastian.JPG";
import SpielerJena from "../pictures/Spielerprofile/Jena_Luca.JPG";
import SpielerSeifertPhillip from "../pictures/Spielerprofile/Seifert_Phillip.JPG";
import SpielerWeißenborn from "../pictures/Spielerprofile/Weißenborn_Niclas.JPG";
import SpielerPohle from "../pictures/Spielerprofile/nick_pohle.webp";

import CoachErik from "../pictures/staff/ErikDobierzin.png";
import CoachMatthias from "../pictures/staff/MatthiasBalschun.png";
import CoachIngo from "../pictures/staff/IngoGrajek.png";
import CoachJürgen from "../pictures/staff/JürgenMühlmann.png";
import CoachChristian from "../pictures/staff/ChristianGebert.png";

import noPicture from "../pictures/Spielerprofile/noAccount.jpg";
import StaffCard from "../StaffCard";

const FirstTeam = () => {
  const [players, setPlayers] = useState([]);

  const fetchStats = async () => {
    const players = await fetch(
      `${process.env.REACT_APP_BACKEND_URI}/playerStats`
    );
    if (!players.ok) throw new Error("Fehler beim Laden");

    const contentType = players.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Antwort ist kein JSON!");
    }
    const payload = await players.json();
    return payload;
  };

  const findPlayerByName = (arr, playerName) => {
    const player = arr.find((e) => e.name === playerName);
    if (player === undefined) {
      return {
        _id: "630a0fe3f5052a9e51d14acb",
        name: "loading",
        matches: "loading",
        goals: "loading",
        assists: "loading",
      };
    } else {
      return player;
    }
  };

  

  useEffect(() => {
    const asyncFetch = async () => {
      setPlayers(await fetchStats());
    };

    asyncFetch();
  }, []);
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
          small={firstTeam25}
          large={firstTeam25}
          className="img-fluid img-thumbnail my-3 "
          alt="Erste Mannschaft"
        />
      </div>
      <div className="countdownContainer rounded p-4">
        <h4>Saison 2024/2025</h4>
        <h5 className="lead">Hinten von links nach rechts:</h5>
        <p>
          Ingo Grajek, Christian Gebert, Jürgen Mühlmann, Tino Lai, Samuel
          Borrmann, Aaron Beier, Niklas Weißenborn, Nico Balschun, Luca Jena,
          Elias Just, Phillipp Seifert, Manuel Lages, Christopher Scholz, Erik
          Dobierzin, Matthias Balschun
        </p>
        <h5 className="lead">Vorn von links nach rechts:</h5>
        <p>
          Etienne Kalkofen, Nick Pohle, Patrick Fuhrmann, Daniel Albert, Andreas
          Ludwig, Christian Protz, Ole Friedrich, Leon Gottschild, Christoph
          Freyer
        </p>
      </div>

      <ContributionSite team="first" />
      <h2 className="text-center mt-4 pinch" style={{ color: "#251F47" }}>
        Spielerprofile
      </h2>
      <div className="container ">
        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex  flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerLudwig}
              player={findPlayerByName(players, "Andreas Ludwig")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex  flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerKrohne}
              name="Sebastian Krohne"
              player={findPlayerByName(players, "Sebastian Krohne")}
            />
          </div>

          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerBarth}
              player={findPlayerByName(players, "Andre Barth")}
            />
          </div>
        </div>

        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerJena}
              name="Luca Jena"
              player={findPlayerByName(players, "Luca Jena")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex  flex-column align-items-center ">
            <PlayerCardFlip
              img={SpielerFriedrich}
              name="Ole Friedrich"
              player={findPlayerByName(players, "Ole Friedrich")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerProtz}
              name="Christian Protz"
              player={findPlayerByName(players, "Christian Protz")}
            />
          </div>
        </div>

        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerFreyer}
              name="Christoph Freyer"
              player={findPlayerByName(players, "Christoph Freyer")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerPauli}
              name="Christopher Pauli"
              player={findPlayerByName(players, "Christopher Pauli")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerProtz}
              name="Christian Protz"
              player={findPlayerByName(players, "Christian Protz")}
            />
          </div>
        </div>
        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerBeier}
              name="Niklas Beier"
              player={findPlayerByName(players, "Niklas Beier")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerSeifertPhillip}
              name="Phillipp Seifert"
              player={findPlayerByName(players, "Phillipp Seifert")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerFuhrmann}
              name="Patrick Fuhrmann"
              player={findPlayerByName(players, "Patrick Fuhrmann")}
            />
          </div>
        </div>
        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerNico}
              name="Nico Balschun"
              player={findPlayerByName(players, "Nico Balschun")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerElias}
              name="Elias Just"
              player={findPlayerByName(players, "Elias Just")}
            />
          </div>

          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerErik}
              name="Erik Dobierzin"
              player={findPlayerByName(players, "Erik Dobierzin")}
            />
          </div>
        </div>
        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerLeon}
              player={findPlayerByName(players, "Leon Gottschild")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerEtienne}
              player={findPlayerByName(players, "Etienne Kalkofen")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerSchmeißer}
              player={findPlayerByName(players, "Claas Schmeißer")}
            />
          </div>
        </div>
        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerAlbert}
              name="Daniel Albert"
              player={findPlayerByName(players, "Daniel Albert")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerTom}
              name="Tom Balschun"
              player={findPlayerByName(players, "Tom Balschun")}
            />
          </div>

          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerLai}
              name="Tino Lai"
              player={findPlayerByName(players, "Tino Lai")}
            />
          </div>
        </div>
        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerScholz}
              name="Christopher Scholz"
              player={findPlayerByName(players, "Christopher Scholz")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerIrl}
              name="Andre Irl"
              player={findPlayerByName(players, "Andre Irl")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerBorrmann}
              name="Samuel Borrmann"
              player={findPlayerByName(players, "Samuel Borrmann")}
            />
          </div>
        </div>
        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerWeißenborn}
              name="Niclas Weißenborn"
              player={findPlayerByName(players, "Niclas Weißenborn")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={SpielerPohle}
              name="Nick Pohle"
              player={findPlayerByName(players, "Nick Pohle")}
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <PlayerCardFlip
              img={noPicture}
              name="Aaron Beier"
              player={findPlayerByName(players, "Aaron Beier")}
            />
          </div>
        </div>
      </div>
      <h2 className="text-center mt-4 pinch" style={{ color: "#251F47" }}>
        Trainerteam
      </h2>
      <div className="container">
        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <StaffCard
              img={CoachErik}
              name="Erik Dobierzin"
              function="Trainer"
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <StaffCard
              img={CoachMatthias}
              name="Matthias Balschun"
              function="Co-Trainer"
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <StaffCard
              img={CoachChristian}
              name="Christian Gebert"
              function="Teammanager"
            />
          </div>
        </div>
        <div className="row mb-md-5">
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <StaffCard
              img={CoachIngo}
              name="Ingo Grajek"
              function="Präsident"
            />
          </div>
          <div className="col-12 col-sm-4 d-flex flex-column align-items-center">
            <StaffCard
              img={CoachJürgen}
              name="Jürgen Mühlmann"
              function="Betreuer"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default FirstTeam;
