import React from "react";
import Contribution from "./Contribution";
import svkTeam from "./pictures/team.jpg";

function ContributionSite(props) {
  return (
    <div>
         <h3 className="text-center">Aktuelle Berichte</h3>
      <div className="gridParent">
        <Contribution
          imgUrl={svkTeam}
          name="Endlich - erstes Spiel"
          Url="erstesSpiel"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
          category="Spielbetrieb"
          className="gridItem1"
        />
        <Contribution
          imgUrl={svkTeam}
          name="Endlich - zweites Spiel"
          text="blblblaldadls"
          category="Spielbetrieb"
          className="gridItem2"
        />
        <Contribution
          imgUrl={svkTeam}
          name="Endlich - drittes Spiel"
          text="blblblaldadls"
          category="Spielbetrieb"
          className="gridItem3"
        />
      </div>
    </div>
  );
}

export default ContributionSite;
