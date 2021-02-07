import React from "react";
import { Form, FormControl, Container, Jumbotron, Button } from "react-bootstrap";

export const CadastroProjetoComponent = (props) => {
  return (
    

      <Container>
        <h1>Cadastro de Projeto</h1>

        <Jumbotron>
          <Form>

            <Form.Group controlId="nomeDesafio">
              <Form.Label>Título do projeto* </Form.Label>
              <Form.Control type="input" />
            </Form.Group>

            <Form.Group controlId="textoDesafio">
              <Form.Label>Descrição*</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            
            <Form.Group controlId="nomeDesafio">
              <Form.Label>URL do repositório no GitHub* </Form.Label>
              <Form.Control type="url" />
            </Form.Group>

            <Form.Control as="select">
              <option>Selecione a área</option>
              <option>Front-end</option>
              <option>Back-end</option>
              <option>UX/UI</option>
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
