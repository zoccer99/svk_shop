import { Carousel, CarouselItem } from 'react-bootstrap';
import React from 'react';
import svkVerein from './pictures/svkVerein.jpg';
import svkIngame from './pictures/ingame_1.jpeg';
import svkTeam from './pictures/team.jpg';


function Slideshow(props) {
    return (
        <div>
            <Carousel className="mx-2 my-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImage"
                        src={svkVerein}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImage"
                        src={svkIngame}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImage"
                        src={svkTeam}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slideshow;