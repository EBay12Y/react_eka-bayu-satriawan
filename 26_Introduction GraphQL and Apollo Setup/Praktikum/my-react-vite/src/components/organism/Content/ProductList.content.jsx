import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = ({ products, handleDelete }) => {
    return (
        <div>
            <section id="list product">
                <div className="container mt-5">
                    <h2 className="text-center fw-bold fs-2">List Product</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No UUID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Category</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Product Freshness</th>
                                <th scope="col">Description</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productCategory}</td>
                                    <td>{product.image}</td>
                                    <td>{product.productFreshness}</td>
                                    <td>{product.additionalDescription}</td>
                                    <td>{product.productPrice}</td>
                                    <td>
                                        <Link to={`/detailproduct/${product.id}`}>
                                            <button className="btn btn-outline-warning me-2">Edit</button>
                                        </Link>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => handleDelete(product.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default ProductList