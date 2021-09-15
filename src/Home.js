import React from 'react';
import Slideshow from './Slideshow';
import MobileGrid from './MobileGrid';
import Countdown from './Coundown';
import ContributionSite from './ContributionSite';

function Home(props) {
    return (
        <div>
            <Slideshow />
            <MobileGrid />  
            <Countdown date={new Date('September 19,2021 15:30')}/>      
            {/* nextgame Date*/}
            <ContributionSite />
            
        </div>
    );
}

export default Home;