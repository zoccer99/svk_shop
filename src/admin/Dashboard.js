import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";

function Dashboard() {
  const [contributions, setContributions] = useState([]);

  const changeToUrl = (url) => {
    window.location.href = url;
  };

  const listContribution = () => {
    axios
      //.get("http://localhost:5000/Contribution/") 
      .get(`${process.env.REACT_APP_BACKEND_URI}/Contribution/`)
      .then((res) => {
        const data = res.data;
        setContributions(data);
      });
  };

  const deleteContribution = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URI}/Contribution`, {
        data: { _id: id},
      })
      .then((res) => {
        console.log(res)
        if (res !== 200) return;
        alert("löschen erfolgreich ")
      })
      .catch((err) => alert(`Netzwerkfehler: ${err}`));
  };

  return (
    <div className="" style={{ height: "600px" }}>
      <h1>Dashboard Seite</h1>

      <div className="d-flex justify-content-around my-4">
        <Button onClick={() => listContribution()}>Beiträge anzeigen</Button>
        <Button onClick={() => changeToUrl("/createContribution")}>
          Beitrag erstellen
        </Button>
        {/* <Button>Beiträge löschen</Button> */}
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75">
          <div className="d-flex flex-column g-4">


        {contributions.map((conn, index) => (
          
          <div className="border border-2 border-primary rounded p-4 my-3" key={index}>
            <h3>{conn["titel"]}</h3>
            <p>{conn["text"]}</p>
            <Button onClick={() => deleteContribution(conn["_id"])}>löschen</Button>
          </div>
        ))}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
