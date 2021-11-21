import React from 'react';
import { Link } from "react-router-dom";
import gebbi from "./pictures/profiles/gebbi.webp"

function maxWords(str) {
    var symbols = str.length;
    var previewText = str;
    if (symbols > 100) {
        var previewText = previewText.slice(0, 100);
        previewText = previewText.concat("...");
    }
    return previewText;
}


export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cssClassName: ''
        };
    }

    componentDidMount() {
        if (this.props.teamClass === "Erste Mannschaft") {
            this.setState({
                cssClassName: 'tag-blue',
            }
            )
        }
        else if(this.props.teamClass === "Zweite Mannschaft") {
            this.setState({
                cssClassName: 'tag-brown'
            })
        }

        else if(this.props.teamClass ==='Verein') {
            this.setState({
                cssClassName:'tag-red',
            })
        }

    }
    render() {
        return (
            <div className="containerCard ">
                <div className="card">
                    <Link style={{ textDecoration: "none" }} to={`${this.props.teamClass}/${this.props.titel}`}>
                        <div className="card__header">
                            <img src={this.props.imgUrl} alt="card__image" className="card__image" />
                        </div>
                        <div className="card__body">
                            <span className={`tag ${this.state.cssClassName}`}>{this.props.teamClass}</span>
                            <h4>{this.props.titel}</h4>
                            <p>{maxWords(this.props.text)}</p>
                        </div>
                        <div className="card__footer">
                            <div className="user">
                                <img src={gebbi} alt="user__image" className="user__image" />
                                <div className="user__info">
                                    <h5>{this.props.author}</h5>
                                    <small>{this.props.time}</small>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}



