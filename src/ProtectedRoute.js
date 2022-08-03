import axios from "axios";
import React from "react";
import { Redirect, Route } from "react-router-dom";

class ProtectedRoute extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
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
          this.setState({ isLoggedIn: true });
        } else {
          // For fail, update state like
          this.setState({ isLoggedIn: false });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return this.state.isLoggedIn ? (
      <Route exact path={this.props.path} component={this.props.component} />
    ) : (
      <Redirect to="/login" />
    );
  }
}

export default ProtectedRoute;
