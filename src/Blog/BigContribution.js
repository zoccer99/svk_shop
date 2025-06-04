import React, { useEffect, useState } from "react";
import firstTeam from "../pictures/firstTeam.jpg";
import parse from 'html-react-parser';

const BigContribution = (props) => {
  
  return (
    //TODO: creative img cluster
    <div className="d-flex justify-content-center ">
      <div className="d-flex flex-column bigContributionWrapper">
        <div className="">
          <img
            className="img-thumbnail img-fluid"
            src={firstTeam} /* props.imgUrl */
          />
        </div>
        <div className="mt-4">
          <h2 className="text-center Oswald-serif">{props.headline}</h2>
          <h3 className="text-center mt-4 pinch"></h3>
          <p className="text-left Oswald-sans-serif">{parse(props.text)}</p>
        </div>
      </div>
    </div>
  );
};

export default BigContribution;
