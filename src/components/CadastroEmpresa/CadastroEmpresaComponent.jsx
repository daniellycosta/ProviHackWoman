import React from "react";
import { Form, Button, Dropdown, Jumbotron, Container } from "react-bootstrap";

export const CadastroEmpresaComponent = (props) => {
  return (
  <Container>
    <Jumbotron>
      <h3>Preencha os dados da empresa</h3>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Razão Social*</Form.Label>
              <Form.Control type="input"/>
            </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Endereço* </Form.Label>
              <Form.Control type="input" />
          </Form.Group>
            
          <Form.Group controlId="formBasicEmail">
            <Form.Label>CNPJ*</Form.Label>
              <Form.Control type="input" />
          </Form.Group>
            
          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail* </Form.Label>
              <Form.Control type="email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha*</Form.Label>
              <Form.Control type="password"/>
          </Form.Group>
            
          <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Conte um pouco sobre sua empresa</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder = "" />
          </Form.Group>
            {["checkbox"].map((type) => (
              <div key={'default'} className="mb-3">
                <Form.Check 
                  type={type}
                  id={"default"}
                  label={"Aceito os Termos e Condições e autorizo o uso de acordo com a Declaração de Privacidade"}
                />
              </div>
            ))}
          <Button variant="primary" type="submit">
            Continuar
          </Button>
        </Form>
      </Jumbotron>
    </Container>
  );
};
