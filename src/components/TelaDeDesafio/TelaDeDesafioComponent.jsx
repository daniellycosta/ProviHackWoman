import React, { useState, useEffect } from "react";
import { Container, Button, Jumbotron } from "react-bootstrap";
import "./style.css";
import axios from "axios";
import { Header } from "../../common/Header";
import { useHistory } from "react-router-dom";

export const TelaDeDesafioComponent = (props) => {
  const history = useHistory();
  const [desafio, setDesafio] = useState({});

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

  return (
    <>
      <Header titulo="Desafio" bannerClass="banner-desafios">
        <p>Aqui você encontrará mais detalhes do desafio escolhido</p>
      </Header>
      <Container classname="container">
        <br />
        <Jumbotron classname="Jumbotron">
          <h3 className="titulos">{desafio.titulo}</h3>
          <p>{desafio.descricao}</p>
          <Button
            className="button-enviar"
            onClick={() => {
              history.push(`/cadastro-projeto/${desafio.id}`);
            }}
          >
            Submeter Desafio
          </Button>
        </Jumbotron>
      </Container>
    </>
  );
};
