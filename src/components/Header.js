import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../hooks/useCart";

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const location = useLocation();

  return (
    <Navbar bg="body-tertiary" expand="lg">
      <div className="container-fluid">
        <Navbar.Brand as={Link} to="/">
          MegaMart
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={
                location.pathname === "/" ? "nav-link active" : "nav-link"
              }
            >
              Products
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/checkout" className="nav-link">
              <div style={{ position: "relative", display: "inline-block" }}>
                <FontAwesomeIcon icon={faShoppingCart} />
                {totalItems > 0 && (
                  <div className="badge rounded-pill bg-danger badge-pill">
                    {totalItems}
                  </div>
                )}
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
