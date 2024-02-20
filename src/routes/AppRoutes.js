import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CheckoutPage from "../pages/CheckoutPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import CheckoutSuccessPage from "../pages/CheckoutSuccessPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
    <Route path="/product/:productId" element={<ProductPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);

export default AppRoutes;
