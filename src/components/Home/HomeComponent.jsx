import React from "react";
import { Container, Form, Button, Col, Row, Image } from "react-bootstrap";

export const HomeComponent = (props) => {
  return (


    <Container fluid>
      <Row>
				<Col>
					<h1>Inicie seu desafio!</h1>
					<br/>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Quisque vitae nunc sit amet arcu ornare blandit nec et 
						augue. Sed vel tempus erat, malesuada luctus lorem. 
						Mauris at vulputate odio. Aliquam venenatis augue non iaculis accumsan. 
						Praesent et orci ac urna ultrices posuere vitae ut eros. Quisque laoreet quis dui.</p>

					<Button variant="primary">Entrar</Button>{' '}
					<Button variant="primary">Cadastrar</Button>{' '}
				</Col>
      	<Col>
          <h1>FOTO</h1>
        </Col>
      </Row>
      <br/>
      <Row>
        <Col><h1>A TrampoTech ajuda você a impulsionar sua carreira</h1></Col>
      </Row>
      <br/>
      <Row>
				<Col>
					<Image src="holder.js/171x180" thumbnail />
				</Col>
				<Col>
					<Image src="holder.js/171x180" thumbnail />
				</Col>
				<Col>
					<Image src="holder.js/171x180" thumbnail />
				</Col>
				<Col>
					<Image src="holder.js/171x180" thumbnail />
				</Col>
  		</Row>
      <br/>
      <h1>É muito fácil se preparar com desafios</h1>
      <br/>
      <Row>
        <Col>
        	<h1>FOTO</h1>
        </Col>
        <Col>
          <ol>
            <li>Cadastro</li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus.</p>
            <li>Desafios</li>
            	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus.</p>
            <li>Mãos à obra!</li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus.</p>
            <li>Feedback</li>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacus.</p>
          </ol>     
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>A nossa plataforma é gratuita para profissionais</h2>
        </Col>
      </Row>
    </Container>
  );
};
