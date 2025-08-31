import React, { useState, useEffect, useMemo } from "react";
import Slideshow from "./Slideshow";
import MobileGrid from "./MobileGrid";
import ImageSlideshow from "./components/ImageSlideshow"

import Countdown from "./Coundown";
import ContributionSite from "./Blog/ContributionSite";
import CookieConsent from "react-cookie-consent";

function Home(props) {
  const [nextGame, setNextGame] = useState([undefined, undefined, undefined]);
  const games = useMemo(() => [
    [
      "SG Pölzig/Heuckewalde",
      "SV 1893 Kretzschau",
      new Date("July 19, 2025 15:00"),
    ],
    [
      "SV 1893 Kretzschau",
      "BSG Wismut Gera II",
      new Date("July 25, 2025 18:30"),
    ],
    [
      "Eintracht Theißen",
      "SV 1893 Kretzschau",
      new Date("July 27, 2025 14:30"),
    ],
    ["SV 1893 Kretzschau", "OTG Gera", new Date("August 3, 2025 15:00")],
    [
      "SV 1893 Kretzschau",
      "SG Reichardtswerben",
      new Date("August 9, 2025 15:00"),
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
