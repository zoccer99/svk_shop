import React from "react";
import Navigation from "./Navigation";
import Shop from "./Shop";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FirstTeam from "./FirstTeam";
import SecondTeam from "./SecondTeam";
import Home from "./Home";
import Banner from "./Banner";
import BigContribution from "./BigContribution";
import Footer from "./Footer";
import Team from "./pictures/team.jpg";

function Welcome(props) {
  return (
    <div>
      <Banner />
      <Router>
        <Navigation />
      {/* Switch & Routing */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route exact path="/erste_Mannschaft" component={FirstTeam}></Route>
          <Route path="/zweite_Mannschaft" component={SecondTeam}></Route>
          <Route
            exact
            path="/erste_Mannschaft/erstesSpiel"
            render={(props) => (
              <BigContribution
                {...props}
                imgUrl={Team}
                headline="das erste Spiel!"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
              />
            )}
          ></Route>
          <Route path="/erster_Beitrag" component={Shop}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default Welcome;
