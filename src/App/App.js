import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Login } from "../App/Login";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/criar/candidato">
          <Login />
        </Route>
        <Route path="/criar/empresa">
          <Login />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
