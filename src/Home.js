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
    ["SV Kretzschau", "VfB Nessa", new Date("February 18, 2024 14:00")],
["SV Eintracht Profen", "SV Kretzschau", new Date("February 25, 2024 14:00")],
["TSV 1893 Großkorbetha", "TSV 1893 Großkorbetha", new Date("March 03, 2024 15:00")],
["SV Baumersroda", "SV Kretzschau", new Date("March 10, 2024 14:00")],
["Grün-Weiß Langendorf", "Grün-Weiß Langendorf", new Date("March 17, 2024 15:00")],
["1. FC 1924 Nebra", "SV Kretzschau", new Date("March 24, 2024 14:00")],
["1. FC Zeitz II", "SV Kretzschau", new Date("March 28, 2024 19:00")],
["SV Blau-Weiß Grana", "SV Kretzschau", new Date("April 07, 2024 15:00")],
["SV Großgrimma", "SV Kretzschau", new Date("April 12, 2024 19:00")],
["SV Spora", "SV Kretzschau", new Date("April 21, 2024 15:00")],
["VfB Scharnhorst Großgörschen", "SV Kretzschau", new Date("April 28, 2024 15:00")],
["SV Fortuna Bad Bibra", "SV Kretzschau", new Date("May 05, 2024 14:00")],
["FSV Grün-Gelb Osterfeld", "SV Kretzschau", new Date("May 12, 2024 15:00")],
["VfB Nessa", "SV Kretzschau", new Date("June 02, 2024 14:00")],
["1. FC Zeitz II", "SV Kretzschau", new Date("June 09, 2024 15:00")]

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
        return undefined;
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
          (nextGame !== undefined) ? (
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
