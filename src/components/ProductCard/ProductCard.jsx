import React from 'react';
import { products } from '../../helper/data';


const ProductCard = () => {
  return (
    <div className='container'>
        {products.map((e)=>{
            return (
              <div className="product-container" key={e.id}>
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