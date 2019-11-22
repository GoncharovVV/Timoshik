import * as React from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../store/reducer/reducer';
import classnames from 'classnames';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';

import Home from '../../pages/Home'
import About from '../../pages/About';
import Blog from '../../pages/Blog';
import Contact from '../../pages/Contact';
import Pricing from '../../pages/Pricing';
import ServicesPage from '../../pages/ServicesPage';
import Team from '../../pages/Team';
import Work from '../../pages/Work';


import Header from "../Header";
import Footer from "../Footer";
import Modal from "../Modal";

import "./App.scss";
import NotFound from "../../pages/NotFound";
const store = createStore(reducer);

const App: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const toggleModal = () => {
    setModalIsOpen(prevState => !prevState);
  };
  const hintClassName = classnames('wrapper', { 'modal-open': modalIsOpen});

  return (
    <Provider store={store}>
      <div className={hintClassName}>
        <Router>
          <Header toggleModal={toggleModal}/>
          <main className="main">
            <Switch>
              <Route path="/" component={Home} exact={true}/>
              <Route path="/about" component={About}/>
              <Route path="/blog" component={Blog}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/pricing" component={Pricing}/>
              <Route path="/services" component={ServicesPage}/>
              <Route path="/team" component={Team}/>
              <Route path="/work" component={Work}/>
              {/* как вариант на несуществующий урл */}
              {/* <Redirect to="/"/> */}
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer/>
        </Router>
        <Modal hidden={modalIsOpen} toggleModal={toggleModal}/>
      </div>
    </Provider>
  );
};
export default App;
