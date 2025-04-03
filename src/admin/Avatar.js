import React, { useRef, useState } from "react";
import { Button, Overlay, OverlayTrigger, Popover } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";

const Avatar = (props) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  console.log(props);
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const logout = () => {
    localStorage.clear();
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
          <Popover.Content>
            <div>
              <div className="d-flex flex-column">
                <strong>Account</strong>
                <Link to="/dashboard">Beiträge</Link>
                <Link to="/dashboard">Dashboard</Link >
                <a href="" onClick={logout}>
                  Ausloggen
                </a>
              </div>
            </div>
          </Popover.Content>
        </Popover>
      </Overlay>
    </>
  );
};

export default Avatar;
