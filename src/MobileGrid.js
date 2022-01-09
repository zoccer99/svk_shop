import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'


import pic1 from "./pictures/erste/Bild10.JPG"
import pic2 from "./pictures/erste/Bild18.JPG"
import pic3 from "./pictures/erste/Bild17.JPG"
import pic4 from "./pictures/erste/Bild20.JPG"

class MobileGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
   
  }


  render() {

    return (
      <Carousel className="MobileGrid" controls={false} interval={2000} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pic4}
            alt="fourth slide"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}
export default MobileGrid;
