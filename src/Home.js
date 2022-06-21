import React from 'react';
import Slideshow from './Slideshow';
import MobileGrid from './MobileGrid';
import Countdown from './Coundown';
import Sponsoren from './Sponsoren'

function Home(props) {
    return (
        <>
            <Slideshow />
            <MobileGrid />
            <div className="d-flex flex-column align-items-center ">
                <div className="CounConWrapper">
                    {/* <Countdown date={new Date('June 12,2022 14:00')} heimmannschaft="SG Lossa" gastmannschaft="SV Kretzschau"/> */}
                    {/* <ContributionSite /> */}
                    <div style={{height:"100px"}}></div>
                    <Sponsoren />
                </div>
            </div>

        </>
    );
}

export default Home;