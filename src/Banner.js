import React from 'react';
import svkLogo from './pictures/svkLogo.jpeg';

function Banner(props) {
    return (
            <div className="siteLogo">
                <img src={svkLogo} className="siteImage"></img>
                <h1 className="px-3 siteCaption ">Willkommen der HomePage des SVK</h1>
            </div>
    );
}

export default Banner;