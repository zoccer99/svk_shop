import React, { useState } from "react";
import { Button, Form, Label } from "react-bootstrap";
import axios from "axios";
import Scholli from "../pictures/ErsteSpiel/Bild10.JPG";

function Login() {
  const axios = require("axios");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function postDB(data) {
    axios
      .post(
        "https://svkretzschau.herokuapp.com/Users/",
        data
      )
      .then((res) => {
        localStorage.setItem("jwt", res.data["accessToken"]);
        window.history.push("/dashboard");
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
    <section className="vh-100">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Login
                    </p>

                    <Form
                      className="mx-1 mx-md-4"
                      onSubmit={(e) => handleSubmit(e)}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            name="username"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example1c"
                          >
                            Nutzername
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            name="passwordFirst"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <div
                          type="submit"
                          className="btn btn-primary btn-lg"
                          //onClick={(e) => handleSubmit(e)}
                        >
                          Login
                        </div>
                      </div>
                    </Form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src={Scholli}
                      className="img-fluid rounded"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
