import React from 'react';
import { products } from '../../helper/data';


const ProductCard = () => {
  return (
    <div className='container'>
        {products.map((e)=>{
            return (
              <div className="product-container" key={e.id}>
                <img src={e.image} alt="" />
                <div className="cover-container"></div>
                <p className="title">{e.title}</p>
                <h3>{e.price} $</h3>
              </div>
            );
        })}
    </div>
  )
}

export default ProductCard