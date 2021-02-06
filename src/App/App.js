import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <About />
        </Route>
        <Route path="/criar/candidato">
          <Users />
        </Route>
        <Route path="/criar/empresa">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
