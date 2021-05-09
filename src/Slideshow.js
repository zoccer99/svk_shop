import { Carousel, CarouselItem } from "react-bootstrap";
import React from "react";
import svkVerein from "./pictures/svkVerein.jpg";
import svkIngame from "./pictures/ingame_1.jpeg";
import svkTeam from "./pictures/team.jpg";

function Slideshow(props) {
  return (
    <div id="slideshow">
      <a className="slideTileContainer">
        <img className="slideTile" src={svkVerein}></img>
      <div className="hero-tile__gradient"></div>
      </a>
      <a className="slideTileContainer">
        <img className="slideTile" src={svkIngame}></img>
      <div className="hero-tile__gradient"></div>
      </a>
      <a className="slideTileContainer">
        <img className="slideTile" src={svkTeam}></img>
      <div className="hero-tile__gradient"></div>
      </a>
    </div>
  );
}

export default Slideshow;
