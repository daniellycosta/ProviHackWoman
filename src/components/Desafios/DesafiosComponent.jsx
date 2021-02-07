import "./style.css";
import React, { useState, useEffect } from "react";
import { MenuSuperior } from "../../common/MenuSuperior";
import {
  Jumbotron,
  Container,
  Card,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import axios from "axios";

export const DesafiosComponent = (props) => {
  const [desafios, setDesafios] = useState([]);

  const getDesafios = async () => {
    try {
      const response = await axios.get(
        "https://601f1a0db5a0e9001706a2c9.mockapi.io/api/desafios"
      );
      setDesafios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(getDesafios, []);

  return (
    <>
      <MenuSuperior />
      <div className="banner">
        <div className="layer">
          <Jumbotron fluid className="jumbotron-cores jumbotron-padding">
            <Container>
              <h1>Desafios</h1>
              <p>
                Aqui você encontrará os desafios previamente cadastrados por
                empresas para praticar, melhorar seu portifólio ou até mesmo
                conseguir seu tão sonhado "sim!"
              </p>
            </Container>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Pesquisar"
                className="margem-esquerda"
              />
              <Button className="margem-esquerda button-search">
                <Search />
              </Button>
            </Form>
          </Jumbotron>
        </div>
      </div>
      {desafios.map((desafio) => (
        <Card style={{ width: "100%", margin: "10px" }} key={desafio.id}>
          <Card.Body>
            <Card.Title>{desafio.titulo}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {desafio.empresa}
            </Card.Subtitle>
            <Card.Text>{desafio.descricao}</Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
