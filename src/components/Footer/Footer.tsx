import * as React from 'react';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Chat } from '../../assets/icons/chat.svg';
import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg';
import { ReactComponent as Person } from '../../assets/icons/person.svg';
import { ReactComponent as Envelope } from '../../assets/icons/envelope.svg';
import { ReactComponent as Map } from '../../assets/icons/map-marker.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';

import blog from '../../assets/images/image_1.jpg';
import blog1 from '../../assets/images/image_2.jpg';

import './Footer.scss'
export interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="ftco-section footer">
      <div className="container cards">
        <div className="footer__column">
          <h2 className="footer__title">
            Ultim8.
          </h2>
          <p>
            Far far away, behind the word mountains,
            far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
          <ul className="social-list">
            <li className="social-list__item">
              <a href="/" className="social-list__link">
                <Facebook className="svg-icon"/>
              </a>
            </li>
            <li className="social-list__item">
              <a href="/" className="social-list__link">
                <Instagram className="svg-icon"/>
              </a>
            </li>
            <li className="social-list__item">
              <a href="/" className="social-list__link">
                <Twitter className="svg-icon"/>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__column footer__column_nogrow">
          <h2 className="footer__title">
            Quick Links
          </h2>
          <ul className="list-unstyled">
            <li><a href="/">About</a></li>
            <li><a href="/">Features</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </div>
        <div className="footer__column footer__column_blog">
          <h2 className="footer__title">
            Recent Blog
          </h2>

            <a href="/" className="footer-blog">
              <img src={blog} alt=""/>
              <div className="footer-blog__details">
                <h2 className="footer-blog__title">
                  Even the all-powerful Pointing has no control about
                </h2>
                <div className="footer-blog__row">
                  <Calendar className="svg-icon"/> Sept 15, 2018 <Person className="svg-icon"/> Admin <Chat className="svg-icon"/> 19
                </div>
              </div>
            </a>
            <a href="/" className="footer-blog">
              <img src={blog1} alt=""/>
              <div className="footer-blog__details">
                <h2 className="footer-blog__title">
                  Even the all-powerful Pointing has no control about
                </h2>
                <div className="footer-blog__row">
                  <Calendar className="svg-icon"/> Sept 15, 2018 <Person className="svg-icon"/> Admin <Chat className="svg-icon"/> 19
                </div>
              </div>
            </a>

        </div>
        <div className="footer__column">
          <h2 className="footer__title">
            Contact Info
          </h2>
          <ul className="contacts">
            <li className="contacts__list"> <Map className="svg-icon"/> 203 Fake St. Mountain View, San Francisco, California, USA</li>
            <li className="contacts__list"><a href="/"> <Phone className="svg-icon"/> +2 392 3929 210</a></li>
            <li className="contacts__list"><a href="/">  <Envelope className="svg-icon"/> info@yourdomain.com</a></li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        Copyright ©2019 All rights reserved
      </p>
    </footer>
  );
}

export default Footer;