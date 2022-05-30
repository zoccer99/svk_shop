import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

function Dashboard() {
  const [contributions, setContributions] = useState([]);

  const changeToUrl = (url) => {
    window.location.href = url;
  };

  const listContribution = () => {
    axios
      .get("https://svkretzschau.herokuapp.com/Contribution/")
      .then((res) => {
        const data = res.data;
        setContributions(data);
        console.log(contributions);
      });
  };

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ height: "600px" }}
    >
      <h1>Dashboard Seite</h1>

      <div className="d-flex justify-content-around ">
        <Button onClick={() => listContribution()}>Beiträge anzeigen</Button>
        <Button onClick={() => changeToUrl("/createContribution")}>
          Beitrag erstelen
        </Button>
        {/* <Button>Beiträge löschen</Button> */}
      </div>
      <div>
        {contributions.map((conn, index) => (
          <div>
            <Button>löschen</Button>
            <h1>{conn["titel"]}</h1>
            <p>{conn["text"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
