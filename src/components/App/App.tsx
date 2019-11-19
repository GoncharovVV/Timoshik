import * as React from "react";
import "./App.scss";
import Header from "../Header";
import classnames from 'classnames';

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
import Footer from "../Footer";
import Modal from "../Modal";

const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const toggleModal = () => {
    setModalIsOpen(prevState => !prevState);
  };
  const hintClassName = classnames('wrapper', { 'modal-open': modalIsOpen});

  return (
    <div className={hintClassName}>
      <Router>
        <Header toggleModal={toggleModal}/>
        <main className="main">
          <Route path="/" component={Home} exact={true}/>
          <Route path="/about" component={About}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/pricing" component={Pricing}/>
          <Route path="/services" component={ServicesPage}/>
          <Route path="/team" component={Team}/>
          <Route path="/work" component={Work}/>
        </main>
        <Footer/>
      </Router>
      <Modal hidden={modalIsOpen} toggleModal={toggleModal}/>
    </div>
  );
};
export default App;
