import React from 'react'

const Header = () => {
  return (
    <div>
        <h1 className='header-title'>Categories</h1>
        <div className="header-buttons">
            <button>ALL</button>
            <button>ELECTRONICS</button>
            <button>JEWELERY</button>
            <button>MEN'S CLOTHING</button>
            <button>WOMEN'S CLOTHING</button>
        </div>
    </div>
  )
}

export default Header