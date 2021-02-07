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
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Meus Desafios</Nav.Link>
          <Nav.Link href="#pricing">Perfil</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
    );
  };
