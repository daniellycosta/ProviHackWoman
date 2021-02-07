import React, { useEffect, useState } from "react";
import {
  Form,
  Container,
  Jumbotron,
  Image,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Header } from "../../common/Header";
import { useHistory } from "react-router-dom";
import { simularAvatar } from "../../utils/simularAvatar";
import axios from "axios";

export const CandidatoComponent = (props) => {
  const history = useHistory();
  const [usuario, setUsuario] = useState({});

  const getUsuario = async () => {
    try {
      const pathnameArray = window.location.pathname.split("/");
      const usuarioId = pathnameArray[2];
      const response = await axios.get(
        `https://601f1a0db5a0e9001706a2c9.mockapi.io/api/users/${usuarioId}`
      );
      if (response.data) setUsuario(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(getUsuario, []);

  return (
    <>
      <Header titulo="Candidato" bannerClass="banner-desafios">
        <p>Aqui você encontrará mais informações sobre o candidato</p>
      </Header>

      <Container>
        <Jumbotron style={{ margin: "25px 0px" }}>
          <Row>
            <Col
              xs={12}
              sm={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                src={simularAvatar(usuario.id)}
                width={300}
                height={300}
                roundedCircle
              />
            </Col>
            <Col xs={12} sm={6}>
              <Form>
                <Form.Group controlId="nomeCandidato">
                  <Form.Label>Nome </Form.Label>
                  <Form.Control
                    type="input"
                    value={usuario && `${usuario.nome} ${usuario.sobrenome}`}
                    disabled
                  />
                </Form.Group>

                <Form.Group controlId="emailCandidato">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    type="input"
                    value={usuario && usuario.email}
                    disabled
                  />
                </Form.Group>

                <Form.Group controlId="telefoneCandidato">
                  <Form.Label>Telefone </Form.Label>
                  <Form.Control
                    type="input"
                    value={usuario && usuario.telefone}
                    disabled
                  />
                </Form.Group>

                <Form.Group controlId="linkProjeto">
                  <Form.Label>Linkedin </Form.Label>
                  <Form.Control
                    value={usuario && usuario.linkedin}
                    type="url"
                    disabled
                  />
                </Form.Group>

                <Form.Group controlId="linkProjeto">
                  <Form.Label>Portifolio </Form.Label>
                  <Form.Control
                    value={usuario && usuario.portifolio}
                    type="url"
                    disabled
                  />
                </Form.Group>
              </Form>
              <Button
                className="button-enviar"
                onClick={() => history.goBack()}
              >
                Voltar
              </Button>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </>
  );
};
