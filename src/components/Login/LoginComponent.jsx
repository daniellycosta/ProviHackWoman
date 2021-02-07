import "./style.css";
import logo from "../../assets/images/logo.png";
import React from "react";
import { Card, Container, Row, Col, Figure } from "react-bootstrap";
import { LoginForm } from "./LoginForm";

export const LoginComponent = (props) => {
  return (
    <div className="background">
      <div className="layer">
        <Container>
          <Row className="justify-content-md-center h-100">
            <Col md="auto col-sm-12 col">
              <Card className="card  card-login">
                <Figure.Image width={200} src={logo} className="logo" />
                <LoginForm />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
