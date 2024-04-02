import React, { useState } from 'react'
import {categories, products} from '../../helper/data.js'
import ProductCard from '../ProductCard/ProductCard.jsx'

const Header = () => {
  const [search, setsearch] = useState('')


  const searchData = products.filter((product)=>product.title.toLowerCase().includes(search.trim().toLowerCase()))

  return (
    <div>
      <h1 className="header-title">Categories</h1>
      <div className="header-buttons">
        {categories.map((item) => (
          <button>{item.toUpperCase()}</button>
        ))}
      </div>
      <h1 className="product-title">Product List</h1>
      <div className="input-container">
        <input
          className="product-input"
          type="search"
          placeholder="search product"
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>
      <div className="container">
        {searchData.map((product) => {
          return <ProductCard product={product}></ProductCard>;
        })}
      </div>
    </div>
  );
}

export default Header