import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import { Header } from "../Header";
import { useHistory } from "react-router-dom";
import home1  from "../../assets/images/home1.png"
import "./style.css";


export const HomeComponent = (props) => {
  const history = useHistory();
  return (
  
    <>
    <Header/> 
    <Container fluid = "md">
      <Row>
				<Col>
          <br/>
					<h1 id = "head1">Inicie seu desafio!</h1>
					<br/>
					<p id= "paragrafo-home">A TrampoTech auxilia profissionais de início de carreira ou em transição a se prepararem para processos seletivos, com a resolução de desafios, de forma gratuita. 
            Nosso objetivo é tornar sua jornada mais leve e confiante. 
            Inicie aqui a sua preparação para processos seletivos:
            Avalie seus conhecimentos com desafios preparados pelas melhores empresas do mercado. 
            Desafios do iniciante ao avançado!
            </p>
					<Button variant="primary" id = "botao-login"onClick={()=>history.push("/login")}>Entrar</Button>{' '}
					<Button variant="primary" id = "botao-cadastro">Cadastrar</Button>{' '}
				</Col>
      	<Col>
        <img src={home1} height="600" width="600" />
        </Col>
      </Row>
      <Row>
        <Col><h1 id = 'head1'>A TrampoTech ajuda você a impulsionar sua carreira</h1></Col>
      </Row>
      <br/>
      <Row>
        <Col>
          <h2 id ="head2">A nossa plataforma é gratuita para profissionais</h2>
        </Col>
      </Row>
    </Container>
  </>
  );
};
