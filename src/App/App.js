import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../components/Login";
import { Desafios } from "../components/Desafios";
import { Candidatos } from "../components/Candidatos";
import { CadastroCandidato } from "../components/CadastroCandidato";
import { CadastroEmpresa } from "../components/CadastroEmpresa";
import { Desafio } from "../components/Desafio";
import { Home } from "../components/Home";
import { CadastroDesafio } from "../components/CadastroDesafio";
import { CadastroProjeto } from "../components/CadastroProjeto";

export function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/desafios">
          <Desafios />
        </Route>
        <Route exact path="/cadastro-candidato">
          <CadastroCandidato />
        </Route>
        <Route path="/cadastro-empresa">
          <CadastroEmpresa />
        </Route>
        <Route path="/cadastro-projeto">
          <CadastroProjeto />
        </Route>
        <Route exact path="/cadastro-desafio">
          <CadastroDesafio />
        </Route>
        <Route path="/desafios/:idDesafio">
          <Desafio />
        </Route>
        <Route path="/candidatos">
          <Candidatos />
        </Route>
        <Route path="/candidatos/:idCandidato">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
