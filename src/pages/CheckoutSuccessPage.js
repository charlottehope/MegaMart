import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useCart } from "../hooks/useCart";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

const CheckoutSuccessPage = () => {
  const { dispatch } = useCart();

  useEffect(() => {
    dispatch({ type: "CLEAR_CART" });
  }, [dispatch]);

  useEffect(() => {
    document.title = "MegaMart | Order successful";
  }, []);

  return (
    <Layout>
      <Container className="d-flex align-items-center justify-content-center h-100">
        <div className="mt-5">
          {" "}
          <h1 className="text-center">Order successful!</h1>
          <p className="text-center">
            Your order has been successfully placed.
          </p>
          <p className="text-center">Thank you for shopping with us!</p>
          <div className="text-center">
            <Link to="/">
              <Button variant="primary">Shop more</Button>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default CheckoutSuccessPage;
