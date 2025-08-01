import React from "react";
import { Link, useParams, useRouteMatch } from "react-router-dom";

function maxWords(str) {
  var symbols = str.length;
  var previewText=str;
  if(symbols>100) {
    var previewText=previewText.slice(0,100);
    previewText = previewText.concat("...");
  }
  return previewText;
}

function Contribution(props) {         
  

  return (
      <div className="container contributionCard">
        <div className="row">
          <Link to={`${props.teamClass}/${props.titel}`}>
            <div className="card">
              <img className="card-img" src={props.imgUrl} loading="lazy" />
              <div className="card-img-overlay">
                <button className="btn btn-light btn-sm">
                  {props.teamClass}
                </button>
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
