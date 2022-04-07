import React from 'react';
import Slideshow from './Slideshow';
import MobileGrid from './MobileGrid';
import Countdown from './Coundown';
import ContributionSite from './ContributionSite';
import Sponsoren from './Sponsoren'

function Home(props) {
    return (
        <div className="">

            <Slideshow />
            <MobileGrid />
            <div className="d-flex flex-column align-items-center">
                <div className="CounConWrapper">
                    <Countdown date={new Date('April 10,2022 14:00')} heimmannschaft="SV Kretzschau" gastmannschaft="SV Profen"/>
                    {/* <ContributionSite /> */}
                    <Sponsoren />
                </div>
            </div>

        </div>
    );
}

export default Home;