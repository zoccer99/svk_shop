import React from "react";
import axios from "axios";
import { Button, Form, Label } from "react-bootstrap";

class ContributionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autor: "",
      titel: "",
      text: "",
      teamClass: "Erste Mannschaft",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    event.preventDefault();

    const newContribution = {
      autor: this.state.autor,
      titel: this.state.titel,
      text: this.state.text,
      teamClass: this.state.teamClass,
      image: this.state.image,
      zeit: new Date(),
    };

    if (
      (newContribution["autor"] !== "") &
      (newContribution["titel"] !== "") &
      (newContribution["text"] !== "") &
      (newContribution["teamClass"] !== "")
    ) {
      // axios
      // .post("http://localhost:5000/Contribution/add", newContribution)
      //   .catch((err) => console.log(err));
      axios
        .post(
          "https://svkretzschau.herokuapp.com/Contribution/add",
          newContribution
        )
        .then(() => {
          alert("erfolgreich hinzugefügt");
          this.setState({
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
    } else {
      alert("Bitte alle Felder ausfüllen!");
    }
    console.log(this.state);
  }

  render() {
    return (
      <Form className="d-flex flex-column mx-5" onSubmit={this.handleSubmit}>
        {" "}
        <Form.Label>Autor:</Form.Label>
        <Form.Control
          name="autor"
          type="text"
          value={this.state.autor}
          onChange={this.handleChange}
        />{" "}
        <Form.Label>Titel:</Form.Label>
        <Form.Control
          name="titel"
          type="text"
          value={this.state.titel}
          onChange={this.handleChange}
        />{" "}
        <Form.Label>Team:</Form.Label>
        <Form.Control
          as="select"
          type="text"
          name="teamClass"
          value="Erste Mannschaft"
          onChange={this.handleChange}
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
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Button
          className="mt-3"
          type="submit"
          value="Absenden"
          onClick={this.handleSubmit}
        >
          {" "}
          Absenden{" "}
        </Button>
      </Form>
    );
  }
}

export default ContributionForm;
