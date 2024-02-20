import React from "react";

const PriceDiscount = ({ price, discountedPrice }) => {
  const calculateDiscount = () => {
    const discountAmount = price - discountedPrice;
    const discountPercent = Math.round((discountAmount / price) * 100);
    return { discountAmount, discountPercent };
  };

  const { discountPercent } = calculateDiscount();

  if (discountedPrice && discountedPrice !== price) {
    return (
      <div className="discount-badge">
        <p className="discount-percent">{discountPercent}% off</p>
        <p className="original-price">
          <strong>${discountedPrice.toFixed(2)}</strong>{" "}
          <del>${price.toFixed(2)}</del>{" "}
        </p>{" "}
      </div>
    );
  } else {
    return (
      <div className="discount-badge">
        <p>
          <strong>${price.toFixed(2)}</strong>
        </p>
      </div>
    );
  }
};

export default PriceDiscount;
