import React, { useContext, useState } from "react";
import { Button, Form, InputGroup, Modal } from "react-bootstrap";
import axios from "axios";
import { Redirect } from "react-router-dom";

function LoginModal(props) {
  const [loginCredentials, setloginCredentials] = useState({
    username: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    setloginCredentials({ ...loginCredentials, [name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
<<<<<<< HEAD
        "https://071c-2003-d5-d741-ee79-c2a9-6316-e2cb-ac49.ngrok-free.app/Users/",
=======
        `${process.env.BACKEND_URI}/Users/`,
>>>>>>> 17a5b45 (added: .env file for CHANGED backend URI)
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
        setSuccess(false);
        alert("Falscher Username oder Passwort");
      }
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-2">
        <InputGroup className="mb-3">
          <InputGroup.Text>username</InputGroup.Text>
          <Form.Control
            placeholder="..."
            name="username"
            onChange={handleChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text>password</InputGroup.Text>
          <Form.Control
            placeholder="..."
            name="password"
            onChange={handleChange}
            type="password"
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-center">
        <Button onClick={handleSubmit}>Bestätigen</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModal;
