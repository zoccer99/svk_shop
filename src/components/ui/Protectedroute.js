import React, { useContext } from "react";
import { AuthContext } from "../../Hooks/useContext";
import Home from "../../Home";

const ProtectedRoute = (props) => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      {isAuthenticated ? (
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
