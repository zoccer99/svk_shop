import React from "react";

function BigContribution(props) {
  const imgStyle = {
    maxWidth:'1000px'
  };
  return (
    //TODO: creative img cluster
    <div className="d-flex flex-column mx-3 my-2 ">
      <div className="d-flex justify-content-center">
        <img
          className="mx-3 img-thumbnail img-fluid"
          src={props.imgUrl}
          style={imgStyle}
        />
      </div>
      <div class="wrapper">
        <div class="divider div-transparent"></div>
      </div>
      <div className="mx-3 card">
        <div className="card-body">
          <h2 className="text-left my-1 Oswald-serif">{props.headline}</h2>
          <p className="my-1  text-left Oswald-sans-serif">{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default BigContribution;
