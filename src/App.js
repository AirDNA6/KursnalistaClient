import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layouts/Navigacija";
import Tabela from "./components/Tabela";
import FooterPage from "./components/layouts/FooterPage"
import Login from "./components/login/Login"

function App(props) {

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Tabela />
      </Container>
      <FooterPage />
    </div>
  );
}

export default App;
