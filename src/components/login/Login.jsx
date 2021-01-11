import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Login(props) {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const [show, setShow] = useState(false);

  const [loginClose, setLoginClose] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  Axios.defaults.withCredentials = true;
  const register = () => {
    Axios.post("https://kursna-lista.herokuapp.com/api/register", {
      username: usernameReg,
      password: passwordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("https://kursna-lista.herokuapp.com/api/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
        setTimeout(() => {
          setLoginClose(handleClose);
        }, 2000);

        setTimeout(() => {
          window.location.reload()
        }, 3000);

      }
    });
  };

  useEffect(() => {
    Axios.get("https://kursna-lista.herokuapp.com/api/login")
      .then(response => {
        console.log(response)
        if (response.data.loggedIn) {
          setLoginStatus(response.data.user[0].username)
          setLoggedIn(response.data.loggedIn)
        }
      })
  }, [])

  return (
    <>
      <Button variant="danger" 
      onClick={loggedIn ? props.handleDelete : handleShow}
      disabled={props.disable === 0 ? true : false}>
        {props.isLoading ? "Loading..." : "Obrisi"}
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <h1>Login</h1>
        </Modal.Header>
        <Modal.Body>
        <h1>Registration</h1>
          <Form>
            <Form.Group controlId="formBasicUsernameReg">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsernameReg(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPasswordReg">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Password"
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" onClick={register}>
              Register
            </Button>
          </Form>

          <Form>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
          </Form>

          {loginStatus !== "" ? (
            <h1>{`Dobrodosli, uspeno ste ulogovani kao: ${loginStatus}`}</h1>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={login}>
            Login
          </Button>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;
