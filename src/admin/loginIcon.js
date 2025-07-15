import { Nav } from "react-bootstrap";
import React, { useContext, useState } from "react";
import Avatar from "./Avatar";
import LoginModal from "./loginModal";
import { userContext } from "../Hooks/useContext";

const LoginIcon = () => {
  const [user] = useContext(userContext);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {user === "" ? (
        <Nav.Link className="loginWrapper" onClick={() => setShowModal(true)}>
          Login
        </Nav.Link>
       ) : (
        <Avatar name={user} />
      )}

      <LoginModal show={showModal} onHide={() => setShowModal(false)} /> 
    </>
  );
};

export default LoginIcon;
