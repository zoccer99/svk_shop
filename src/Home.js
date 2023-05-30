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
                    <Countdown date={new Date('June 04,2023 15:00')} heimmannschaft="SV Kretzschau" gastmannschaft="SV Eintracht Profen"/>
                    {/* <ContributionSite /> */}
                    <Sponsoren />
                </div>
            </div>

        </div>
    );
}

export default Home;