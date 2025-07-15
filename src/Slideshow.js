import React from "react";
import pic1 from "./pictures/erste/Bild4.JPG";
import pic2 from "./pictures/erste/Bild5.JPG";
import pic3 from "./pictures/erste/Bild6.JPG";
import pic4 from "./pictures/erste/Bild10.JPG";
import pic5 from "./pictures/erste/Bild14.JPG";
import pic6 from "./pictures/erste/Bild15.JPG";

class Slideshow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  simulateHover = (elementList) => {
    if (!elementList.some((element) => element.matches(":hover"))) {
      //check if some element gets NOT hovered manually
      elementList[
        this.state.index === 0 ? elementList.length - 1 : this.state.index - 1 //then simulate :hover
      ].classList.remove("slideTileContainerHoverSimulation");

      elementList[this.state.index].classList.add(
        "slideTileContainerHoverSimulation"
      );
      this.setState({
        //index++
        index:
          this.state.index === elementList.length - 1 ? 0 : this.state.index + 1,
      });
    } else {
      //If hovered manually
      
    }
  };

  componentDidMount() {
    let sildeTileContainers = Array.from(
      document.getElementsByClassName("slideTileContainer")
    );
    
      this.timerID = setInterval(() => {
        this.simulateHover(sildeTileContainers);
      }, 3000); //Intervall des Bilderwechsels in ms
    
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    
    return (
      <div id="slideshow">
        <div className="slideTileContainer">
          <img className="slideTile" src={pic1} alt="Image 1" loading="lazy"></img>
          <div className="hero-tile__gradient"></div>
        </div>
        <div className="slideTileContainer">
          <img className="slideTile" src={pic2} alt="Picture 2" loading="lazy"></img>
          <div className="hero-tile__gradient"></div>
        </div>
        <div className="slideTileContainer">
          <img className="slideTile" src={pic3} alt="Picture 3" loading="lazy"></img>
          <div className="hero-tile__gradient"></div>
        </div>
        <div className="slideTileContainer">
          <img className="slideTile" src={pic4} alt="Picture 4" loading="lazy"></img>
          <div className="hero-tile__gradient"></div>
        </div>
        <div className="slideTileContainer">
          <img className="slideTile" src={pic5} alt="Picture 5"></img>
          <div className="hero-tile__gradient"></div>
        </div>
        <div className="slideTileContainer">
          <img className="slideTile" src={pic6} alt="Picture 6"></img>
          <div className="hero-tile__gradient"></div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
