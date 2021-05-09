import React from 'react';
import Banner from './Banner';
import Navigation from './Navigation';

function MainBanner(props) {
    return (
            <div className="MainBanner_Wrapper" >
                <Navigation />
                <Banner />
                <div className="placeholder primary-color">a</div>
                <div className="BannerLine"></div>
            </div>
    );
}

export default MainBanner;