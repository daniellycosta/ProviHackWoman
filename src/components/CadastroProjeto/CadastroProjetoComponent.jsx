import React, { useEffect, useState } from "react";
import { Form, Container, Jumbotron, Button } from "react-bootstrap";
import { Header } from "../../common/Header";
import { useHistory } from "react-router-dom";
import axios from "axios";

export const CadastroProjetoComponent = (props) => {
  const history = useHistory();
  const [desafio, setDesafio] = useState({});
  const [repositorio, setRepositorio] = useState("");

  const getDesafio = async () => {
    try {
      const pathnameArray = window.location.pathname.split("/");
      const desafioId = pathnameArray[2];
      const response = await axios.get(
        `https://601f1a0db5a0e9001706a2c9.mockapi.io/api/desafios/${desafioId}`
      );
      if (response.data) setDesafio(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(getDesafio, []);

  const simularEnvio = async (event) => {
    try {
      event.preventDefault();
      const userId = 1;
      const dados = {
        userId,
        repositorio,
        desafioId: desafio.id,
      };
      const response = await axios.post(
        `https://601f1a0db5a0e9001706a2c9.mockapi.io/api/users/${userId}/projetos`,
        dados
      );
      setRepositorio("");
      history.push("/desafios");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header titulo="Cadastro de Projeto" bannerClass="banner-desafios">
        <p>Acabou o desafio? Parabéns! um projeto a mais no seu portifolio!</p>
        <p>Submeta o link do repositório para que as empresas possam ver</p>
      </Header>

      <Container>
        <Jumbotron style={{ margin: "25px 0px" }}>
          <Form>
            <Form.Group controlId="nomeDesafio">
              <Form.Label>Título do projeto </Form.Label>
              <Form.Control
                type="input"
                value={desafio && desafio.titulo}
                disabled
              />
            </Form.Group>

            <Form.Group controlId="textoDesafio">
              <Form.Label>Descrição</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={desafio && desafio.descricao}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="nomeDesafio">
              <Form.Label>Empresa </Form.Label>
              <Form.Control
                type="input"
                value={desafio && desafio.empresa}
                disabled
              />
            </Form.Group>

            <Form.Group controlId="linkProjeto">
              <Form.Label>URL do repositório no GitHub* </Form.Label>
              <Form.Control
                value={repositorio}
                type="url"
                onChange={(event) => setRepositorio(event.target.value)}
              />
            </Form.Group>

            <Button
              type="submit"
              className="button-enviar"
              onClick={simularEnvio}
            >
              Enviar
            </Button>
          </Form>
        </Jumbotron>
      </Container>
    </>
  );
};
