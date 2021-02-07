
import "./style.css";
import React, { useState } from "react";
import { Form, Container, Jumbotron, Button } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import { Header } from "../../common/Header";

export const CadastroDesafioComponent = (props) => {
  const [empresa, setEmpresa] = useState("");
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tags, setTags] = useState([]);

  const options = [
    { value: "Front", label: "Frontend" },
    { value: "Back", label: "Backend" },
    { value: "UI/UX", label: "UI/UX" },
  ];

  const simularCadastro = async (event) => {
    try {
      event.preventDefault();
      const tagsProcessadas = tags.map((tag) => tag.value);
      const data = { titulo, descricao, empresa, tags: tagsProcessadas };
      const response = await axios.post(
        "https://601f1a0db5a0e9001706a2c9.mockapi.io/api/desafios",
        data
      );
      limparCampos();
    } catch (error) {
      console.error(error);
    }
  };

  const limparCampos = () => {
    setEmpresa("");
    setTitulo("");
    setDescricao("");
    setTags([]);
  };

  return (
    <>
      <Header titulo="Cadastrar desafios" bannerClass="banner-candidatos">
        <>
          <p>
            Preencha os dados abaixo para cadastrar um novo desafio na
            plataforma
          </p>
        </>
      </Header>
      <Container>
        <Jumbotron style={{ margin: "25px 0px" }}>
          <Form>
            <Form.Group controlId="nomeEmpresa">
              <Form.Label>Nome da empresa*</Form.Label>
              <Form.Control
                value={empresa}
                type="input"
                onChange={(event) => setEmpresa(event.target.value)}
              />

            </Form.Group>

            <Form.Group controlId="nomeDesafio">
              <Form.Label>Título* </Form.Label>

              <Form.Control
                type="input"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="textoDesafio">
              <Form.Label>Descrição*</Form.Label>

              <Form.Control
                as="textarea"
                rows={3}
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
              />
            </Form.Group>
            <Select
              value={tags}
              isMulti
              options={options}
              onChange={(selecao) => setTags(selecao)}
            />
            <Button
              className="button-enviar"
              type="submit"
              onClick={simularCadastro}
            >
              Enviar
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    </>

  );
};
