import "./style.css";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const LoginFormComponent = (props) => {
  const history = useHistory();

  const logar = (event) => {
    event.preventDefault();
    history.push("/desafios");
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="botao-login"
        onClick={logar}
      >
        Entrar
      </Button>
      <div className="sem-conta-container">
        <p>Ainda não tem conta?</p>
        <a href="/criar/candidato">Cadastre-se</a>
      </div>
    </Form>
  );
};
