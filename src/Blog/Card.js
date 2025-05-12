// "use client"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gebbi from "../pictures/profiles/gebbi.webp";
import scholle from "../pictures/profiles/Scholle.jpg";
import admin from "../pictures/profiles/admin.png"

function slugify(text) {
  return text
    .normalize('NFD')                       // z.B. ä -> ä
    .replace(/[\u0300-\u036f]/g, '')       // Entfernt diakritische Zeichen
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')          // Entfernt Sonderzeichen
    .trim()
    .replace(/[\s_-]+/g, '-')              // Ersetzt Leerzeichen/Unterstriche durch Bindestrich
    .replace(/^-+|-+$/g, '');              // Entfernt führende/abschließende Bindestriche
}
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
  const [url, setUrl] = useState("");

  useEffect(() => {
    let url_title = slugify(props.titel)
    const encodedUri = `/${props.teamClass}/${url_title}`;
    setUrl(encodedUri);
  }, [props.teamClass, props.titel]);

  const changeAuthorPic = (str) => {
    if (str === "Christian Gebert") {
      return gebbi;
    } else if (str === "Matthias Scholle") {
      return scholle;
    }
    else if (str === "admin") {
      return admin;
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
        <Link style={{ textDecoration: "none" }} to={url} >
          <div className="card__header">
            <img
              src={props.imgUrl}
              alt="card__image"
              className="card__image"
            />
          </div>
          <div className="">

          <div className="card__body">
            <span className={`tag ${changeColor(props.teamClass)}`}>
              {props.teamClass}
            </span>
            <h4 className="lead cardTitle">{props.titel}</h4>
            <p>{maxWords(props.text)}</p>
          </div>
          <div className="card__footer">
            <div className="user">
              <img
                src={changeAuthorPic(props.author)}
                alt="user__image"
                className="user__image "
                />
              <div className="user__info d-flex flex-column align-items-center justify-content-center">
                <h5>{props.author}</h5>
                <small>{props.time}</small>
              </div>
            </div>
                </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
