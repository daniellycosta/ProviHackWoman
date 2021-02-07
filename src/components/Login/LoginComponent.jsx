import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export const LoginComponent = (props) => {
  return (


    <Container>
      <h1>Olá, digite seu login e senha!</h1>
      <br/>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        
        <p> Não lembro a senha </p>

        <Button variant="primary" type="submit">
          Entrar
        </Button>
      </Form>
      
    </Container>

  );
};
