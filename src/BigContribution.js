import React from "react";

function BigContribution(props) {
  return (
      <div className="d-flex flex-column my-2">
      <img className="mx-3" src={props.imgUrl} />
        <svg  className="mx-3 my-1"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fill-opacity="0.4"
            d="M0,96L80,90.7C160,85,320,75,480,96C640,117,800,171,960,176C1120,181,1280,139,1360,117.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <h2 className="align-self-center my-1">{props.headline}</h2>
        <p className="align-self-center my-1 mx-3">{props.text}</p>
      </div>
  );
}

export default BigContribution;
