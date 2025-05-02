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
    ["FC ZWK Nebra", "SV 1893 Kretzschau", new Date("April 6, 2025 14:00")],
    ["SV 1893 Kretzschau", "SG Nessa/Teuchern", new Date("April 13, 2025 15:00")],
    ["SV 1893 Kretzschau", "TSV Großkorbetha", new Date("April 27, 2025 15:00")],
    ["SV 1893 Kretzschau", "FSV Klosterhäseler", new Date("May 4, 2025 17:00")],
    ["SpG Lützen/Meuchen", "SV 1893 Kretzschau", new Date("May 11, 2025 15:00")],
    ["SV 1893 Kretzschau", "SG Blau-Weiß Bad Kösen", new Date("May 18, 2025 15:00")],
    ["SG Langendorf/WFV", "SV 1893 Kretzschau", new Date("May 25, 2025 15:00")],
    ["VfB Scharnhorst Großgörschen", "SV 1893 Kretzschau", new Date("June 1, 2025 14:00")],
    ["SV 1893 Kretzschau", "ESV Herrengosserstedt", new Date("June 15, 2025 14:00")]
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
        </div>
      </div>
      <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </>
  );
}

export default Home;
