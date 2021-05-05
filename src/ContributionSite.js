import React from "react";
import Contribution from "./Contribution";
import svkTeam from "./pictures/team.jpg";


//TODO: Datenbank verbinden
var contributionOne = {
  imgUrl:svkTeam, 
  headline:"Endlich-erstes Spiel",
  Url:"erstesSpiel",
  longText:`Auf Anfrage der Gäste stimmten wir einer Verlegung auf Samstag zu.
            Leider keine Punkte gegen Aufstiegskandidat aus Nessa.
            Zwar mit einer kämpferisch sehr guten Leistung, aber ohne 5 Stammkräfte musste sich unsere 1.Männermannschaft dem Spitzenreiter des VfB Nessa geschlagen geben.
            Mit Toren durch Schellenberg und zweimal Reimer siegten die Gäste aus Nessa verdient und konnten einen weiteren Schritt Richtung Aufstieg machen. Trotzdem ein großes Lob an die Mannschaft, welche die Partie mit einem hohen läuferischen Aufwand lange offen hielt. Ein besonderer Dank an unsere Wechsler auf der Bank, welche alle bereits im Vorspiel unserer 2. Mannschaft 90 Minuten auf dem Feld standen.
            Für unsere Männer geht es nächsten Samstag im Nachholespiel gegen den TSV Großkorbetha um die vielleicht entscheidenden Punkte im Kampf um den Klassenerhalt.`,
  category:"Spielbetrieb"};

  var contributionTwo = {
    imgUrl:svkTeam, 
    headline:"Endlich-erstes Spiel",
    Url:"erstesSpiel",
    longText:`Auf Anfrage der Gäste stimmten wir einer Verlegung auf Samstag zu.
              Leider keine Punkte gegen Aufstiegskandidat aus Nessa.
              Zwar mit einer kämpferisch sehr guten Leistung, aber ohne 5 Stammkräfte musste sich unsere 1.Männermannschaft dem Spitzenreiter des VfB Nessa geschlagen geben.
              Mit Toren durch Schellenberg und zweimal Reimer siegten die Gäste aus Nessa verdient und konnten einen weiteren Schritt Richtung Aufstieg machen. Trotzdem ein großes Lob an die Mannschaft, welche die Partie mit einem hohen läuferischen Aufwand lange offen hielt. Ein besonderer Dank an unsere Wechsler auf der Bank, welche alle bereits im Vorspiel unserer 2. Mannschaft 90 Minuten auf dem Feld standen.
              Für unsere Männer geht es nächsten Samstag im Nachholespiel gegen den TSV Großkorbetha um die vielleicht entscheidenden Punkte im Kampf um den Klassenerhalt.`,
    category:"Spielbetrieb"};

    var contributionThree = {
      imgUrl:svkTeam, 
      headline:"Endlich-erstes Spiel",
      Url:"erstesSpiel",
      longText:`Auf Anfrage der Gäste stimmten wir einer Verlegung auf Samstag zu.
                Leider keine Punkte gegen Aufstiegskandidat aus Nessa.
                Zwar mit einer kämpferisch sehr guten Leistung, aber ohne 5 Stammkräfte musste sich unsere 1.Männermannschaft dem Spitzenreiter des VfB Nessa geschlagen geben.
                Mit Toren durch Schellenberg und zweimal Reimer siegten die Gäste aus Nessa verdient und konnten einen weiteren Schritt Richtung Aufstieg machen. Trotzdem ein großes Lob an die Mannschaft, welche die Partie mit einem hohen läuferischen Aufwand lange offen hielt. Ein besonderer Dank an unsere Wechsler auf der Bank, welche alle bereits im Vorspiel unserer 2. Mannschaft 90 Minuten auf dem Feld standen.
                Für unsere Männer geht es nächsten Samstag im Nachholespiel gegen den TSV Großkorbetha um die vielleicht entscheidenden Punkte im Kampf um den Klassenerhalt.`,
      category:"Spielbetrieb"};


function ContributionSite(props) {
  return (
    <div>
      <h3 className="text-center">Aktuelle Berichte</h3>
      <div className="gridParent">
        <Contribution
          imgUrl={contributionOne.imgUrl}
          name={contributionOne.headline}
          Url={contributionOne.Url}
          text={contributionOne.longText}
          category={contributionOne.category}
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

export {contributionOne};
export default ContributionSite;