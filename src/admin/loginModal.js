import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../Hooks/useContext'; // Import AuthContext

const LoginModal = ({ show, onHide }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { login } = useContext(AuthContext); // Use AuthContext

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URI}/Users/login`, {
        username,
        password,
      });
      login(response.data.accessToken, response.data.username); // Use login function from AuthContext
      history.push('/dashboard');
      onHide(); // Close modal on successful login
    } catch (err) {
      setError('Invalid credentials');
      console.error('Login failed:', err);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          {error && <p className="text-danger">{error}</p>}
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
