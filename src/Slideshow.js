import { Carousel, CarouselItem } from "react-bootstrap";
import React from "react";
import svkVerein from "./pictures/svkVerein.jpg";
import svkIngame from "./pictures/ingame_1.jpeg";
import svkTeam from "./pictures/team.jpg";
import pic1 from "./pictures/erste/Bild4.JPG"
import pic2 from "./pictures/erste/Bild5.JPG"
import pic3 from "./pictures/erste/Bild6.JPG"
import pic4 from "./pictures/erste/Bild10.JPG"
import pic5 from "./pictures/erste/Bild14.JPG"
import pic6 from "./pictures/erste/Bild15.JPG"
import pic7 from "./pictures/erste/Bild18.JPG"


class Slideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
  }

  simulateHover = (elementList) => {
 

    elementList.item(this.state.index==0?elementList.length - 1 : this.state.index -1).classList.remove('slideTileContainerHoverSimulation');
   elementList.item(this.state.index).classList.add('slideTileContainerHoverSimulation');
    this.setState({
      index: this.state.index == elementList.length - 1 ? 0 : this.state.index+1,
    })
  };


  componentDidMount() {
    let sildeTileContainers = document.getElementsByClassName('slideTileContainer');
    this.timerID = setInterval(() => {
      this.simulateHover(sildeTileContainers);
    }, 2200);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  render() {

    return (
      <div id="slideshow">
        <a className="slideTileContainer">
          <img className="slideTile" src={pic1}></img>
          <div className="hero-tile__gradient"></div>
        </a>
        <a className="slideTileContainer">
          <img className="slideTile" src={pic2}></img>
          <div className="hero-tile__gradient"></div>
        </a>
        <a className="slideTileContainer">
          <img className="slideTile" src={pic3}></img>
          <div className="hero-tile__gradient"></div>
        </a>
        <a className="slideTileContainer">
          <img className="slideTile" src={pic4}></img>
          <div className="hero-tile__gradient"></div>
        </a>
        <a className="slideTileContainer">
          <img className="slideTile" src={pic5}></img>
          <div className="hero-tile__gradient"></div>
        </a>
        <a className="slideTileContainer">
          <img className="slideTile" src={pic6}></img>
          <div className="hero-tile__gradient"></div>
        </a>
      </div>
    );
  }
}

export default Slideshow;
