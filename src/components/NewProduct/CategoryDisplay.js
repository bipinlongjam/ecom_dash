import React from 'react';
import './CategoryDisplay.css'

const CategoryDisplay = ({ categoryName, products, onDeleteProduct }) => {
    return (
      <div className="category">
        <h3>{categoryName}</h3>
        <ul className="product-list">
          {products.map((product, index) => (
            <li key={index} className="product-item">
              <div>Product ID: {product.productId}</div>
              <div>Price: {product.price}</div>
              <div>Product Name: {product.productName}</div>
              <div>Category: {product.category}</div>
              <button onClick={() => onDeleteProduct(categoryName, index)} className='delete-btn'>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CategoryDisplay;