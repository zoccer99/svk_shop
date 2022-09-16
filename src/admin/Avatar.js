import React, { useRef, useState } from "react";
import { Button, Overlay, OverlayTrigger, Popover } from "react-bootstrap";
import { BsPerson } from "react-icons/bs";

const Avatar = (props) => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  console.log(props)
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  const logout = () => {
    localStorage.clear();
  }
  return (
    <>
   
      <div className={`d-flex  align-items-center`} ref = {ref} onClick={handleClick}>
        <div className="me-2">{props.name}</div>
        <BsPerson />
      </div>
      {/* <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3">Account Optionen</Popover.Header>
          <Popover.Body>
            <div className="d-flex flex-column">
            <strong>Account</strong> 
            <a href="">Beiträge</a>
            <a href ="">Dashboard</a>
            <a href="" onClick={logout}>Ausloggen</a>
            </div>
          </Popover.Body>
        </Popover>
      </Overlay> */}
    </>
  );
};

export default Avatar;
