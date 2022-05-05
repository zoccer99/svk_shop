import React from "react";
import { Route, Redirect } from "react-router-dom";
import {Button} from "react-bootstrap";

const Dashboard = () => {

  const  changeToUrl=(url)=> {
    window.location.href=url;
   }

  return (
    
    <div>
      <p>Dashboard Seite</p>
      <Button >Beiträge anzeigen</Button>
      <Button onClick={() => changeToUrl('/createContribution')}>Beitrag erstellen</Button>
      <Button>Beiträge löschen</Button>
    </div>
  );
};


export default Dashboard;