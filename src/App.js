import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./contexts/CartContext";
import "./sass/style.scss";

function App() {
  return (
    <Router>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </Router>
  );
}

export default App;
