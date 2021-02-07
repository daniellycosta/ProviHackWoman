import React from "react";
import { Form, Button, Dropdown, Jumbotron, Container } from "react-bootstrap";

export const CadastroCandidatoComponent = (props) => {
  return (
  <Container>
    <Jumbotron>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nome*</Form.Label>
          <Form.Control type="input" placeholder="Nome" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Sobrenome* </Form.Label>
          <Form.Control type="input" placeholder="Sobrenome" />
        </Form.Group>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>LinkedIn </Form.Label>
          <Form.Control type="input" placeholder="LinkedIn" />
        </Form.Group>
        
        <Form.Group controlId="formBasicEmail">
          <Form.Label>E-mail* </Form.Label>
          <Form.Control type="email" placeholder="E-mail" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha*</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>

        <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Selecione sua área
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Fron-end</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Back-end</Dropdown.Item>
          <Dropdown.Item href="#/action-3">UX/UI</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        <br />
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Jumbotron>
    </Container>
  );
};
