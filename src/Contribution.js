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
  let {path,url} = useRouteMatch();         //url -> /{letzter teil} ; path -> {./{letzter Teil}}

  return (
      <div className="container contributionCard">
        <div className="row">
          <Link to={`${props.teamClass}/${props.Url}`}>
            <div className="card m-2" style={{color:"black"}}>
              <img className="card-img" src={props.imgUrl} />
              <div className="card-img-overlay">
                <button className="btn btn-light btn-sm">
                  {props.category}
                </button>
              </div>
              <div className="card-body">
                <h4 className="card-title"> {props.name} </h4>
                <small className="text-muted cat">
                  <i className=" text-info"> {props.info} </i>
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
