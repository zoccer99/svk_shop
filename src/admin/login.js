import React, { useState } from "react";
import { Button, Form, Label } from "react-bootstrap";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function postDB(data) {
   
    axios
      .post(
        "https://svkretzschau.herokuapp.com/Users/",
        // "http://localhost:5000/Users/",
        data,
      ).then((res)=> {
        console.log(res)
        localStorage.setItem('jwt', res.data["accessToken"]);
        window.location.href ="https://sv-kretzschau.de/Dashboard";
        
      })
      .catch((err) => {
        console.log("POST failed" + err);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    postDB(user);
  }

  return (
    <div className="d-flex justify-content-center p-2">
      <Form className="loginFormWrapper" onSubmit={handleSubmit}>
        <Form.Label>Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></Form.Control>
        <Form.Label className="pt-4">Passwort</Form.Label>
        <Form.Control
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
        <Button className="mt-3" type='submit' value="login">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
