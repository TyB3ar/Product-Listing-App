import { useState } from 'react';
import './App.css';
import ProductList from './ProductList'; // Importing the ProductList component to display the list of products

// The main component that holds the state for the list of products and passes data as props to child components.
/* 
Manages the state that holds an array of products.
Passes the list of products as a prop to the ProductList component.
Passes the selected category as a prop to the ProductList component.
*/

// Category Filtering: Add a "category" attribute and allow users to filter products based on categories. 

function App() {
  // State to hold the list of products
  const [products, setProducts] = useState([  
    {
      id: 1,
      name: 'T-Shirts',
      price: 20,
      description: 'Casual and comfortable t-shirts',
      category: 'Tops',
      image: 'https://images.unsplash.com/photo-1613852348851-df1739db8201?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Example image URL
    },
    {
      id: 2,
      name: 'Dress Shirts',
      price: 25,
      description: 'Formal and stylish dress shirts',
      category: 'Tops',
      image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
    },
    {
      id: 3,
      name: 'Casual Shirts',
      price: 25,
      description: 'Casual and comfortable shirts, for any occasion',
      category: 'Tops',
      image: 'https://i5.walmartimages.com/asr/8a909d77-45ed-4033-9757-9c0b9c7f5035_1.73b8a093007554dc7ca06656164d8319.jpeg' 
    },
    {
      id: 4,
      name: 'Jeans',
      price: 50,
      description: 'Jeans, including denim and chinos.',
      category: 'Bottoms',
      image: 'https://www.fjackets.com/product_images/m/108/Mens_Dark_Blue_Jeans__86637_zoom.jpg' 
    },
    {
      id: 5,
      name: 'Trousers',
      price: 60,
      description: 'Trousers, formal and casual',
      category: 'Bottoms',
      image: 'https://th.bing.com/th/id/R.6f84d294521615371943122d3efd8ebb?rik=03ZHGCQv%2fmh%2bFA&pid=ImgRaw&r=0' 
    },
    {
      id: 6,
      name: 'Shorts',
      price: 40,
      description: 'Shorts, including cargo and denim shorts',
      category: 'Bottoms',
      image: 'https://cdna.lystit.com/photos/0f2e-2016/02/20/lucky-brand-brunt-olive-mens-cargo-shorts-green-product-0-311005430-normal.jpeg' 
    },
    {
      id: 7,
      name: 'Pullover Sweaters',
      price: 60,
      description: 'Pullover sweaters, including crew neck and v-neck styles.',
      category: 'Outwear',
      image: 'https://oldnavy.gap.com/webcontent/0014/646/699/cn14646699.jpg' 
    },
    {
      id: 8,
      name: 'Cardigan Sweaters',
      price: 60,
      description: 'Cardigan sweaters, including button-up and open-front styles.',
      category: 'Outwear',
      image: 'https://www.werd.com/wp-content/uploads/2023/01/best-cardigan-sweater.jpg' 
    },
    {
      id : 9,
      name: 'Sneakers',
      price: 80,
      description: 'Sneakers, including running shoes and casual sneakers.',
      category: 'Footwear',
      image: 'https://media.gq.com/photos/57ffbb79bcbaa8b0566b4c7c/master/w_1600%2Cc_limit/best-stuff-common-arigato-01.jpg' 
    }, 
    {
      id : 10,
      name: 'Boots',
      price: 90,
      description: 'For work, for dress, and for play',
      category: 'Footwear',
      image: 'https://cdn.shopify.com/s/files/1/2276/3201/products/product-image-828657032.jpg?v=1571708767' 
    },
    {
      id : 11,
      name: 'Sandals',
      price: 70,
      description: 'For the beach, for the pool, and for the backyard',
      category: 'Footwear',
      image: 'https://alssports.vtexassets.com/arquivos/ids/1108379/REEF-Leather-Ortho-Coast-Sandal---Men-s.jpg?v=637949616817200000' 
    }
  ])
  
  const [list, setList] = useState(products) // State to hold the filtered list of 
  
  const [category, setCategory] = useState('') // State to hold the selected category for filtering 
  
  const handleViewClick = () => {
    if (category === '') {
      setList(products); // Show all products if no category is selected
    } else {
      setList(products.filter(product => product.category === category)); // Filter products by selected category
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Men's Clothing Line</h1>
      </header>
      <div className="category-filter">
        <h2>Select Products to View</h2>
        <div className='category-search'>
          <label htmlFor="category" className='category'>Filter by Category: </label>
          <select className='category-list' id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All</option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
            <option value="Outwear">Outwear</option>
            <option value="Footwear">Footwear</option>
          </select>

          <button className='view' onClick={handleViewClick}>View</button>
        </div>  
      </div>

      <ProductList products={list} /> {/* Pass the filtered list to ProductList */}

      <footer>
        <p>&copy; Tyler Wronski, Coding Temple Student. All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;