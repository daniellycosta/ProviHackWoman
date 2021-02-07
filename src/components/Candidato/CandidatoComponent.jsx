import React, { useEffect, useState } from "react";
import {
  Form,
  Container,
  Jumbotron,
  Image,
  Row,
  Col,
  Button,
  Modal,
} from "react-bootstrap";
import { Header } from "../../common/Header";
import { Card } from "../../common/Card";
import { useHistory } from "react-router-dom";
import { simularAvatar } from "../../utils/simularAvatar";
import axios from "axios";

export const CandidatoComponent = (props) => {
  const history = useHistory();
  const [usuario, setUsuario] = useState({});
  const [desafios, setDesafios] = useState([]);
  const [projetos, setProjetos] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  const getProjetos = async () => {
    try {
      const pathnameArray = window.location.pathname.split("/");
      const usuarioId = pathnameArray[2];
      const response = await axios.get(
        `https://601f1a0db5a0e9001706a2c9.mockapi.io/api/users/${usuarioId}/projetos`
      );
      if (response.data) setProjetos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getDesafios = async () => {
    try {
      const response = await axios.get(
        `https://601f1a0db5a0e9001706a2c9.mockapi.io/api/desafios`
      );
      if (response.data) setDesafios(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(getUsuario, []);
  useEffect(getDesafios, []);
  useEffect(getProjetos, []);

  const getDesafiosDoCandidato = () => {
    const idDesafiosDoCandidato = projetos.map((projeto) => projeto.desafioId);
    const desafiosCandidato = desafios.filter(({ id }) =>
      idDesafiosDoCandidato.includes(id)
    );

    return desafiosCandidato;
  };

  const getLinkProjeto = (idDesafio) => {
    const projeto = projetos.find((projeto) => projeto.desafioId === idDesafio);
    return projeto && projeto.repositorio;
  };

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

      <Container>
        <Jumbotron style={{ margin: "25px 0px" }}>
          <h2>Desafios Concluídos</h2>
          <Container fluid>
            <Row className="row-margin">
              {getDesafiosDoCandidato().map(
                ({ id, titulo, empresa, descricao, tags }) => (
                  <Col xs={12} md={6} className="col-margin">
                    <Card
                      onClick={handleShow}
                      semNovo
                      key={id}
                      dados={{
                        titulo,
                        descricao,
                        subtitulo: `Empresa: ${empresa}`,
                        tags,
                      }}
                    />
                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>Link do projeto</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>{getLinkProjeto(id)}</Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Fechar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Col>
                )
              )}
            </Row>
          </Container>
        </Jumbotron>
      </Container>
    </>
  );
};
