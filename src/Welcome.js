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
import {contributionOne} from './ContributionSite';

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
            path={`/erste_Mannschaft/${contributionOne.Url}`}
            render={(props) => (
              <BigContribution
                {...props}
                imgUrl={contributionOne.imgUrl}
                headline={contributionOne.headline}
                text={contributionOne.longText}
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
