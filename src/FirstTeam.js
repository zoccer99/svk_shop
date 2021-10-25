import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContributionSite from "./ContributionSite";
import firstTeam from "./pictures/firstTeam.jpg";

class FirstTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  handleModal(modal) {
    document.getElementById(modal).style.display='block';
  }

  dishandleModal(modal) {
    this.style.display="none";
  }

  render() {
    return(
   
    <div className="container-fluid firstTeamWrapper">
      <div className="d-flex justify-content-center">
        <img
          className="img-fluid img-thumbnail my-3 myThumbnail"
          src={firstTeam}
          alt="Erste Mannschaft"
          loading="lazy"
          onClick={this.handleModal.bind(this,'modalFirstTeam')}
        ></img>

        <div id="modalFirstTeam" className="w3-modal" onClick="this.style.display='none'">
          <div class="w3-modal-content w3-animate-zoom">
            <img src={firstTeam} style={{width:100+'%'}} />
          </div>
        </div>

      </div>
      <div className="">
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

      <ContributionSite />
    </div>
  );
    }
}



export default FirstTeam;
