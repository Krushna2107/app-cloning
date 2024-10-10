import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3">
      <Container>
        <Row>
          <Col md={2}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="footer-link">
                  Services
                </a>
              </li>

              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#help" className="footer-link">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#terms" className="footer-link">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#privacy" className="footer-link">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link">
                  FAQ
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Connect with Us</h5>
            <ul className="list-unstyled social-icons d-flex p-2">
              <li>
                <a
                  href="https://facebook.com"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="footer-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a href="https://youtube.com" className="footer-link">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col className="text-center">
            <p>&copy; Copyright © 2024 Infosys Limited</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
