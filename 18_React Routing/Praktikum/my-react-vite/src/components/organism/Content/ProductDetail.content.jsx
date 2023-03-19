import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
// import ProductList from './ProductList.content';

const ProductDetail = ({ products }) => {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Product Name: {product.productName}</p>
            <p>Product Category: {product.productCategory}</p>
            <p>Product Freshness: {product.productFreshness}</p>
            <p>Product Price: {product.productPrice}</p>
        </div>
    )
}

export default ProductDetail