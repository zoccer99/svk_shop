import React from "react";
import axios from "axios";
import Contribution from "./Contribution";
import Card from "./Card.js";
import svkTeam from "./pictures/team.jpg";
import Nico from "./pictures/erste/Bild12.JPG"

//TODO: Datenbank verbinden

class ContributionSite extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Contributions : [],
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


  sortConBydate = (array) => {
    array.sort(function(a, b) {
      console.log(new Date(b.zeit) - new Date(a.zeit))
      return new Date(b.zeit) - new Date(a.zeit);
    });
    
    return array;
  }


  

  
  fetchDB = () => {
    axios
      .get("http://localhost:5000/Contribution/")
      .then((res) => {
        const data = res.data;
        this.setState({ Contributions: data });
        this.sortCon(this.props.team,this.state.Contributions)
        this.sortConBydate(this.state.ContributionsFinal)
        console.log(this.state)
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.fetchDB();
    
  }
  render() {
    let options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
    return (
      <div>
        <h3 className="text-center mt-4 pinch">Aktuelle Berichte</h3>
        <div className="gridParent">
          {this.state.ContributionsFinal.map((conn, index) => (
            <Card
              key={index}
              teamClass={conn.teamClass}
              imgUrl={svkTeam}
              titel={conn.titel}
              text={conn.text}
              category={conn.category}
              author="Christian Gebbert"
              time={new Date(conn.zeit).toLocaleDateString('de-DE',options)}
              
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ContributionSite;
