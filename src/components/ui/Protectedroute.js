import axios, { Axios, AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Home from "../../Home"

const ProtectedRoute = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
        .get(`${process.env.REACT_APP_BACKEND_URI}/auth`, {
        headers: {
          "x-access-token": "Bearer " + localStorage.getItem("jwt"),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      })
      .catch((err) => {
        setIsAuthenticated(false);
      });
    setIsLoading(false);
  }, [isAuthenticated]);

  return (
    <div>
      {isLoading ? (
        <div>loading...</div>
      ) : isAuthenticated ? (
        <div>{props.outlet}</div>
      ) : (
        <div>
          <Home />
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;
