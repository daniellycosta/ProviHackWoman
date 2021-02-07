import "./style.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { MenuSuperior } from "../../common/MenuSuperior";
import { Card } from "../../common/Card";
import {
  Jumbotron,
  Container,
  Form,
  FormControl,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { simularAvatar } from "../../utils/simularAvatar";
import axios from "axios";

export const CandidatosComponent = (props) => {
  const history = useHistory();
  const [desafios, setDesafios] = useState([]);

  const getDesafios = async () => {
    try {
      const response = await axios.get(
        "https://601f1a0db5a0e9001706a2c9.mockapi.io/api/users"
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
              <h1>Candidatos</h1>
              <p>
                Aqui você encontrará os candidatos cadastrados na plataforma.
                Clicando neles é possível ver quais desafios eles responderam.
              </p>
              <p>
                É possível ainda ver apenas os que responderam a desafios
                cadastrados pela sua empresa
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
      <Container fluid>
        <Row className="row-margin">
          {desafios.map(
            ({ id, nome, sobrenome, email, linkedin, portifolio }) => {
              const avatar = simularAvatar(id);
              return (
                <Col xs={12} md={6} className="col-margin">
                  <Card
                    key={id}
                    onClick={() => {
                      history.push(`/candidato/${id}`);
                    }}
                    dados={{
                      avatar,
                      titulo: `${nome} ${sobrenome}`,
                      descricao: `• Linkedin: ${linkedin} • Portifólio: ${portifolio}`,
                      subtitulo: `Email: ${email}`,
                    }}
                  />
                </Col>
              );
            }
          )}
        </Row>
      </Container>
    </>
  );
};
