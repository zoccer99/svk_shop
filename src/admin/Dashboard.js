import React, { useState, useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { FaPlus, FaTrash } from "react-icons/fa";
import "../css/dashboard.css";

function Dashboard() {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    listContribution();
  }, []);

  const changeToUrl = (url) => {
    window.location.href = url;
  };

  const listContribution = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URI}/Contribution/`)
      .then((res) => {
        const data = res.data;
        setContributions(data);
      })
      .catch((err) => console.log(err));
  };

  const deleteContribution = (id) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URI}/Contribution`, {
        data: { _id: id },
      })
      .then((res) => {
        if (res.status === 200) {
          alert("Beitrag gelöscht");
          listContribution();
        }
      })
      .catch((err) => alert(`Netzwerkfehler: ${err}`));
  };

  return (
    <Container className="dashboard-container">
      <Row className="mb-4">
        <Col>
          <h1 className="dashboard-title">Dashboard</h1>
        </Col>
        <Col className="text-end">
          <Button
            variant="primary"
            onClick={() => changeToUrl("/createContribution")}
          >
            <FaPlus className="me-2" />
            Neuer Beitrag
          </Button>
        </Col>
      </Row>

      <Row>
        {contributions.map((conn, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="contribution-card">
              <Card.Body>
                <Card.Title>{conn["titel"]}</Card.Title>
                <Card.Text>{conn["text"]}</Card.Text>
                <Button
                  variant="danger"
                  onClick={() => deleteContribution(conn["_id"])}
                >
                  <FaTrash className="me-2" />
                  Löschen
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Dashboard;
