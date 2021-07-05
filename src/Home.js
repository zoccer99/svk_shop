import React from 'react';
import Slideshow from './Slideshow';
import MobileGrid from './MobileGrid';
import Spring from './Spring';

function Home(props) {
    return (
        <div>
            <Slideshow />
            <MobileGrid />           
            {/* desktop */}
        </div>
    );
}

export default Home;