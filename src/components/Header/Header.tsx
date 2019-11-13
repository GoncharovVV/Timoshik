import * as React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;
