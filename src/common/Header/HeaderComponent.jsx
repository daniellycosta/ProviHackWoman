import React from "react";
import {
  Jumbotron,
  Button,
  Container,
  Form,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import Select from "react-select";
import { Search } from "react-bootstrap-icons";

export const HeaderComponent = ({
  titulo,
  children,
  comFiltro,
  bannerClass,
}) => {
  const options = [
    { value: "Front", label: "Frontend" },
    { value: "Back", label: "Backend" },
    { value: "UI/UX", label: "UI/UX" },
  ];

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      color: "#00000",
      width: 400,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return (
    <div className={`banner-geral ${bannerClass}`}>
      <div className="layer">
        <Jumbotron fluid className="jumbotron-cores jumbotron-padding">
          <Container>
            <h1>{titulo}</h1>
            {children}
          </Container>
          {comFiltro && (
            <Row noGutters style={{ color: "black" }}>
              <Col>
                <FormControl
                  type="text"
                  placeholder="Pesquisar"
                  className="margem-esquerda"
                />
              </Col>
              <Col style={{ marginLeft: 20 }}>
                <Select isMulti width="300px" options={options} />
              </Col>
              <Col>
                <Button className="margem-esquerda button-search">
                  <Search />
                </Button>
              </Col>
            </Row>
          )}
        </Jumbotron>
      </div>
    </div>
  );
};
