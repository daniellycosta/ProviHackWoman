import React from "react";
import { Form, Button } from "react-bootstrap";

export const CadastroComponent = (props) => {
  return (
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Nome</Form.Label>
    <Form.Control type="name" placeholder="Nome*" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>Sobrenome </Form.Label>
    <Form.Control type="email" placeholder="Sobrenome" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
    <Form.Label>E-mail </Form.Label>
    <Form.Control type="email" placeholder="E-mail" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" placeholder="Senha" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Enviar
  </Button>
</Form>
    

    



  );
};
