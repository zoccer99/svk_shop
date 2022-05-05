import React, { useEffect, useRef, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

class ProtectedRoute extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      isLoggedIn: false,
    };

    // Your axios call here

    // For success, update state like
    axios
    .get("https://svkretzschau.herokuapp.com/auth/", {
      withCredentials: true,
    })
    .then((result) => {
      if (result.status >= 200 && result.status < 305) {
        this.setState(() => ({ isLoading: false, isLoggedIn: true }));
        console.log(this.state)
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

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);
//     const fetch = () => {
//       axios
//         .get("http://localhost:5000/auth/", {
//           withCredentials: true,
//         })
//         .then((result) => {
//           if (result.status >= 200 && result.status < 305) {
//             setIsAuthenticated(true);
//             setLoading(false);
//           } else {
//             setIsAuthenticated(false);
//             setLoading(false);
//           }
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     };

//     fetch();
//   }, []);

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (loading) {
//           return <div>Loading</div>;
//         } else {
//           if (isAuthenticated) {
//             return <Component {...props} />;
//           } else {
//             return <Redirect to="/loginUser" />;
//           }
//         }
//       }}
//     />
//   );
// };

// export default ProtectedRoute;

// <Route
//   {...rest}
//   render={(props) => {
//     console.log("l:"+loading +" a:" + isAuthenticated)
//     loading ?
//       <div>loading...</div>
//      : isAuthenticated ? (
//       <div>DASH</div>
//     ) : (
//       // <Component {...props} />
//       <Redirect to={"./loginUser"} />
//     );
//   }
// }
// />
