import React, { useEffect, useState } from "react";

import {
  faFutbol,
  faShoePrints,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayerCard = (props) => {
  const [isMobile, setMobile] = useState(window.innerWidth < 576);

  const updateViewport = () => {
    setMobile(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => {window.removeEventListener("resize", updateViewport);}
  });

  return (
    <>
      {isMobile ? (
        <div className="d-flex align-items-center justify-content-between playerInfoWrapper mb-1 rounded">
          <img src={props.img} alt="..." className="img-fluid w-25 rounded" style={{maxWidth: "80px"}} />
          <h3 className="d-flex align-items-center justify-content-center text-center border-right sm-150" >{props.player.name}</h3>
          <div className=" d-md-block d-flex ">
            <div className="row ">
              <div className="col-12 col-md-4">
                <div className="d-flex justify-content-around align-items-center">
                  <FontAwesomeIcon icon={faShoePrints} />
                  <h5 className="m-0">{props.player.matches}</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="d-flex justify-content-around align-items-center ">
                  <FontAwesomeIcon icon={faFutbol} />
                  <h5 className="m-0 ">{props.player.goals}</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="d-flex justify-content-around align-items-center ">
                  <FontAwesomeIcon icon={faHandshake} />
                  <h5 className="m-0">{props.player.assists}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card playerInfoWrapper w-75 justify-content-between">
          <img src={props.img} className="card-img-top " alt="..." />
          <div>
          <div className="card-body card-player-name">
            <h4 className="card-text d-flex ">
              {props.player.name}
            </h4>
          </div>

          <div className="container py-3 d-none d-md-block">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="d-flex justify-content-around align-items-center">
                  <FontAwesomeIcon icon={faShoePrints} />
                  <h5 className="m-0">{props.player.matches}</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="d-flex justify-content-around align-items-center ">
                  <FontAwesomeIcon icon={faFutbol} />
                  <h5 className="m-0 ">{props.player.goals}</h5>
                </div>
              </div>
              <div className="col-12 col-md-4 ">
                <div className="d-flex justify-content-around align-items-center ">
                  <FontAwesomeIcon icon={faHandshake} />
                  <h5 className="m-0">{props.player.assists}</h5>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerCard;
