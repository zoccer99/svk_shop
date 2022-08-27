import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Label } from "react-bootstrap";

import examplePic from "../pictures/erste/Bild19.JPG";

import Card from "../Blog/Card";
import FullContribution from "../Blog/FullContribution";

const ContributionForm = () => {
  const [showMockup, setShowMockup] = useState(false);
  const [values, setValues] = useState({
    autor: "Christian Gebert",
    titel: "",
    text: "",
    teamClass: "Erste Mannschaft",
  });

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    setValues({ ...values, [name]: target.value });
    console.log(values);
    setShowMockup(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newContribution = {
      autor: values["autor"],
      titel: values["titel"],
      text: values["text"],
      teamClass: values["teamClass"],
      image: values["image"],
      zeit: new Date(),
    };

    if (
      newContribution.autor === "" ||
      newContribution.titel === "" ||
      newContribution.text === "" ||
      newContribution.text === ""
    ) {
      alert("Bitte alle Felder ausfüllen");
    } //check if anything is empty
    else {
      // axios
      // .post("http://localhost:5000/Contribution/add", newContribution)
      axios
        .post(
          "https://svkretzschau.herokuapp.com/Contribution/add",
          newContribution
        )
        .then(() => {
          alert("erfolgreich hinzugefügt");
          setValues({
            autor: "",
            titel: "",
            text: "",
            teamClass: "",
          });
        })
        .catch((err) => {
          console.log(err);
          alert("senden fehlgeschlagen");
        });
    }
  };

  return (
    <>
      <Form className="d-flex flex-column mx-5" onSubmit={handleSubmit}>
        {" "}
        <Form.Label>Autor:</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="autor"
          onChange={handleChange}
        >
          <option value="Christian Gebert">Christian Gebert</option>
          <option value="Matthias Scholle">Matthias Scholle</option>
          <option value="Leon Gottschild">Leon Gottschild</option>
        </Form.Control>
        <Form.Label>Titel:</Form.Label>
        <Form.Control
          name="titel"
          type="text"
          //value={this.state.titel}
          onChange={handleChange}
        />{" "}
        <Form.Label>Team:</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="teamClass"
          onChange={handleChange}
        >
          <option value="Erste Mannschaft">Erste Mannschaft</option>
          <option value="Zweite Mannschaft">Zweite Mannschaft</option>
          <option value="Bambinies">Bambinies</option>
          <option value="Verein">Verein</option>
        </Form.Control>
        <Form.Label>Text:</Form.Label>
        <Form.Control
          as="textarea"
          name="text"
          // value={this.state.text}
          onChange={handleChange}
        />
        <Button
          className="mt-3"
          type="submit"
          value="Absenden"
          onClick={handleSubmit}
        >
          {" "}
          Absenden{" "}
        </Button>
      </Form>
      <div className="d-flex flex-column align-items-center mx-5">
        {showMockup && (
          <Card
            style={{ width: "300px" }}
            className="w-50"
            teamClass={values["teamClass"]}
            imgUrl={examplePic}
            titel={values["titel"]}
            text={values["text"]}
            category={values["category"]}
            author={values["autor"]}
            time={new Date(values["zeit"]).toLocaleDateString("de-DE", options)}
          />
        )}
        <div>--------------</div>
        {showMockup && (
          <FullContribution
            classname="my-4"
            headline={values["titel"]}
            text={values["text"]}
          />
        )}
      </div>
    </>
  );
};

export default ContributionForm;
