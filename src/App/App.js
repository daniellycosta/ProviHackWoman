import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../components/Login";
import { Cadastro } from "../components/Cadastro";
import { CadastroEmpresa } from "../components/CadastroEmpresa"
import { Desafio } from "../components/Desafio";


export function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/">
          <Login />
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
        <Route exact path="/Desafio">
          <Desafio />
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
