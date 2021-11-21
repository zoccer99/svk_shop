import React from 'react';
import Slideshow from './Slideshow';
import MobileGrid from './MobileGrid';
import Countdown from './Coundown';
import ContributionSite from './ContributionSite';

function Home(props) {
    return (
        <div className="">

            <Slideshow />
            <MobileGrid />
            <div className="d-flex flex-column align-items-center">
                <div className="CounConWrapper">
                    <Countdown date={new Date('December 14,2021 14:00')} />
                    <ContributionSite />
                </div>
            </div>

        </div>
    );
}

export default Home;