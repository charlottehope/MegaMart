import React from "react";
import { Card, Button } from "react-bootstrap";
import { useCart } from "../hooks/useCart";

const CartItem = ({ product }) => {
  const { dispatch } = useCart();

  const handleDecreaseQuantity = () => {
    dispatch({ type: "DECREASE_QUANTITY", payload: product });
  };

  const handleIncreaseQuantity = () => {
    dispatch({ type: "INCREASE_QUANTITY", payload: product });
  };

  return (
    <Card className="mb-3">
      <Card.Body className="d-flex align-items-center">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="me-3"
          style={{ width: "100px", height: "100px" }}
        />
        <div>
          <h5>{product.title}</h5>
          <p>
            Quantity:{" "}
            <Button
              variant="outline-primary"
              size="sm"
              onClick={handleDecreaseQuantity}
            >
              -
            </Button>{" "}
            {product.quantity}{" "}
            <Button
              variant="outline-primary"
              size="sm"
              onClick={handleIncreaseQuantity}
            >
              +
            </Button>
          </p>
          <p>Price: ${product.price.toFixed(2)}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
