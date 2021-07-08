import React from "react";
import Shop from "./Shop";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FirstTeam from "./FirstTeam";
import SecondTeam from "./SecondTeam";
import Home from "./Home";
import BigContribution from "./BigContribution";
import Footer from "./Footer";
import { contributionOne,contributionTwo,contributionThree  } from "./ContributionSite";
import MainBanner from "./MainBanner";
import NoMatch from "./NoMatch";

var contributions = [contributionOne,contributionTwo,contributionThree];

function Welcome(props) {
  return (
    <div>
      <Router>
        <MainBanner />

        {/* Switch & Routing */}
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/shop" component={Shop}></Route>
          <Route exact path="/ersteMannschaft" component={FirstTeam}></Route>
          <Route path="/zweiteMannschaft" component={SecondTeam}></Route>
          {contributions.map((contribution) => (contributionToRoute(contribution)))} 
          {/* mapping of contribution routes depending on their props */}
          <Route path="/erster_Beitrag" component={Shop}></Route>
          <Route path="*">
            {/* catch error 404  */}
            <NoMatch />
          </Route>
        </Switch>
      </Router>
      <div style={{ height: "600px" }}></div>
      <Footer />
    </div>
  );
}

function contributionToRoute(contribution) {
  return (
    <Route
      exact
      path={`/${contribution.teamClass}/${contribution.Url}`}
      render={() => (
        <BigContribution
          imgUrl={contribution.imgUrl}
          headline={contribution.headline}
          text={contribution.longText}
        />
      )}
    />
  );
}

export default Welcome;
