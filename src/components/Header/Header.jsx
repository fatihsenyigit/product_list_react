import React from 'react'
import {categories, products} from '../../helper/data.js'
import ProductCard from '../ProductCard/ProductCard.jsx'

const Header = () => {
  return (

    <div>
      <h1 className="header-title">Categories</h1>
      <div className="header-buttons">
        {categories.map((item)=>(
          <button>{item.toUpperCase()}</button>
        ))}
      </div>
      <h1 className="product-title">Product List</h1>
      <div className="container">
        {products.map((product)=> {
          return <ProductCard product={product}></ProductCard>
        })}
      </div>
    </div>

  )
}

export default Header