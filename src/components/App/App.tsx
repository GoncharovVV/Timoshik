import * as React from "react";
import "./App.scss";
import Header from "../Header";
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';

import Home from '../../pages/Home'
import About from '../../pages/About';
import Blog from '../../pages/Blog';
import Contact from '../../pages/Contact';
import Pricing from '../../pages/Pricing';
import ServicesPage from '../../pages/ServicesPage';
import Team from '../../pages/Team';
import Work from '../../pages/Work';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Router>
        <Header/>
        <main className="main">
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/pricing" component={Pricing}/>
          <Route path="/services" component={ServicesPage}/>
          <Route path="/team" component={Team}/>
          <Route path="/work" component={Work}/>
        </main>
      </Router>
    </div>
  );
};
export default App;
