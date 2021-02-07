import { Login } from "../components/Login";
import { Desafios } from "../components/Desafios";
import { Candidatos } from "../components/Candidatos";
import { Cadastro } from "../components/Cadastro";
import { CadastroEmpresa } from "../components/CadastroEmpresa"
import { CadastroDesafio } from "../components/CadastroDesafio";
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
        <Route exact path="/CadastroDesafio">
          <CadastroDesafio />
        </Route>
        <Route path="/desafios/:idDesafio">
          <Login />
        </Route>
        <Route path="/desafio/submeter">
          <Login />
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