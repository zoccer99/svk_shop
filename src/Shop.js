import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import Shopitem from './Shopitem';
import svkSticker from './pictures/svkLogo.jpeg';
import { Container, Row, Col } from 'react-bootstrap';

function Shop(props) {
    return <div className="gridParent">

        <Shopitem name="SVK Sticker" text="Der einzig wahre SVK Sticker!" imgUrl={svkSticker} className="gridItem1"/>
        <Shopitem name="SVK Sticker" text="Der einzig wahre SVK Sticker!" imgUrl={svkSticker} className="gridItem2"/>
        <Shopitem name="SVK Sticker" text="Der einzig wahre SVK Sticker!" imgUrl={svkSticker} className="gridItem3"/>


    </div>;
}

export default Shop;