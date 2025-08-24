import React, { useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import axios from "axios";
import "../css/loginModal.css";


function LoginModal(props) {
  const [loginCredentials, setloginCredentials] = useState({
    username: "",
    password: "",
  });
  

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    setloginCredentials({ ...loginCredentials, [name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACKEND_URI}/Users/`,
        //"http://localhost:5000/users",
        loginCredentials
      );
      if (res.status === 200) {
        localStorage.setItem("jwt", res.data["accessToken"]);
        localStorage.setItem("user", loginCredentials["username"]);
        window.location.href = "https://sv-kretzschau.de/dashboard"
      }
    } catch (err) {
      if (err.response.status === 401) {
        alert("Falscher Username oder Passwort");
      }
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className="mx-2">
        <div className="login-modal">
          <h2 className="login-title">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="login-button">
              Submit
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
