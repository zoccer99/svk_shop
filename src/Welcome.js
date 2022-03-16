import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FirstTeam from "./FirstTeam";
import SecondTeam from "./SecondTeam";
import CJunioren from "./CJunioren";
import DJunioren from "./DJunioren";
import EJunioren from "./EJunioren";
import FJunioren from "./FJunioren";
import Bambinies from "./Bambinies";
import Home from "./Home";
import Footer from "./Footer";
import MainBanner from "./MainBanner";
import NoMatch from "./NoMatch";
import ContributionForm from "./admin/ContributionForm";
import login from "./admin/login";
import axios from "axios";
import FullContribution from "./FullContribution";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      Contributions: [],
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
            {/* <Route exact path="/ersteMannschaft" component={}></Route> */}
            <Route exact path="/ersteMannschaft" component={FirstTeam}></Route>
            <Route exact path="/zweiteMannschaft" component={SecondTeam}></Route>
            <Route exact path="/Junioren/C-Junioren" component={CJunioren}></Route>
            <Route exact path="/Junioren/D-Junioren" component={DJunioren}></Route>
            <Route exact path="/Junioren/E-Junioren" component={EJunioren}></Route>
            <Route exact path="/Junioren/F-Junioren" component={FJunioren}></Route>
            <Route exact path="/Junioren/G-Junioren" component={Bambinies}></Route>
            {this.state.Contributions.map((contribution, index) => (
              <FullContribution
                exact path={`/${contribution.teamClass}/${contribution.titel}`}
                key={index}
                headline={contribution.titel}
                tailline= '--Zum Spiel am Sonntag--'
                text={contribution.text}
              />
            ))}
            {/* mapping of contribution routes depending on their props */}
            <Route exact path="/login" component={ContributionForm}></Route>
            <Route exact path="/loginUser" component={login}></Route>
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
