import React, { useState } from 'react'
import Input from '../Input/Input'
import './productForm.css'

const ProductForm = ({onAddProduct}) => {

    const [productId, setProductId] = useState('');
    const [price, setPrice] = useState('')
    const [productName, setProductName] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        onAddProduct({
            productId,
            price,
            productName,
            category
        })
        setProductId('')
        setPrice('')
        setProductName('')
        setCategory('')
    }
  return (
    <form onSubmit={handleSubmit} className="product-form">
        <Input 
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        />
        <Input 
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        />
        <Input 
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        />
        <select value={category} onChange={(e)=> setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Eletronics">Eletronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Books">Books</option>
            <option value="Kitchen">Kitchen</option>
        </select>
        <button type='submit' className='add-button'>Add</button>
    </form>
  )
}

export default ProductForm