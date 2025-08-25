import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const EditContribution = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    autor: "",
    titel: "",
    text: "",
    teamClass: "",
    time: "",
  });

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URI}/Contribution/${id}`)
      .then((res) => {
        const data = res.data;
        setValues(data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    setValues({ ...values, [name]: target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedContribution = {
      autor: values.autor,
      titel: values.titel,
      text: values.text,
      teamClass: values.teamClass,
      zeit: values.time,
    };

    axios
      .put(`${process.env.REACT_APP_BACKEND_URI}/Contribution/${id}`, updatedContribution)
      .then(() => {
        console.log("Beitrag erfolgreich aktualisiert");
        navigate("/admin/dashboard");
      })
      .catch((err) => {
        console.log(err);
        console.log("Senden fehlgeschlagen");
      });
  };

  return (
    <Form className="d-flex flex-column mx-5" onSubmit={handleSubmit}>
      <Form.Label>Autor:</Form.Label>
      <Form.Control
        as="select"
        type="text"
        name="autor"
        value={values.autor}
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
        value={values.titel}
        onChange={handleChange}
      />
      <Form.Label>Team:</Form.Label>
      <Form.Control
        as="select"
        type="text"
        name="teamClass"
        value={values.teamClass}
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
        value={values.text}
        onChange={handleChange}
      />
      <Form.Label>Datum:</Form.Label>
      <Form.Control
        type="date"
        name="time"
        value={values.time}
        onChange={handleChange}
      />
      <Button
        className="mt-3"
        type="submit"
        value="Absenden"
      >
        Änderungen speichern
      </Button>
    </Form>
  );
};

export default EditContribution;
