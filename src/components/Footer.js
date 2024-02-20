import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="bg-body-tertiary py-4 mt-auto">
    <Container className="footer" fluid>
      <Row>
        <Col className="text-center">
          <Link
            to="#"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
          <Link
            to="#"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
          <Link
            to="#"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </Link>
          <Link
            to="#"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link
            to="#"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link
            to="#"
            className="btn btn-link btn-floating btn-lg text-body m-1"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col className="text-center bg-light">© 2024 MegaMart Ltd.</Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
