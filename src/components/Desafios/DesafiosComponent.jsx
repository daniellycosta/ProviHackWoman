import "./style.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../../common/Card";
import { Container, Row, Col } from "react-bootstrap";
import { Header } from "../../common/Header";
import axios from "axios";

export const DesafiosComponent = (props) => {
  const history = useHistory();
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
      <div className="banner-desafios">
        <Header titulo="Desafios" comFiltro>
          <p>
            Aqui você encontrará os desafios previamente cadastrados por
            empresas para praticar, melhorar seu portifólio ou até mesmo
            conseguir seu tão sonhado "sim!"
          </p>
        </Header>
      </div>
      <Container fluid>
        <Row className="row-margin">
          {desafios.map(({ id, titulo, empresa, descricao, tags }) => (
            <Col xs={12} md={6} className="col-margin">
              <Card
                key={id}
                onClick={() => {
                  history.push(`/desafio/${id}`);
                }}
                dados={{
                  titulo,
                  descricao,
                  subtitulo: `Empresa: ${empresa}`,
                  tags,
                }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
