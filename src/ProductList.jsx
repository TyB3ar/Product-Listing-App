//  Receives the list of products from App via props and maps through them to display each product.
/* 
Receives the product list from App as a prop.
Maps through the product list and renders each product using ProductItem.
*/
import { useState } from 'react'; // Importing useState for state management
import ProductItem from './ProductItem'; // Importing the ProductItem component to display individual products
import './ProductList.css'; // Importing CSS for styling    

function ProductList({ products, category }) { // Destructuring props to get products and category
  const [isLoading, setIsLoading] = useState(false); // State to manage loading status

  // Function to filter products based on the selected category
  const filteredProducts = category ? products.filter(product => product.category === category) : products;

  return (
    <div className="product-list"> {/* Main container for the product list */}
      {isLoading ? ( // Conditional rendering based on loading status
        <p>Loading...</p> // Display loading message if isLoading is true
      ) : (
        filteredProducts.map((product) => ( // Map through the filtered products and render ProductItem for each
          <ProductItem key={product.id} product={product} /> // Pass individual product data as props to ProductItem
        ))
      )}
    </div>
  );
}   

export default ProductList;