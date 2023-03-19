import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Footer, Navbar, ProductDetail } from '../organism'

const DetailProduct = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("products")));
    }, []);

    return (
        <div>
            <Navbar />
            {products.map((product) => (
                <div key={product.id} className="p-5">
                    {product.id == id && (
                        <div className="d-flex m-5 justify-content-center align-items-center">
                            <div className="w-50 p-5 rounded shadow">
                                <Link to="/createproduct">
                                    <button className="btn btn-primary mb-3">Kembali</button>
                                </Link>
                                <p>id : {product.id}</p>
                                <p>Nama Product : {product.productName}</p>
                                <p>Category : {product.productCategory}</p>
                                <p>Freshness : {product.productFreshness}</p>
                                <p>Price : ${product.productPrice}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
            <Footer />
        </div>
    )
}

export default DetailProduct