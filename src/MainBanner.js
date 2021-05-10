import React from 'react';
import Banner from './Banner';
import SocialTile from './SocialTile';
import Navigation from './Navigation';

function MainBanner(props) {
    return (
            <div className="MainBanner_Wrapper" >
                <Navigation />
                <Banner />
                <SocialTile />
                <div className="BannerLine"></div>
            </div>
    );
}

export default MainBanner;