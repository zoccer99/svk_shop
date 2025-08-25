import React, { useRef, useState, useContext } from "react";
import { AuthContext } from "../Hooks/useContext";
import { Overlay, Popover } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

const Avatar = (props) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const { logout } = useContext(AuthContext);

  console.log(props);
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  return (
    <>
      <div
        className={`d-flex  align-items-center`}
        ref={ref}
        onClick={handleClick}
      >
        <div className="me-2">{props.name}</div>
        <BsPerson />
      </div>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Title as="h3">Account Optionen</Popover.Title>
          <Popover.Content className="p-3">
            <div className="d-flex flex-column">
              <strong className="mb-2">Account</strong>
              <Link to="/dashboard" className="text-decoration-none text-dark mb-1">Beiträge</Link>
              <Link to="/dashboard" className="text-decoration-none text-dark mb-2">Dashboard</Link >
              <button onClick={logout} className="btn btn-outline-danger btn-sm mt-2"> 
                Ausloggen
              </button>
            </div>
          </Popover.Content>
        </Popover>
      </Overlay>
    </>
  );
};

export default Avatar;
