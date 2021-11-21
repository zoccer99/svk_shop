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
      teamClass: "",
      image: null,
      category: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,


    });
  }

  handleImageChange(event) {
    const target = event.target;
    this.setState({
      image: target.files[0],
    })
  }


  handleSubmit(event) {
    event.preventDefault();

    const formdata = new FormData();

    formdata.append("myFile", this.state.image);


    const newContribution = {
      autor: this.state.autor,
      titel: this.state.titel,
      text: this.state.text,
      teamClass: this.state.teamClass,
      category: this.state.category,
      image: this.state.image,
      zeit: new Date(),
    };

    if (
      (newContribution["autor"] !== "") &
      (newContribution["titel"] !== "") &
      (newContribution["text"] !== "") &
      (newContribution["teamClass"] !== "") &
      (newContribution["category"] !== "")
    ) {
      axios
        .post("http://localhost:5000/Contribution/add", newContribution)
        .catch((err) => console.log(err));

      axios.post("http://localhost:5000/Contribution/add",formdata);
    }
    console.log(this.state);

    // axios
    //   .post("http://localhost:3000/Contribution/add", this.state.image)
    //   .catch((err) => console.log(err));

    this.setState({
      autor: "",
      titel: "",
      text: "",
      teamClass: "",
      category: "",
      image: null,
    });
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
          value={this.state.teamClass}
          onChange={this.handleChange}
        >
          <option value="Erste Mannschaft">Erste Mannschaft</option>
          <option value="Zweite Mannschaft">Zweite Mannschaft</option>
          <option value="Bambinies">Bambinies</option>
        </Form.Control>
        <Form.Label>Text:</Form.Label>
        <Form.Control
          as="textarea"
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Form.Label>Kategorie:</Form.Label>
        <Form.Control
          type="text"
          name="category"
          value={this.state.category}
          onChange={this.handleChange}
        />
        <input type="file" accept=".png, .jpg, .jpeg" name="image" onChange={this.handleImageChange} />
        <Button className="mt-3" type="submit" value="Absenden" onClick={this.handleSubmit}>
          {" "}
          Absenden{" "}
        </Button>
      </Form>
    );
  }
}

export default ContributionForm;
