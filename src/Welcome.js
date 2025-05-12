import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";
import ContributionForm from "./admin/ContributionForm";
import Login from "./admin/login";
import FullContribution from "./Blog/FullContribution";
import Dashboard from "./admin/Dashboard";
import Footer from "./Footer";
import Home from "./Home";
import MainBanner from "./MainBanner";
import NoMatch from "./NoMatch";
import Sponsoren from "./Sponsoren";
import Bambinies from "./teams/Bambinies";
import CJunioren from "./teams/CJunioren";
import DJunioren from "./teams/DJunioren";
import EJunioren from "./teams/EJunioren";
import FirstTeam from "./teams/FirstTeam";
import FJunioren from "./teams/FJunioren";
import Anmeldung from "./Anmeldung";
import SponsorenPage from "./Sponsorenpage.js";
import SecondTeam from "./teams/SecondTeam";
import Protectedroute from "./components/ui/Protectedroute";
import UserProvider from "./Hooks/useContext";
import Navigation from "./Navigation";

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      Contributions: [],
      isFetching: false,
    };
  }

  fetchDB = () => {
    axios

      .get(`${process.env.REACT_APP_BACKEND_URI}/Contribution/`)
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


  slugify = (text) => {
    return text
      .normalize('NFD')                       // z.B. ä -> ä
      .replace(/[\u0300-\u036f]/g, '')       // Entfernt diakritische Zeichen
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')          // Entfernt Sonderzeichen
      .trim()
      .replace(/[\s_-]+/g, '-')              // Ersetzt Leerzeichen/Unterstriche durch Bindestrich
      .replace(/^-+|-+$/g, '');              // Entfernt führende/abschließende Bindestriche
  }

  render() {
    return (
      <div>
        <Router>
          <UserProvider>
            <Navigation />
          </UserProvider>

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
            <Route
              exact
              path="/Junioren/anmeldung"
              component={Anmeldung}
            ></Route>
            <Route
              exact
              path="/sponsoren"
              component={SponsorenPage}
            ></Route>
            {Array.isArray(this.state.Contributions) &&
              this.state.Contributions.map((contribution, index) => (
                <Route
                  key={index}
                  exact
                  path={`/${contribution.teamClass}/${this.slugify(contribution.titel)}`}
                  component={() => (
                    <FullContribution
                      key={index}
                      headline={contribution.titel}
                      tailline=""
                      text={contribution.text.replace(
                        /(?:\r\n|\r|\n)/g,
                        "<br>"
                      )}
                      customImages={contribution.customImages}
                    />
                  )}
                ></Route>
              ))}
            {/* mapping of contribution routes depending on their props */}
            <Route exact path="/aktuelles" component={Sponsoren}></Route>
            <Route exact path="/sponsoren" component={Sponsoren}></Route>
            <Route
              exact
              path="/createContribution"
              component={() => (
                <ContributionForm login={this.state.isLoggedIn} />
              )}
            ></Route>
            <Route exact path="/login" component={Login}></Route>

            <Route
              exact
              path="/Dashboard"
              component={() => <Protectedroute outlet={<Dashboard />} />}
            />
            <Route
              exact
              path="/contributionForm"
              component={() => <Protectedroute outlet={<ContributionForm />} />}
            />

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
