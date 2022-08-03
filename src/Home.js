import React from 'react';
import Slideshow from './Slideshow';
import MobileGrid from './MobileGrid';
import Sponsoren from './Sponsoren';
import Countdown from './Coundown';
import ContributionSite from './Blog/ContributionSite';

function Home(props) {
    return (
        <>
            <Slideshow />
            <MobileGrid />
            <div className="d-flex flex-column align-items-center ">
                <div className="CounConWrapper">
                    <Countdown date={new Date('August 8,2022 15:00')} heimmannschaft="SV Kretzschau" gastmannschaft="Wacker Wengelsdorf"/>
                    <ContributionSite />
                    <div style={{height:"100px"}}></div>
                    <Sponsoren />
                </div>
            </div>

        </>
    );
}

export default Home;