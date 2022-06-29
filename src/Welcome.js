import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";
import ContributionForm from "./admin/ContributionForm";
import login from "./admin/login";
import FullContribution from "./Blog/FullContribution";
import Dashboard from "./admin/Dashboard";
import Footer from "./Footer";
import Home from "./Home";
import MainBanner from "./MainBanner";
import NoMatch from "./NoMatch";
import ProtectedRoute from "./ProtectedRoute";
import Sponsoren from "./Sponsoren";
import Bambinies from "./teams/Bambinies";
import CJunioren from "./teams/CJunioren";
import DJunioren from "./teams/DJunioren";
import EJunioren from "./teams/EJunioren";
import FirstTeam from "./teams/FirstTeam";
import FJunioren from "./teams/FJunioren";
import SecondTeam from "./teams/SecondTeam";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      Contributions: [],
      isLoggedIn: false,
      isFetching: false,
    };
  }

  fetchDB = () => {
    axios
      .get("https://svkretzschau.herokuapp.com/Contribution/")
      .then((res) => {
        const data = res.data;
        this.setState({ Contributions: data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.fetchDB();
  }

  render() {
    return (
      <div>
        <Router>
          <MainBanner />

          {/* Switch & Routing */}
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route exact path="/ersteMannschaft" component={FirstTeam}></Route>
            <Route
              exact
              path="/zweiteMannschaft"
              component={SecondTeam}
            ></Route>
            <Route
              exact
              path="/Junioren/C-Junioren"
              component={CJunioren}
            ></Route>
            <Route
              exact
              path="/Junioren/D-Junioren"
              component={DJunioren}
            ></Route>
            <Route
              exact
              path="/Junioren/E-Junioren"
              component={EJunioren}
            ></Route>
            <Route
              exact
              path="/Junioren/F-Junioren"
              component={FJunioren}
            ></Route>
            <Route
              exact
              path="/Junioren/G-Junioren"
              component={Bambinies}
            ></Route>
            {this.state.Contributions.map((contribution, index) => (
              <FullContribution
                exact
                path={`/${contribution.teamClass}/${contribution.titel}`}
                key={index}
                headline={contribution.titel}
                tailline=""
                text={contribution.text}
              />
            ))}
            {/* mapping of contribution routes depending on their props */}
            <Route exact path="/aktuelles" component={Sponsoren}></Route>
            <Route exact path="/sponsoren" component={Sponsoren}></Route>
            <ProtectedRoute
              exact
              path="/createContribution"
              component={ContributionForm}
            />
            <Route exact path="/login" component={login}></Route>

            <Route exact path="/Dashboard" component={Dashboard} />

            <Route exact path="*">
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
}

export default Welcome;
