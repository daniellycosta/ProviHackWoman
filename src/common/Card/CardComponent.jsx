import logoCode from "../../assets/images/code.jpg";
import logoArt from "../../assets/images/art.jpg";
import "./style.css";
import React from "react";
import { Card, Row, Col, Image, Badge } from "react-bootstrap";
import { simularTags } from "../../utils/simularTags";

export const CardComponent = (props) => {
  const { titulo, subtitulo, descricao } = props.dados;
  const tags = simularTags();

  const getBadgeClasses = (tag) => {
    switch (tag) {
      case "Front":
        return "badge-espacamento front";
      case "Back":
        return "badge-espacamento back";
      case "UI/UX":
        return "badge-espacamento ui";
    }
  };

  return (
    <Card className="card-hover" onClick={props.onClick}>
      <Card.Body>
        <Row>
          <Col xs={12} sm={4} md={2}>
            <Image
              src={tags.includes("UI/UX") ? logoArt : logoCode}
              width={100}
              height={100}
              roundedCircle
            />
          </Col>

          <Col xs={12} sm={8} md={10}>
            <Row className="row-titulo">
              <Col md="auto">
                <Card.Title className="card-titulo">{titulo}</Card.Title>
              </Col>
              <Col xs lg={8}>
                <Row>
                  {tags.map((tag, i) => {
                    return (
                      <Badge
                        key={i}
                        variant={tag === "Novo" ? "success" : false}
                        className={getBadgeClasses(tag)}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </Row>
              </Col>
            </Row>
            <Card.Subtitle className="mb-2 text-muted">
              {subtitulo}
            </Card.Subtitle>
            <Card.Text> {descricao}</Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

{
  /*<Badge variant="success">Novo</Badge>
                  <Badge className="badge-espacamento front">Front</Badge>
                  <Badge className="badge-espacamento back">Back</Badge>
<Badge className="badge-espacamento ui">UI/UX</Badge>*/
}
