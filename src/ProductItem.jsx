import { useState } from 'react'; // Importing useState for state management
import './ProductItem.css'; // Importing CSS for styling
import PropTypes from 'prop-types'; // Importing PropTypes for type checking    


function ProductItem({ product }) { // Destructuring props to get individual product data
  const { name, image, price, description } = product; // Extracting product details from props

  return (
    <div className="product-item"> {/* Main container for each product */}
      <h2>{name}</h2> {/* Display product name */}
      <img src={image} alt={name} /> {/* Display product image */}
      <p>{description}</p> {/* Display product description */}
      <p>Price: ${price}</p> {/* Display product price */}
    </div>
  );
}       

export default ProductItem;  