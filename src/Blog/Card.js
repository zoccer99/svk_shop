"use client"
import React, { useState, useEffect } from "react";
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

function Card(props) {
  const [cssClassName, setCssClassName] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    const encodedUri = `/${props.teamClass}/${props.titel}`;
    setUrl(encodedUri);
  }, [props.teamClass, props.titel]);

  const changeAuthorPic = (str) => {
    if (str === "Christian Gebert") {
      return gebbi;
    } else if (str === "Matthias Scholle") {
      return scholle;
    }
  };

  const changeColor = (str) => {
    if (str === "Erste Mannschaft") {
      return "tag-blue";
    }
    if (str === "Zweite Mannschaft") {
      return "tag-brown";
    }
    if (str === "Verein") {
      return "tag-red";
    }
  };

  return (
    <div className="containerCard " style={{ maxWidth: "400px" }}>
      <div className="card">
        <Link style={{ textDecoration: "none" }} to={url}>
          <div className="card__header">
            <img
              src={props.imgUrl}
              alt="card__image"
              className="card__image"
            />
          </div>
          <div className="card__body" style={{ height: "200px" }}>
            <span className={`tag ${changeColor(props.teamClass)}`}>
              {props.teamClass}
            </span>
            <h4 className="lead ">{props.titel}</h4>
            <p>{maxWords(props.text)}</p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src={changeAuthorPic(props.author)}
                alt="user__image"
                className="user__image"
              />
              <div className="user__info">
                <h5>{props.author}</h5>
                <small>{props.time}</small>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
