import React from 'react';
import { products } from '../../helper/data';


const ProductCard = () => {
  return (
    <>
      <h1 className="product-title">Product List</h1>
      <div className="container">
        {products.map((e) => {
          return (
            <div className="product-container" key={e.id}>
              <img src={e.image} alt="" />
              <p className="title">{e.title}</p>
              <h3>{e.price} $</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductCard