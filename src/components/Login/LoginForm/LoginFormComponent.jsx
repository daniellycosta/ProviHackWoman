import "./style.css";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const LoginFormComponent = (props) => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const history = useHistory();

  const simularLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("permissaoMock", "");
    if (email.includes("empresa")) {
      localStorage.setItem("permissaoMock", "empresa");
      history.push("/candidatos");
    } else {
      localStorage.setItem("permissaoMock", "candidato");
      history.push("/desafios");
    }
  };

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(event) => setSenha(event.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="botao-login"
        onClick={simularLogin}
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
