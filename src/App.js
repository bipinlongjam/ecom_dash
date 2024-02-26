
import { useEffect, useState } from 'react';
import './App.css';
import ProductForm from './components/NewProduct/ProductForm';
import CategoryDisplay from './components/NewProduct/CategoryDisplay';

function App() {
    // const [products, setProducts] = useState([]);
    const [clothingProducts, setClothingProducts] = useState([]);
    const [electronicsProducts, setElectronicsProducts] = useState([]);
    const [skincareProducts, setSkincareProducts] = useState([]);
    const [kitchenProducts, setKitchenProducts] = useState([]);

    useEffect(() =>{
     // const storedProduct = localStorage.getItem('products'); 
     const storedClothingProducts = localStorage.getItem('clothingProducts');
     const storedElectronicsProducts = localStorage.getItem('electronicsProducts');
     const storedSkincareProducts = localStorage.getItem('skincareProducts');
     const storedKitchenProducts = localStorage.getItem('kitchenProdcts');


      // if(storedProduct){
      //   setProducts(JSON.parse(storedProduct));
      // }
      if (storedClothingProducts) {
        setClothingProducts(JSON.parse(storedClothingProducts));
      }
      if (storedElectronicsProducts) {
        setElectronicsProducts(JSON.parse(storedElectronicsProducts));
      }
      if (storedSkincareProducts){
        setSkincareProducts(JSON.parse(storedSkincareProducts))
      }
      if (storedKitchenProducts){
        setKitchenProducts(JSON.parse(storedKitchenProducts))
      }
    },[])
  
    // const handleAddProduct = (newProduct) =>{
    //   const updatedProducts = [...products, newProduct];
    //   setProducts(updatedProducts);
    //   localStorage.setItem('products', JSON.stringify(updatedProducts))
    // }
    const handleAddProduct = (newProduct) => {
      if (newProduct.category === 'Clothing') {
        const updatedProducts = [...clothingProducts, newProduct];
        setClothingProducts(updatedProducts);
        localStorage.setItem('clothingProducts', JSON.stringify(updatedProducts));
      } else if (newProduct.category === 'Electronics') {
        const updatedProducts = [...electronicsProducts, newProduct];
        setElectronicsProducts(updatedProducts);
        localStorage.setItem('electronicsProducts', JSON.stringify(updatedProducts));
      } else if (newProduct.category === 'Skincare'){
        const updatedProducts = [...skincareProducts, newProduct];
        setSkincareProducts(updatedProducts);
        localStorage.setItem('skincareProducts', JSON.stringify(updatedProducts))
      }else if (newProduct.category === 'Kitchen'){
        const updatedProducts = [...kitchenProducts, newProduct];
        setKitchenProducts(updatedProducts);
        localStorage.setItem('kitchenProducts', JSON.stringify(updatedProducts))
      }
    };
    //console.log(products);
    // const handleDeleteProduct = (index) =>{
    //   const updatedProducts = [...products];
    //   updatedProducts.splice(index, 1);
    //   setProducts(updatedProducts);
    //   localStorage.setItem('products', JSON.stringify(updatedProducts));
    // }
    const handleDeleteProduct = (category, index) => {
      if (category === 'Clothing') {
        const updatedProducts = [...clothingProducts];
        updatedProducts.splice(index, 1);
        setClothingProducts(updatedProducts);
        localStorage.setItem('clothingProducts', JSON.stringify(updatedProducts));
      } else if (category === 'Electronics') {
        const updatedProducts = [...electronicsProducts];
        updatedProducts.splice(index, 1);
        setElectronicsProducts(updatedProducts);
        localStorage.setItem('electronicsProducts', JSON.stringify(updatedProducts));
      }else if (category === 'Skincare'){
        const updatedProducts = [...skincareProducts];
        updatedProducts.splice(index, 1);
        setSkincareProducts(updatedProducts);
        localStorage.setItem('skincareProducts',JSON.stringify(updatedProducts));
      }else if (category === 'Kitchen'){
        const updatedProducts = [...kitchenProducts];
        updatedProducts.splice(index, 1);
        setKitchenProducts(updatedProducts);
        localStorage.setItem('kitchenProducts',JSON.stringify(updatedProducts));
      }
    };
  return (
    <div className='container'>
      <h1 className='heading'>Product Manager</h1>
      <ProductForm onAddProduct={handleAddProduct}/>
      <div>
        <h2 className='list-heading'>Products</h2>
        {/* <ul className='product-list'>
          {
            products.map((product, index) => (
              <li key={index} className="product-item">
                <div>Product ID:{product.productId}</div>
                <div>Product Name:{product.productName}</div>
                <div>Price:Rs:{product.price}</div>
                <div>Product Category:{product.category}</div>
                <button onClick={() => handleDeleteProduct(index)} className='delete-btn'>Delete</button>
            </li>
            ))
          }
        </ul> */}
        {/* <div className="category">
          <h3>Clothing</h3>
          <ul className="product-list">
            {clothingProducts.map((product, index) => (
              <li key={index} className="product-item">
                <div>Product ID: {product.productId}</div>
                <div>Price: {product.price}</div>
                <div>Product Name: {product.productName}</div>
                <div>Category: {product.category}</div>
                <button onClick={() => handleDeleteProduct('Clothing', index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div> */}
        <CategoryDisplay 
        categoryName="Clothing"
        products={clothingProducts}
        onDeleteProduct={handleDeleteProduct}
        />
        <CategoryDisplay 
        categoryName="Electronics"
        products={electronicsProducts}
        onDeleteProduct={handleDeleteProduct}
        />
         <CategoryDisplay 
        categoryName="Skincare"
        products={skincareProducts}
        onDeleteProduct={handleDeleteProduct}
        />
         <CategoryDisplay 
        categoryName="Kitchen"
        products={kitchenProducts}
        onDeleteProduct={handleDeleteProduct}
        />
      </div>
    </div>
  );
}

export default App;
