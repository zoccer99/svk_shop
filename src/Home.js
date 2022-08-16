import React from 'react';
import Slideshow from './Slideshow';
import MobileGrid from './MobileGrid';
import Sponsoren from './Sponsoren';
import Countdown from './Coundown';
import ContributionSite from './Blog/ContributionSite';

function Home(props) {
    const games = [
        ["SV Kretzschau", "TSV Tröglitz", new Date("August 21,2022 15:00")],
        ["FSV Osterfeld", "SV Kretzschau", new Date("August 28,2022 15:00")],
        ["SV Kretzschau", "SC Naumburg II", new Date("September 11,2022 15:00")],
        ["SG Langendorf", "SV Kretzschau", new Date("September 18,2022 15:00")],
        ["SV Kretzschau", "SG Großgrimma/Hohenmölsen", new Date("October 02,2022 15:00")],
        ["Baumersroadear SV", "SV Kretzschau", new Date("October 09,2022 15:00")],
        ["SV Kretzschau", "TSV Großkorbetha", new Date("October 16,2022 15:00")],
        ["SV Eintracht Profen", "SV Kretzschau", new Date("October 23,2022 15:00")],
        ["SV Kretzschau", "FC Zeitz II", new Date("October 30,2022 15:00")],
        ["SV Kretzschau", "FC ZWK Nebra", new Date("November 06,2022 15:00")]
      ];

      const filterGamesForDate = (games) => {
        const today = new Date();
        let result = 0
        let prevDiff = Infinity
        for (let i in games) {
            let diff = games[i][2] - today;
            if (diff < prevDiff && diff > 0) {
                result = i;
            }
            prevDiff = diff;

        }
        return games[result];
      }

      let nextGame = filterGamesForDate(games);
   
    return (
        <>
            <Slideshow />
            <MobileGrid />
            <div className="d-flex flex-column align-items-center ">
                <div className="CounConWrapper">
                    <Countdown date={nextGame[2]} heimmannschaft={nextGame[0]} gastmannschaft={nextGame[1]}/>
                    <ContributionSite />
                    <div style={{height:"100px"}}></div>
                    <Sponsoren />
                </div>
            </div>

        </>
    );
}

export default Home;