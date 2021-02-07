import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "../src/App";
import { Footer } from "../src/components/Footer";
import { Header } from "../src/components/Header";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById("root")
);


reportWebVitals();
