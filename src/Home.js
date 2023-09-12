import React from "react";
import Slideshow from "./Slideshow";
import MobileGrid from "./MobileGrid";
import Sponsoren from "./Sponsoren";
import Countdown from "./Coundown";
import ContributionSite from "./Blog/ContributionSite";
import CookieConsent from "react-cookie-consent";

function Home(props) {
  const games = [
    ["SG Langendorf/Weißenfels", "SV Kretzschau", new Date("September 15,2023 18:00")],
    ["SV Kretzschau", "FC ZWK Nebra", new Date("September 24,2023 15:00")],
    ["SV Blau-Weiß Grana", "SV Kretzschau", new Date("October 01,2023 15:00")],
    ["SV Kretzschau", "SV Eintracht Profen", new Date("October 03,2023 12:00")],
    ["SV Kretzschau", "SG Großgrimma/Hohenmölsen", new Date("October 08,2023 15:00")],
  ];

  
   const filterGamesForDate = (games) => {
    const today = new Date();
    let diffs = {};
  
    for (let i in games) {
      let diff = games[i][2] - today;
      if (diff > 0) {
        diffs[games[i]] = diff;
      }
    }
    let values = Object.values(diffs);
    let min = Math.min(...values);
    let game = Object.keys(diffs).find((key) => diffs[key] === min);
    try {

      game = game.split(","); //string to array
      game[2] = new Date(game[2]);
      return game; // [heim, gast, zeit]
    }
    catch {
      return undefined;
    }
  };

  let nextGame = filterGamesForDate(games);
  return (
    <>
      <Slideshow />
            <MobileGrid />
            <div className="d-flex flex-column align-items-center">
                <div className="CounConWrapper">
                    <Countdown date={new Date(nextGame[2])} heimmannschaft={nextGame[0]} gastmannschaft={nextGame[1]}/>
                    <ContributionSite />
                    <Sponsoren />
                </div>
            </div>
            <CookieConsent>This website uses cookies to enhance the user experience.</CookieConsent>
    </>
  );
}

export default Home;
