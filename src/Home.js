import React, { useState, useEffect, useMemo } from "react";
import Slideshow from "./Slideshow";
import MobileGrid from "./MobileGrid";

import Countdown from "./Coundown";
import ContributionSite from "./Blog/ContributionSite";
import CookieConsent from "react-cookie-consent";

function Home(props) {
  const [nextGame, setNextGame] = useState([undefined, undefined, undefined]);
  const games = useMemo(() => [
    [
      "SV Kretzschau",
      "SG Nessa / Teuchern",
      new Date("August 24, 2025 15:00"),
    ],
    [
      "ESV Herrengosserstedt",
      "SV Kretzschau",
      new Date("August 29, 2025 18:30"),
    ],
    [
      "FSV Grün-Gelb Osterfeld",
      "SV Kretzschau",
      new Date("September 7, 2025 15:00"),
    ],
    [
      "SV Kretzschau",
      "SV Grün-Weiß Langendorf",
      new Date("September 14, 2025 15:00"),
    ],[
      "1. FC Zeitz II",
      "SV Kretzschau",
      new Date("September 21, 2025 14:00"),
    ],
    [
      "SV Kretzschau",
      "FSV Blau-Weiß Borau",
      new Date("September 28, 2025 15:00"),
    ],
    [
      "FC ZWK Nebra",
      "SV Kretzschau",
      new Date("October 5, 2025 14:00"),
    ],
    [
      "SV Kretzschau",
      "SSC Weißenfels III",
      new Date("October 19, 2025 15:00"),
    ],
    [
      "SC Naumburg II",
      "SV Kretzschau",
      new Date("October 26, 2025 14:00"),
    ],
    [
      "SV Kretzschau",
      "VfB Scharnhorst Großgörschen",
      new Date("November 2, 2025 14:00"),
    ],
    [
      "FSV Klosterhäseler",
      "SV Kretzschau",
      new Date("November 7, 2025 19:30"),
    ],
    [
      "SV Kretzschau",
      "SG Blau-Weiß Bad Kösen",
      new Date("November 30, 2025 13:00"),
    ],
    [
      "SV Spora",
      "SV Kretzschau",
      new Date("November 22, 2025 13:00"),
    ],
    [
      "Baumersrodaer SV",
      "SV Kretzschau",
      new Date("December 6, 2025 13:00"),
    ],[
      "SG Nessa / Teuchern",
      "SV Kretzschau",
      new Date("March 1, 2026 14:00"),
    ],
    [
      "SV Kretzschau",
      "ESV Herrengosserstedt",
      new Date("March 8, 2026 15:00"),
    ],
    [
      "SV Grün-Weiß Langendorf",
      "SV Kretzschau",
      new Date("March 15, 2026 14:00"),
    ],
    [
      "SV Kretzschau",
      "1. FC Zeitz II",
      new Date("March 22, 2026 15:00"),
    ],
    [
      "FSV Blau-Weiß Borau",
      "SV Kretzschau",
      new Date("March 29, 2026 14:00"),
    ],
    [
      "SV Kretzschau",
      "FC ZWK Nebra",
      new Date("April 12, 2026 15:00"),
    ],
    [
      "SSC Weißenfels III",
      "SV Kretzschau",
      new Date("April 19, 2026 15:00"),
    ],
    [
      "SV Kretzschau",
      "SC Naumburg II",
      new Date("April 26, 2026 15:00"),
    ],
    [
      "VfB Scharnhorst Großgörschen",
      "SV Kretzschau",
      new Date("May 1, 2026 19:00"),
    ],
    [
      "SV Kretzschau",
      "FSV Klosterhäseler",
      new Date("May 17, 2026 15:00"),
    ],[
      "SV Kretzschau",
      "SV Spora",
      new Date("May 31, 2026 15:00"),
    ],
    [
      "SG Blau-Weiß Bad Kösen",
      "SV Kretzschau",
      new Date("June 7, 2026 15:00"),
    ],
    [
      "SV Kretzschau",
      "Baumersrodaer SV",
      new Date("June 14, 2026 14:00"),
    ],
  ], []);
  useEffect(() => {
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
  }, [games]);

  return (
    <>
      <Slideshow />
      <MobileGrid />
      <div className="d-flex flex-column align-items-center">
        <div className="CounConWrapper">
          {nextGame !== "undefined" ? (
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
