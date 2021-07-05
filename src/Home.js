import React from 'react';
import Slideshow from './Slideshow';
import MobileGrid from './MobileGrid';
import Countdown from './Coundown';
import Spring from './Spring';

function Home(props) {
    return (
        <div>
            <Slideshow />
            <MobileGrid />  
            <Countdown date={new Date('July 10,2021 15:00')}/>         
            {/* desktop */}
        </div>
    );
}

export default Home;