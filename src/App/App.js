import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../components/Login";
import { Cadastro } from "../components/Cadastro";
import { Footer } from "../components/Footer";


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
        <Route path="/criar/candidato">
          <Login />
        </Route>
        <Route path="/criar/empresa">
          <Login />
        </Route>
        <Route path="/desafios">
          <Login />
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
