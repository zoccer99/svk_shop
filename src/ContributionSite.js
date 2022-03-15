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
      return new Date(b.zeit) - new Date(a.zeit);
    });
    this.setState({ContributionsFinal: array})
  }


  
  

  
  fetchDB = () => {
    axios
      .get("https://svkretzschau.herokuapp.com/Contribution/")
      .then((res) => {
        const data = res.data;
        this.setState({ Contributions: data });
        this.sortCon(this.props.team,this.state.Contributions)      //sortierung der mannschaftsart(erste, zweite)
        this.sortConBydate(this.state.ContributionsFinal)           
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
        <h3 className="text-center mt-4 pinch" style={{color:"#292929"}}>Aktuelle Berichte</h3>
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
