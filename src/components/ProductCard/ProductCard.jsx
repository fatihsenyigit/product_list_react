import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";

const ProductCard = ({product}) => {
  return (
    <div className="product-container">
      <h4>{product.price} $</h4>
      <h5>
        <AiTwotoneHeart
        />
      </h5>
      <img src={product.image} alt="" />
      <p className="title">{product.title}</p>
    </div>
  );
};

export default ProductCard;
