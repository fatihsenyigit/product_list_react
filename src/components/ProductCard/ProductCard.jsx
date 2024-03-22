import React from 'react';
import { categories } from '../../helper/data';
import { products } from '../../helper/data';


const ProductCard = () => {
  return (
    <div className='container'>
        {products.map((e)=>{
            return (
              <div className="product-container">
                <img src={e.image} alt="" />
                <h3>{e.price}</h3>
                <p>{e.title}</p>
              </div>
            );
        })}
    </div>
  )
}

export default ProductCard