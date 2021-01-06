import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './navigacija.css'
import Clock from "./Clock"

function Navigacija() {
  return (
    <div>
      <Navbar expand="xl"
        className="nav-op m-auto "
        variant="light" >
        <Navbar.Brand href="/">
          <img
            width="150"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
            src="logonbs.png"
          />
        </Navbar.Brand>

        <h2 className="nav-text">Trenutna kursna lista</h2>

        <div className="m-auto">
        <Clock />
        </div>
    
      
      </Navbar>

    
    </div>
  );
}

export default Navigacija;
