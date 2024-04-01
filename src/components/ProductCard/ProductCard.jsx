import React from "react";

const ProductCard = ({product}) => {
  return (
    <div className="product-container">
      <img src={product.image} alt="" />
      <p className="title">{product.title}</p>
      <h3>{product.price} $</h3>
    </div>
  );
};

export default ProductCard;
