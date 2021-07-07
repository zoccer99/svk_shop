import React from "react";
import Contribution from "./Contribution";
import svkTeam from "./pictures/team.jpg";

//TODO: Datenbank verbinden
var contributionOne = {
  teamClass:'ersteMannschaft',
  imgUrl: svkTeam,
  headline: "Endlich-erstes Spiel",
  Url: "erstesSpiel",
  longText: `Auf Anfrage der Gäste stimmten wir einer Verlegung auf Samstag zu.
            Leider keine Punkte gegen Aufstiegskandidat aus Nessa.
            Zwar mit einer kämpferisch sehr guten Leistung, aber ohne 5 Stammkräfte musste sich unsere 1.Männermannschaft dem Spitzenreiter des VfB Nessa geschlagen geben.
            Mit Toren durch Schellenberg und zweimal Reimer siegten die Gäste aus Nessa verdient und konnten einen weiteren Schritt Richtung Aufstieg machen. Trotzdem ein großes Lob an die Mannschaft, welche die Partie mit einem hohen läuferischen Aufwand lange offen hielt. Ein besonderer Dank an unsere Wechsler auf der Bank, welche alle bereits im Vorspiel unserer 2. Mannschaft 90 Minuten auf dem Feld standen.
            Für unsere Männer geht es nächsten Samstag im Nachholespiel gegen den TSV Großkorbetha um die vielleicht entscheidenden Punkte im Kampf um den Klassenerhalt.`,
  category: "Spielbetrieb",
};

var contributionTwo = {
  teamClass:'ersteMannschaft',
  imgUrl: svkTeam,
  headline: "zweites Spiel",
  Url: "drittesSpiel",
  longText: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,`,
  category: "Spielbetrieb",
};

var contributionThree = {
  teamClass:'ersteMannschaft',
  imgUrl: svkTeam,
  headline: "drittes Spiel",
  Url: "drittesSpiel",
  longText: `Ein Projekt startet und doch es gibt noch keinen Text, allerdings sollte das Layout schon bald präsentiert werden ... was tun?

  Damit das Projekt gleich starten kann benutze einfach etwas Lorem ipsum; Blind-, Füll-, Dummy-, Nachahmungs-, Platzhaltertext.
  
  Generiere einfach soviel Lorem Ipsum Text wie du brauchst. Kopiere und füge ihn in dein Layout als vorübergehenden Platzhalter ein und schon sieht das Projekt ein Stückchen vollständiger aus. Viel Spaß dabei.`,
  category: "Spielbetrieb",
};

function ContributionSite(props) {
  return (
    <div>
      <h3 className="text-center">Aktuelle Berichte</h3>
      <div className="gridParent">
        <Contribution
          teamClass={contributionOne.teamClass}
          imgUrl={contributionOne.imgUrl}
          name={contributionOne.headline}
          Url={contributionOne.Url}
          text={contributionOne.longText}
          category={contributionOne.category}
          className="gridItem1"
        />
        <Contribution
        teamClass={contributionTwo.teamClass}
          imgUrl={contributionTwo.imgUrl}
          name={contributionTwo.headline}
          Url={contributionTwo.Url}
          text={contributionTwo.longText}
          category={contributionTwo.category}
          className="gridItem2"
        />
        <Contribution
        teamClass={contributionThree.teamClass}
          imgUrl={contributionThree.imgUrl}
          name={contributionThree.headline}
          Url={contributionThree.Url}
          text={contributionThree.longText}
          category={contributionThree.category}
          className="gridItem3"
        />
      </div>
    </div>
  );
}

export { contributionOne };
export default ContributionSite;
