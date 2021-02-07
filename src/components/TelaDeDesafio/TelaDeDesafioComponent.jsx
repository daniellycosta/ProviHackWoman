import React from "react";
import { Container, Form, Button, Jumbotron } from "react-bootstrap";
import "./style.css";
import logo from "../../assets/images/logo-branca-sem-nome.png";


export const TelaDeDesafioComponent = (props) => {
  return (


    <Container classname="container">
      <br />


      <Jumbotron classname="Jumbotron">
        <div>
          <img
            alt=""
            src={logo}
            height="30"
            className="d-inline-block align-top"
          />
          <h1>Trampo Tech</h1>

        </div>
        <br />

        <h3>SOMserine</h3>


        <p> SOMserine é um serviço de streaming de música,
        podcast e vídeo que foi lançado oficialmente em 7 de outubro de 2008.
        É o serviço de streaming mais popular e usado do mundo.
          Ele é desenvolvido pela startup SOMserine AB em Estocolmo, Suécia </p>
        <br />
        <h4>Backend</h4>
        <h4>Desafio de API</h4>
        <p>Consuma a API da SOMserine em uma tela de login
        </p>
        <p>URL: https://somserine.com.br/api</p>
        <p>Operacional:</p>
        <p>Key Header: TokenSonserine</p>
        <p>Obrigatório*</p>
        <p>Input: Tipo de dado</p>
        <p>Nome: string</p>
        <p>email: string</p>




        <Button classname="bt" type="submit">
          Aceitar desafio
        </Button>

      </Jumbotron>
    </Container>

  );
};
