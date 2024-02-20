import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import PriceDiscount from "./PriceDiscount";

const ProductList = ({ searchInput, categoryFilter }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://api.noroff.dev/api/v1/online-shop"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <Row>
        {products
          .filter((product) => {
            const matchesSearch = product.title
              .toLowerCase()
              .includes(searchInput.toLowerCase());
            const matchesCategory = categoryFilter
              ? product.tags.includes(categoryFilter)
              : true;
            return matchesSearch && matchesCategory;
          })
          .map((product) => (
            <Col className="col" md={4} key={product.id}>
              <Card className="h-100 card-list">
                <Card.Img src={product.imageUrl} alt={product.title} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <PriceDiscount
                    price={product.price}
                    discountedPrice={product.discountedPrice}
                  />
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary"
                  >
                    View Product
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default ProductList;
