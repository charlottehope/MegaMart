import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Alert,
  Breadcrumb,
} from "react-bootstrap";
import Layout from "../components/Layout";
import { useCart } from "../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PriceDiscount from "../components/PriceDiscount";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { dispatch } = useCart();

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop/${productId}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  useEffect(() => {
    if (product) {
      document.title = `MegaMart | ${product.title}`;
    }
  }, [product]);

  const handleAddToCart = () => {
    const priceToAdd = product.discountedPrice || product.price;
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, price: priceToAdd },
    });
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img src={product.imageUrl} alt={product.title} />
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <PriceDiscount
                  price={product.price}
                  discountedPrice={product.discountedPrice}
                />
                <Card.Text>{product.description}</Card.Text>
                <Button onClick={handleAddToCart}>Add to Cart</Button>{" "}
              </Card.Body>
            </Card>
            {showSuccessMessage && (
              <Alert variant="success" className="mt-3">
                Item added to cart!
              </Alert>
            )}
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h2>Reviews</h2>
            {product.reviews.length > 0 ? (
              product.reviews.map((review, index) => (
                <div key={index}>
                  <p className="review-stars">
                    {" "}
                    {[...Array(review.rating)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </p>
                  <p className="review-user">by {review.username}</p>
                  <p className="review-description">"{review.description}"</p>
                  <hr />
                </div>
              ))
            ) : (
              <p>No reviews yet</p>
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductPage;
