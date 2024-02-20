import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useCart } from "../hooks/useCart";
import { Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const CheckoutPage = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    navigate("/checkout/success");
  };

  useEffect(() => {
    document.title = "MegaMart | Cart";
  }, []);

  return (
    <Layout>
      <div className="container">
        <h1>Cart</h1>
        {cart.length === 0 ? (
          <div>
            <p>Your cart is empty.</p>
            <Link to="/">
              <Button variant="primary">Go shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-8">
              {cart.map((item) => (
                <CartItem key={item.id} product={item} />
              ))}
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Summary</h5>
                  <p>Total Items: {totalQuantity}</p>
                  <p>Total Price: ${totalPrice.toFixed(2)}</p>
                  <Button variant="primary" onClick={handleCheckout}>
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CheckoutPage;
