import { Nav } from "react-bootstrap";
import React, { useContext, useState } from "react";
import Avatar from "./Avatar";
import LoginModal from "./loginModal";
import { AuthContext } from "../Hooks/useContext";

const LoginIcon = () => {
  const { currentUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {currentUser === "" ? (
        <Nav.Link className="loginWrapper" onClick={() => setShowModal(true)}>
          Login
        </Nav.Link>
       ) : (
        <Avatar name={currentUser} />
      )}

      <LoginModal show={showModal} onHide={() => setShowModal(false)} /> 
    </>
  );
};

export default LoginIcon;
