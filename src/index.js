import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import { QuestionProvider } from "./context/question";
import "./index.css";

ReactDOM.render(
  <Router>
    <QuestionProvider>
    <App />
    </QuestionProvider>
  </Router>,
  document.getElementById("root")
);
