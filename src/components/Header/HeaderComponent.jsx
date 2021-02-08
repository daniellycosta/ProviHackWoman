  import "./style.css";
  import logo from "../../assets/images/logo-branca-sem-nome.png";
  import React from "react";
  import { Navbar, Nav } from "react-bootstrap";
  
  export const HeaderComponent = (props) => {
    return (
      <Navbar variant="dark" className="navbar">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            height="30"
            className="d-inline-block align-top"
          />
          TrampoTech
        </Navbar.Brand>
      </Navbar>
    );
  };
