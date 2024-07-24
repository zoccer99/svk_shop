import React, { useState } from "react";
import { useEffect } from "react";
import Slideshow from "./Slideshow";
import MobileGrid from "./MobileGrid";
import Sponsoren from "./Sponsoren";
import Countdown from "./Coundown";
import ContributionSite from "./Blog/ContributionSite";
import CookieConsent from "react-cookie-consent";

function Home(props) {
  const [nextGame, setNextGame] = useState([undefined, undefined, undefined]);
  const games = [
    ["SV 1893 Kretzschau", "FC Halle-Neustadt", new Date("July 28, 2024 14:30")],
    ["SV 1893 Kretzschau", "Droyßiger SG", new Date("July 30, 2024 18:45")],
    ["SV 1893 Kretzschau", "SV Groitzsch 1861 e.V.", new Date("August 02, 2024 18:30")],
    ["SV 1893 Kretzschau", "SC Naumburg II", new Date("August 11, 2024 15:00")],
    ["SV 1893 Kretzschau", "VfB Scharnhorst Großgörschen", new Date("August 18, 2024 15:00")],
    ["1. FC Zeitz II", "SV 1893 Kretzschau", new Date("August 25, 2024 15:00")],
    ["SV 1893 Kretzschau", "SV Spora", new Date("August 30, 2024 18:00")]
];

  useEffect(()=> {
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
      } catch {
        return "undefined";
      }
    };
    setNextGame(filterGamesForDate(games));
  }, [])

  


  return (
    <>
      <Slideshow />
      <MobileGrid />
      <div className="d-flex flex-column align-items-center">
        <div className="CounConWrapper">
          {
          (nextGame !== "undefined") ? (
            <Countdown
              date={new Date(nextGame[2])}
              heimmannschaft={nextGame[0]}
              gastmannschaft={nextGame[1]}
            />
          ) : (
            <></>
          )}

          <ContributionSite />
          <Sponsoren />
        </div>
      </div>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}

export default Home;
