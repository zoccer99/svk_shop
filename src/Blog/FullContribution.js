import React, { Component } from "react";
import firstTeam from "../pictures/firstTeam.jpg";
import MyImageGallery from "./MyImageGallery";

class FullContribution extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smallImage: "",
      images: [],
      imageSrc: firstTeam,
    };
  }

  scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  chooseRandom = (imgArr) => {
    if (!Array.isArray(imgArr) || imgArr.length === 0) return;
    const idx = Math.floor(Math.random() * imgArr.length);
    this.setState({ imageSrc: imgArr[idx] });
  };

  importAllImages = (r) => {
    let img = r.keys().map(r);
    this.setState({ images: img }, () => {
      this.chooseRandom(this.state.images); //random Bild wird aus importierten bildern ausgewählt
    });
  };

  componentDidMount() {
    this.scrollToTop();
    this.importAllImages(
      require.context("../pictures/ErsteSpiel", false, /\.(png|jpe?g|svg|JPG)$/)
    );
  }
  render() {
    return (
      <div className="fullContributionWrapper">
        
        <div className="d-flex justify-content-center">
          {this.props.customImages ? 
          <MyImageGallery /> :
          <img
          className="w-lg-75 img-fluid image-frame"
          src={this.state.imageSrc}
          alt="SpielBild"
          ></img>
        }
        </div>
        {/* <div className="fixed-bg bg-1" id="bg-1">
          <h1 className="main-text">{this.props.headline}</h1>
          <p className="sub-text">
            <em>{this.props.tailline}</em>
          </p>
        </div> */}
        <div className="d-flex justify-content-center align-items-center mt-5 ">
          <div className="countdownContainer countdown-container content-section p-4 w-lg-75 mx-2">
            <h2 className="">{this.props.headline}</h2>
            <p dangerouslySetInnerHTML={{__html: this.props.text}}></p>
          </div>
        </div>
      </div>
    );
  }
}

export default FullContribution;
