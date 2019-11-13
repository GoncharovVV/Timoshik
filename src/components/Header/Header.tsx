import * as React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import Button from "../Button";
export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget);
  };
  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-list__item">
              <Link className="nav-list__link" to="/">
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
            <li className="nav-list__item">
              <Button label="test" classNames="nav-list__button" handleClick={handleClick} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
