import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";

const Dashboard = () => {
  const changeToUrl = (url) => {
    window.location.href = url;
  };

  return (
    <div className="d-flex flex-column align-items-center" style ={{height:"600px"}}>
      <h1>Dashboard Seite</h1>
      
      <div className="d-flex justify-content-around ">
        {/* <Button>Beiträge anzeigen</Button> */}
        <Button onClick={() => changeToUrl("/createContribution")}>
          Beitrag erstellen
        </Button>
        {/* <Button>Beiträge löschen</Button> */}
      </div>
    </div>
  );
};

export default Dashboard;
