import React from "react";
import { Link } from "react-router-dom";

function maxWords(str) {
  const text = String(str || "");
  if (text.length > 100) {
    return text.slice(0, 100) + "...";
  }
  return text;
}

function Contribution(props) {         
  

  return (
      <div className="container contributionCard">
        <div className="row">
          <Link to={`${props.teamClass}/${props.titel}`}>
            <div className="card blog-card">
              <img className="card-img" src={props.imgUrl} alt={props.titel} loading="lazy" />
              <div className="card-img-overlay">
                <span className="badge bg-light text-dark">
                  {props.teamClass}
                </span>
              </div>
              <div className="card-body">
                <h4 className="card-title"> {props.titel} </h4>
                <small className="text-muted cat">
                  <i className=" text-info"> {props.category} </i>
                </small>
                <div className="textContainer">
                  <p className="card-text">{maxWords(props.text)}</p>
                </div>
              </div>
              <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div className="views"> {props.time} </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
  );
}

export default Contribution;
