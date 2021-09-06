import React from "react";
import axios from "axios";
import Contribution from "./Contribution";
import svkTeam from "./pictures/team.jpg";

//TODO: Datenbank verbinden

class ContributionSite extends React.Component {
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
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.fetchDB();
  }
  render() {
    return (
      <div>
        {/* <button onClick={fetchDB}>FetchDB</button> */}
        <h3 className="text-center">Aktuelle Berichte</h3>
        <div className="gridParent">
          {this.state.Contributions.map((conn, index) => (
            <Contribution
              key={index}
              teamClass={conn.teamClass}
              imgUrl={svkTeam}
              titel={conn.titel}
              text={conn.text}
              category={conn.category}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ContributionSite;
