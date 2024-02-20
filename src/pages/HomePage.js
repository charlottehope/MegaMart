import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import useProductList from "../hooks/useProductList";
import ProductList from "../components/ProductList";
import {
  Dropdown,
  DropdownButton,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const HomePage = () => {
  const products = useProductList();
  const [searchInput, setSearchInput] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [categories, setCategories] = useState([]);
  const [dropdownTitle, setDropdownTitle] = useState("Sort by Category");

  useEffect(() => {
    if (products.length > 0) {
      const allTags = products.flatMap((product) => product.tags);
      const uniqueCategories = Array.from(new Set(allTags));
      setCategories(uniqueCategories);
    }
  }, [products]);

  useEffect(() => {
    document.title = "MegaMart | Home";
  }, []);

  const handleCategoryFilter = (category) => {
    setCategoryFilter(category === "All" ? "" : category);
    setDropdownTitle(
      category === "All"
        ? "Sort by Category"
        : category.charAt(0).toUpperCase() + category.slice(1)
    );
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Layout>
      <div className="container">
        <h1>Our products</h1>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search products..."
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <DropdownButton id="category-dropdown" title={dropdownTitle}>
            <Dropdown.Item onClick={() => handleCategoryFilter("All")}>
              All
            </Dropdown.Item>
            {categories.map((category) => (
              <Dropdown.Item
                key={category}
                onClick={() => handleCategoryFilter(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Dropdown.Item>
            ))}
          </DropdownButton>
        </InputGroup>
        <ProductList
          products={products}
          searchInput={searchInput}
          categoryFilter={categoryFilter}
        />
      </div>
    </Layout>
  );
};

export default HomePage;
