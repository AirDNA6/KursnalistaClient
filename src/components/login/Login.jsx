import React from 'react'
import { Form, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
    return (
    <div>
     <Form>
  <Form.Group controlId="formBasicUsername">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  )
}

export default Login
