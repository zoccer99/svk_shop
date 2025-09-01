import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Spinner } from "react-bootstrap";

import axios from "axios";
const ContributionForm = lazy(() => import("./admin/ContributionForm"));
const Login = lazy(() => import("./admin/login"));
const FullContribution = lazy(() => import("./Blog/FullContribution"));
const Dashboard = lazy(() => import("./admin/Dashboard"));
const Footer = lazy(() => import("./Footer"));
const Home = lazy(() => import("./Home"));
const NoMatch = lazy(() => import("./NoMatch"));
const Sponsoren = lazy(() => import("./Sponsoren"));
const Bambinies = lazy(() => import("./teams/Bambinies"));
const CJunioren = lazy(() => import("./teams/CJunioren"));
const DJunioren = lazy(() => import("./teams/DJunioren"));
const EJunioren = lazy(() => import("./teams/EJunioren"));
const FirstTeam = lazy(() => import("./teams/FirstTeam"));
const FJunioren = lazy(() => import("./teams/FJunioren"));
const Anmeldung = lazy(() => import("./Anmeldung"));
const SponsorenPage = lazy(() => import("./Sponsorenpage.js"));
const SecondTeam = lazy(() => import("./teams/SecondTeam"));
const Protectedroute = lazy(() => import("./components/ui/Protectedroute"));
const UserProvider = lazy(() => import("./Hooks/useContext"));
const Navigation = lazy(() => import("./Navigation"));

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
    const DE_MAP = {
      ä: "ae",
      ö: "oe",
      ü: "ue",
      Ä: "Ae",
      Ö: "Oe",
      Ü: "Ue",
      ß: "ss",
    };
    return text
      .toString()
      .replace(/[äöüÄÖÜß]/g, (ch) => DE_MAP[ch]) // German-friendly
      .normalize("NFKD") // decompose accents
      .replace(/[\u0300-\u036f]/g, "") // remove combining marks
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // ASCII only
      .replace(/^-+|-+$/g, "") // trim dashes
      .replace(/-{2,}/g, "-"); // collapse
  };
  render() {
    return (
      <div>
        <Router>
          <UserProvider>
            <Navigation />
          </UserProvider>
          {/* Switch & Routing */}{" "}
          <Suspense
            fallback={
              <div className="text-center mt-4">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            }
          >
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route
                exact
                path="/ersteMannschaft"
                component={FirstTeam}
              ></Route>
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
              <Route exact path="/sponsoren" component={SponsorenPage}></Route>
              {Array.isArray(this.state.Contributions) &&
                this.state.Contributions.map((contribution, index) => (
                  <Route
                    key={index}
                    exact
                    path={`/${contribution.teamClass}/${this.slugify(
                      contribution.titel
                    )}`}
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
                ))}{" "}
              {/* mapping of contribution routes depending on their props */}{" "}
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
                component={() => (
                  <Protectedroute outlet={<ContributionForm />} />
                )}
              />
              <Route exact path="*">
                {" "}
                {/* catch error 404  */}
                <NoMatch />
              </Route>
            </Switch>
          </Suspense>
        </Router>
        <div style={{ height: "600px" }}></div>
        <Footer />
      </div>
    );
  }
}

export default Welcome;
