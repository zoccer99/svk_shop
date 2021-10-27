import React from "react";
import axios from "axios";
import Contribution from "./Contribution";
import svkTeam from "./pictures/team.jpg";

//TODO: Datenbank verbinden

class ContributionSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Contributions: [],
      ContributionsFinal: []

    };
  }


  
  
  sortCon = (teamclass,conntribution) => {
    
    let firstTeamContributions;
    if (teamclass === 'first') {
      firstTeamContributions = conntribution.filter(conn => conn.teamClass === 'Erste Mannschaft');
    }
    
    else if (teamclass === 'second') {
      firstTeamContributions = conntribution.filter(conn => conn.teamClass === 'Zweite Mannschaft');
    }
    else {
      firstTeamContributions = conntribution;
    }
    
    this.setState({ ContributionsFinal: firstTeamContributions });
    
  }
  
  fetchDB = () => {
    axios
      .get("http://localhost:5000/Contribution/")
      .then((res) => {
        const data = res.data;
        this.setState({ Contributions: data });
        this.sortCon(this.props.team,this.state.Contributions)
        console.log(this.state.Contributions)
        console.log(this.state.ContributionsFinal)
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.fetchDB();
  }
  render() {
    return (
      <div>
        <h3 className="text-center mt-4 pinch">Aktuelle Berichte</h3>
        <div className="gridParent">
          {this.state.ContributionsFinal.map((conn, index) => (
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
