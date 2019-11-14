import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Button from "../Button";
import classnames from 'classnames';
import { ReactComponent as Burger } from '../../assets/icons/burger.svg';
export interface HeaderProps {};

const Header: React.FC<HeaderProps> = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
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
              <Link className="nav-list__link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="/services">
                Services
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="/work">
                Work
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="/team">
                Team
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-list__item">
              <Link className="nav-list__link" to="/contact">
                Contact
              </Link>
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

export default Header;
