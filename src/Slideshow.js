import { Carousel, CarouselItem } from "react-bootstrap";
import React from "react";
import svkVerein from "./pictures/svkVerein.jpg";
import svkIngame from "./pictures/ingame_1.jpeg";
import svkTeam from "./pictures/team.jpg";

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
    console.log(this.state.index)
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
        <a className="slideTileContainer">
          <img className="slideTile" src={svkTeam}></img>
          <div className="hero-tile__gradient"></div>
        </a>
        <a className="slideTileContainer">
          <img className="slideTile" src={svkTeam}></img>
          <div className="hero-tile__gradient"></div>
        </a>
        <a className="slideTileContainer">
          <img className="slideTile" src={svkTeam}></img>
          <div className="hero-tile__gradient"></div>
        </a>
      </div>
    );
  }
}

export default Slideshow;
