import "./style.css";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Card } from "../../common/Card";
import { Header } from "../../common/Header";
import { Container, Row, Col } from "react-bootstrap";

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
      <div>
        <Header titulo="Candidatos" bannerClass="banner-candidatos" comFiltro>
          <>
            <p>
              Aqui você encontrará os candidatos cadastrados na plataforma.
              Clicando neles é possível ver quais desafios eles responderam.
            </p>
            <p>
              É possível ainda ver apenas os que responderam a desafios
              cadastrados pela sua empresa
            </p>
          </>
        </Header>
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
