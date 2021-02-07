import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../components/Login";
import { Desafio } from "../components/Desafio";
import { Desafios } from "../components/Desafios";
import { Candidatos } from "../components/Candidatos";
import { Cadastro } from "../components/Cadastro";
import { CadastroEmpresa } from "../components/CadastroEmpresa";
import { CadastroDesafio } from "../components/CadastroDesafio";
import { MenuSuperior } from "../common/MenuSuperior";
import { CadastroCandidato } from "../components/CadastroCandidato";
import { Home } from "../components/Home";
import { CadastroProjeto } from "../components/CadastroProjeto";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/cadastro">
          <Cadastro />
        </Route>
        <Route exact path="/cadastro-empresa">
          <CadastroEmpresa />
        </Route>
        <Route exact path="/cadastro-desafio">
          <>
            <MenuSuperior />
            <CadastroDesafio />
          </>
        </Route>
        <Route path="/desafios/:idDesafio">
          <>
            <MenuSuperior />
            <Desafio />
          </>
        </Route>
        <Route exact path="/cadastro-candidato">
          <CadastroCandidato />
        </Route>
        <Route path="/cadastro-empresa">
          <CadastroEmpresa />
        </Route>
        <Route path="/cadastro-projeto/:idDesafio/">
          <>
            <MenuSuperior />
            <CadastroProjeto />
          </>
        </Route>
        <Route exact path="/desafios">
          <>
            <MenuSuperior />
            <Desafios />
          </>
        </Route>
        <Route exact path="/candidatos">
          <>
            <MenuSuperior />
            <Candidatos />
          </>
        </Route>
        <Route path="/candidatos/:idCandidato">
          <>
            <MenuSuperior />
            <Login />
          </>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
