import React, { useState } from "react";
import { Button, Form, Label } from "react-bootstrap";
import axios from "axios";

const bcrypt = require('bcryptjs');

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userArr, setUserArr] = useState("");

//TODO: fetch db data properly and compoare to input + decrypt
//TODO: move login to server site
  function fetchDB() {
    axios
      .get("https://svkretzschau.herokuapp.com/Users/")
      .then((res) => {
        const data = res.data;
        setUserArr(data);
        
      })
      .catch((err) => console.log(err));
  };



  function checkCredentials(username,password,Arr) {
    let user = Arr.filter((element) => {
      if(element.username == username) {
        return element;
      }
    });
    console.log(user)
  }

  function handleSubmit(event) {
      event.preventDefault();
      const credentialsArr = userArr;
      checkCredentials(username,password,credentialsArr);
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
          onChange={(e)=> setPassword(e.target.value)}
        ></Form.Control>
        <Button className="mt-3"  type='"submit'  value="login" >
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
