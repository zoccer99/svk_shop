import React from "react";
import Shop from "./Shop";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import FirstTeam from "./FirstTeam";
import SecondTeam from "./SecondTeam";
import EJunioren from "./EJunioren";
import Home from "./Home";
import BigContribution from "./BigContribution";
import Footer from "./Footer";
import MainBanner from "./MainBanner";
import NoMatch from "./NoMatch";
import ContributionForm from "./admin/ContributionForm";
import axios from "axios";
import Bambinies from "./Bambinies";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      Contributions: [],
    };
  }

  fetchDB = () => {
    axios
      .get("http://localhost:5000/Contribution/")
      .then((res) => {
        const data = res.data;
        this.setState({ Contributions: data });
        console.log(this.state.Contributions )
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
            <Route path="/shop" component={Shop}></Route>
            <Route exact path="/ersteMannschaft" component={FirstTeam}></Route>
            <Route path="/zweiteMannschaft" component={SecondTeam}></Route>
            <Route pasth="/Bambinies" component={Bambinies}></Route>
            <Route path="/E-Junioren" component={EJunioren}></Route>
            {this.state.Contributions.map((contribution, index) => (
              <BigContribution
                exact path={`/${contribution.teamClass}/${contribution.titel}`}
                key={index}
                imgUrl={contribution.imgUrl}
                headline={contribution.titel}
                text={contribution.text}
              />
            ))}
            {/* mapping of contribution routes depending on their props */}
            <Route path="/login" component={ContributionForm}></Route>
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
}



export default Welcome;
