import React, { useEffect, useState } from "react";

const StaffCard = (props) => {
  const [isMobile, setMobile] = useState(window.innerWidth < 576);

  const updateViewport = () => {
    setMobile(window.innerWidth < 576);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="d-flex align-items-center coachInfoWrapper  rounded">
          <img
            src={props.img}
            alt={props.name}
            className="img-fluid w-25 rounded"
            style={{ maxWidth: "80px" }}
          />
          <div className="text-center flex-grow-1">
            <h4 className="mb-1">{props.name}</h4>
            <p className="mb-0">{props.function}</p>
          </div>
        </div>
      ) : (
        <div className="card playerInfoWrapper w-75 ">
          <img src={props.img} className="coach-image" alt={props.name} />
          <div className="card-body card-player-name text-center">
            <h4 className="card-text">{props.name}</h4>
            <p className="card-text text-muted">{props.function}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffCard;
