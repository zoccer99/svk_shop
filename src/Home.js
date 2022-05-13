import React from 'react';
import Slideshow from './Slideshow';
import MobileGrid from './MobileGrid';
import Countdown from './Coundown';
import Sponsoren from './Sponsoren'

function Home(props) {
    return (
        <div className="">

            <Slideshow />
            <MobileGrid />
            <div className="d-flex flex-column align-items-center">
                <div className="CounConWrapper">
                    <Countdown date={new Date('May 15,2022 14:00')} heimmannschaft="Großkorbetha" gastmannschaft="SV Kretzschau"/>
                    {/* <ContributionSite /> */}
                    <Sponsoren />
                </div>
            </div>

        </div>
    );
}

export default Home;