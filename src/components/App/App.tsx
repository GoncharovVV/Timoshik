import * as React from "react";
import "./App.scss";
import Header from "../Header";
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Router>
        <Header/>
        <main className="main"></main>
        <footer className="footer"></footer>
      </Router>
    </div>
  );
};
export default App;
