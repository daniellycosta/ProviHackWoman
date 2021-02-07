import React from "react";
import { Form, FormControl, Container, Jumbotron, Button } from "react-bootstrap";

export const CadastroDesafioComponent = (props) => {
  return (

    <Container>
      <h1>Cadastro de desafio</h1>

      <Jumbotron>
        <br />
        <h3>Preencha os dados abaixo</h3>
        <Form>
          <Form.Group controlId="nomeEmpresa">
            <Form.Label>Nome da empresa*</Form.Label>
            <Form.Control type="input" />
          </Form.Group>

          <Form.Group controlId="nomeDesafio">
            <Form.Label>Título* </Form.Label>
            <Form.Control type="input" />
          </Form.Group>

          <Form.Group controlId="textoDesafio">
            <Form.Label>Descrição*</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Control as="select">
            <option>Escolha a área</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Ux/UI</option>
          </Form.Control>
          <br />

          <Button variant="primary" type="submit">
            Enviar
        </Button>

        </Form>

      </Jumbotron>
    </Container>





  );
};
