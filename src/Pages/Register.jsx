import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Use navigate for redirecting

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/register",
        {
          email,
          password,
        }
      );

      setMessage(response.data.message); // "User created successfully"

      // Redirect to Login page after successful registration
      navigate("/login");
    } catch (err) {
      setMessage(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="Register container mt-5">
      <h2 className="mb-4">Sign Up</h2>
      {message && <p>{message}</p>}
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formRegisterEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Create password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Sign Up
        </Button>
      </Form>

      {/* Button to navigate to Login page */}
      <Button
        variant="link"
        onClick={() => navigate("/login")}
        className="mt-3"
      >
        Already have an account? Log In
      </Button>
    </div>
  );
}

export default Register;
