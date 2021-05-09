import React from 'react';
import svkLogo from './pictures/svkLogo.svg';

function Banner(props) {
    return (
            <div className="siteLogo  primary-color ">
                <img src={svkLogo} className="siteImage"></img>
                <h1 className="siteCaption ">SV Kretzschau</h1>
            </div>
    );
}

export default Banner;