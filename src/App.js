
import { useEffect, useState } from 'react';
import './App.css';
import ProductForm from './components/NewProduct/ProductForm';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() =>{
      const storedProduct = localStorage.getItem('products');
      if(storedProduct){
        setProducts(JSON.parse(storedProduct));
      }
    },[])
  
    const handleAddProduct = (newProduct) =>{
      const updatedProducts = [...products, newProduct];
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts))
    }
    console.log(products);
  return (
    <div className='container'>
      <h1 className='heading'>Product Manager</h1>
      <ProductForm onAddProduct={handleAddProduct}/>
      <div>
        <h2 className='list-heading'>Product List</h2>
        <ul className='product-list'>
          {
            products.map((product) => (
              <li key={product.id} className="product-item">
                <div>Product ID:{product.productId}</div>
                <div>Product Name:{product.productName}</div>
                <div>Price:Rs:{product.price}</div>
                <div>Product Category:{product.category}</div>
            </li>
            ))
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
