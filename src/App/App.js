import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../components/Login";
import { CadastroCandidato } from "../components/CadastroCandidato";
import { Cadastro } from "../components/Cadastro";
import { CadastroEmpresa } from "../components/CadastroEmpresa"
import { Desafio } from "../components/Desafio";
import { Home } from "../components/Home"
import { CadastroDesafio } from "../components/CadastroDesafio";


export function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/CadastroCandidato">
          <CadastroCandidato />
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Cadastro">
          <Cadastro />
        </Route>
        <Route path="/CadastroEmpresa">
          <CadastroEmpresa />
        </Route>
        <Route path="/criar/empresa">
          <Login />
        </Route>
        <Route exact path="/CadastroDesafio">
          <CadastroDesafio />
        </Route>
        <Route path="/desafios/criar">
          <Login />
        </Route>
        <Route path="/desafios/:idDesafio">
          <Login />
        </Route>
        <Route path="/desafio/submeter">
          <Login />
        </Route>
        <Route path="/candidatos">
          <Login />
        </Route>
        <Route path="/candidatos/:idCandidato">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
