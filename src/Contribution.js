import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";



function Contribution(props) {
  let match = useRouteMatch();
  return (
    <div>
      <div className="container">
        <div className="row">
          <Link to={`${match.url}/${props.Url}`}>
            <div className="card m-5" style={{color:"black"}}>
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
                  <p className="card-text"> {props.text} </p>
                </div>
              </div>
              <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                <div className="views"> {props.time} </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contribution;
