import React from "react";
import { Link } from "react-router-dom";
import gebbi from "../pictures/profiles/gebbi.webp";
import scholle from "../pictures/profiles/Scholle.jpg";

function maxWords(str) {
  if (str != null) {
    var symbols = str.length;
    var previewText = str;
    if (symbols > 100) {
      var previewText = previewText.slice(0, 100);
      previewText = previewText.concat("...");
    }
    return previewText;
  }
}

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cssClassName: "",
    };
  }

  changeAuthorPic = (str) => {
    if (str === "Christian Gebert") {
      return gebbi;
    }
    else if (str === "Matthias Scholle") {
      return scholle;
    }
  };

  changeColor = (str) => {
    //Ändern der CSS Klasse für Farbwechsel je nach Kategorie auf der Card
    if (str == "Erste Mannschaft") {
      return "tag-blue";
    }
    if (str == "Zweite Mannschaft") {
      return "tag-brown";
    }
    if (str == "Verein") {
      return "tag-red";
    }
  };

  render() {
    return (
      <div className="containerCard " style={{maxWidth: "400px"}}>
        <div className="card">
          <Link
            style={{ textDecoration: "none" }}
            to={`${this.props.teamClass}/${this.props.titel}`}
          >
            <div className="card__header">
              <img
                src={this.props.imgUrl}
                alt="card__image"
                className="card__image"
              />
            </div>
            <div className="card__body" style={{height: "200px"}}>
              <span className={`tag ${this.changeColor(this.props.teamClass)}`}>
                {this.props.teamClass}
              </span>
              <h4 className="lead">{this.props.titel}</h4>
              <p>{maxWords(this.props.text)}</p>
            </div>
            <div className="card__footer">
              <div className="user">
                <img
                  src={this.changeAuthorPic(this.props.author)}
                  alt="user__image"
                  className="user__image"
                />
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
