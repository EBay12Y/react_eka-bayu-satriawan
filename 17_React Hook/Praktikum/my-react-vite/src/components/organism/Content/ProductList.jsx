import React from 'react'

const ProductList = ({ products, handleDelete }) => {
    return (
        <div>
            <section id="list product">
                <div className="container mb-5 pb-3">
                    <h2 className="text-center fw-bold fs-2">List Product</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No UUID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">product category</th>
                                <th scope="col">Product Freshness</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <th scope="col">{product.id}</th>
                                    <th scope="col">{product.productName}</th>
                                    <th scope="col">{product.productCategory}</th>
                                    <th scope="col">{product.productFreshness}</th>
                                    <th scope="col">{product.productPrice}</th>
                                    <button className="btn btn-outline-warning me-2">Edit</button>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => handleDelete(product.id)}>
                                        Delete
                                    </button>
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