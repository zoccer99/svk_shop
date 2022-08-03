import axios from "axios";
import React from "react";
import { Redirect, Route } from "react-router-dom";

class ProtectedRoute extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      isLoggedIn: false,
    };
    
  }

  componentDidMount() {
    axios
    // .get("http://localhost:5000/auth/",
      .get("https://svkretzschau.herokuapp.com/auth/", 
      {
        headers:
        {
          Authorization: "Bearer "+ window.localStorage.getItem('jwt'),
        }
      })
      .then((result) => {
        if (result.status >= 200 && result.status < 305) {
          this.setState(() => ({ isLoading: false, isLoggedIn: true }));
        } else {
          // For fail, update state like
          this.setState(() => ({ isLoading: false, isLoggedIn: false }));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.isLoading ? null : this.state.isLoggedIn ? (
      <Route exact path={this.props.path} component={this.props.component} />
    ) : (
      <Redirect to="/loginUser" />
    );
  }
}

export default ProtectedRoute;
