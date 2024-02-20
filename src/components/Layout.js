import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => (
  <div>
    <Header />
    <Container className="my-4">
      {" "}
      <main>{children}</main>
    </Container>
    <Footer />
  </div>
);

export default Layout;
