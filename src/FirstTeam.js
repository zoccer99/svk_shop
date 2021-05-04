import React from "react";
import ContributionSite from "./ContributionSite";
import firstTeam from "./pictures/firstTeam.jpg";

function FirstTeam(props) {
  return (
    <div className="container-fluid">
        <div class="mb-3 mx-2 text-center d-flex flex-column">
          <img
            className="img-fluid img-thumbnail my-3"
            src={firstTeam}
            alt="Erste Mannschaft"
          ></img>
          <div className="Player mx-5">
            <h2 className="text-center font-weight-bold">
              Wir bedanken uns für das Trikotsponsoring bei Firma Rothermann
              Heizungs- und Sanitärtechnik.
            </h2>
            <h3 className="text-center font-italic">Hinten von links nach rechts:</h3>
            <h5 className="text-center font-weight-light"> 
              Lars Hendrischke (Betreuer), Ingo Grajek (Präsi), Jens Rothermann
              (Sponsor), Nico Balschun, Christian Koschik, Quentin Bernstein,
              Udo- Thomas Schirdewahn, Luca Jena, Elias Just, Manuel Lages,
              Christoph Scholz (SF), Etienne- Noel Kalkofen, Christoph Freyer,
              Andre Barth, Erik Dobierzin (Trainer)
            </h5>
            <h3 className="text-center font-italic">Vorn von links nach rechts:</h3>
            <h5 className="text-center font-weight-light">
              Matthias Scholle, Philipp Seifert, Leon Gottschild, Markus
              Schumann, Christopher Pauli, Andreas Ludwig, Julius- Niclas
              Pacholski, Philipp Schmidt, Daniel Piehl, Marc- Andre Preuß, Nils
              Jaeger, Christian Gebert (Betreuer)
              <br />
            </h5>
            <h3 className="text-center font-italic">Fehlend:</h3>
            <h5 className="text-center font-weight-light">
              Florian Seidemann, Robert Tischendorf, Matthias Neumann
              <br />
            </h5>
          </div>
        </div>
        <svg className="TransitionSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="0.4" d="M0,192L21.8,202.7C43.6,213,87,235,131,234.7C174.5,235,218,213,262,218.7C305.5,224,349,256,393,245.3C436.4,235,480,181,524,165.3C567.3,149,611,171,655,170.7C698.2,171,742,149,785,165.3C829.1,181,873,235,916,245.3C960,256,1004,224,1047,202.7C1090.9,181,1135,171,1178,186.7C1221.8,203,1265,245,1309,240C1352.7,235,1396,181,1418,154.7L1440,128L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"></path></svg>      <ContributionSite />
    </div>
  );
}

export default FirstTeam;
