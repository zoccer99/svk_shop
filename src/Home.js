import React from "react";
import Slideshow from "./Slideshow";
import MobileGrid from "./MobileGrid";
import Sponsoren from "./Sponsoren";
import Countdown from "./Coundown";
import ContributionSite from "./Blog/ContributionSite";
import MyImageGallery from "./Blog/MyImageGallery";

function Home(props) {
  const games = [
    ["SG Burgwerben", "SV Kretzschau", new Date("December 04,2022 14:00")],
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
                    <Countdown date={new Date('June 04,2023 15:00')} heimmannschaft="SV Kretzschau" gastmannschaft="SV Eintracht Profen"/>
                    <ContributionSite />
                    <Sponsoren />
                </div>
            </div>
    </>
  );
}

export default Home;
