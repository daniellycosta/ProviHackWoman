import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

export const DesafioComponent = (props) => {
  return (
    <div>
      <h1>Olá, Luna!</h1>
      <br/>
      <InputGroup size="lg">
        <InputGroup.Prepend>
          <InputGroup.Text id="inputGroup-sizing-lg">Busca por desafio</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
      </InputGroup>
      <br />
      <h3>Sugestões</h3>
    </div>

  );
};
