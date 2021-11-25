import React, { Component } from 'react';
import Nico from "./pictures/nico.jpg";
import BlogEntry from "./BlogEntry.js";

class FullContribution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstbackgroundImg: `url("localhost:3000}/${this.props.firstImgUrl}")`,
            secondBackgroundImg: `url("../pictures/${this.props.secondImgUrl}")`,
            smallImage: ''
        }

    }

    componentDidMount() {

        console.log(this.state)
        console.log(this.props)
    }
    render() {

        return (
            <div className="fullContributionWrapper">
                <div className="fixed-bg bg-1" id="bg-1">
                    <h1 className="main-text">{this.props.headline}</h1>
                    <p className="sub-text"><em>{this.props.tailline}</em></p>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <BlogEntry headline={this.props.headline} text ={this.props.text} />
                </div>

               
            </div>
        );
    }
}


export default FullContribution;