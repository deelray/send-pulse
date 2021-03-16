import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item" id="about">
          <a href="#about" className="footer__link">
            About
          </a>
        </li>
        <li className="footer__item" id="terms">
          <a href="#terms" className="footer__link">
            Terms
          </a>
        </li>
        <li className="footer__item" id="privacy">
          <a href="#privacy" className="footer__link">
            Privacy
          </a>
        </li>
        <li className="footer__item" id="help">
          <a href="#help" className="footer__link">
            Help
          </a>
        </li>
        <li className="footer__item" id="report">
          <a href="#report" className="footer__link">
            Report
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;