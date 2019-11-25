import * as React from "react";
import classnames from 'classnames';
import {
  withRouter,
  RouteComponentProps,
  Link,
  NavLink
} from 'react-router-dom';
import "./Header.scss";
import Button from "../Button";
import { ReactComponent as Burger } from '../../assets/icons/burger.svg';
export interface HeaderProps extends RouteComponentProps {
  toggleModal: () => void;
};

const Header: React.FC<HeaderProps> = ({toggleModal, location, match, history}) => {
  const [show, setShow] = React.useState(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    toggleModal()
  };
  const hintClassName = classnames('header-nav', { 'show': show });

  return (
    <header className="header">
      <div className="container">
        <Link className="main-link" to="/">
          Ultim8.
        </Link>
        <Button
          label="Menu"
          classNames="btn_toggle btn_uppercase"
          handleClick={() => setShow(!show)}
        >
          <Burger className="svg-icon"/>
        </Button>
        <nav className={hintClassName}>
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink className="nav-list__link" exact={true} activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav-list__link" activeClassName="active" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav-list__link" activeClassName="active" to="/services">
                Services
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav-list__link" activeClassName="active" to="/work">
                Work
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav-list__link" activeClassName="active" to="/team">
                Team
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav-list__link" activeClassName="active" to="/pricing">
                Pricing
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav-list__link" activeClassName="active" to="/blog">
                Blog
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink className="nav-list__link" activeClassName="active" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-list__btn">
              <Button
                label="Get a Quote"
                classNames="btn_transparent btn_border btn_uppercase btn_md"
                handleClick={handleClick}
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(Header);
