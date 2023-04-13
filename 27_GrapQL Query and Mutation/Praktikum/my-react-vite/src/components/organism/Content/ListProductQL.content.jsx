import React, { useState } from 'react'
import useLandingProductViewModel from './LandingProducts.content.viewModel'
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';

const GET_PRODUCTS = gql`
    query GET_PRODUCTS {
        product {
        id
        product_name
        product_category
        product_freshness
        aditional_information
        price
        }
    }
`;

const GET_PRODUCTS_BY_SEARCH = gql`
query GET_PRODUCTS_BY_SEARCH($searchTerm: String) { 
    product(
        where: { 
            product_name: { 
                _ilike: $searchTerm 
            } }) { 
                id product_name 
                product_category 
                product_freshness 
                aditional_information 
                price 
            } 
        }
`;

const ListProductQL = () => {
    const viewModel = useLandingProductViewModel();
    const [searchTerm, setSearchTerm] = useState('');
    const [showMore, setShowMore] = useState(false);
    const [getProducts, {
        loading: getProductLoading,
        data: productSearch
    }] = useLazyQuery(GET_PRODUCTS_BY_SEARCH);

    const {
        loading: retrieveProducts,
        data: productsData
    } = useQuery(GET_PRODUCTS);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        getProducts({
            variables: {
                searchTerm: `%${searchTerm}%`,
            }
        })
    };

    const productData = searchTerm ? productSearch?.product : productsData?.product;

    const productsToShow = showMore ? productData : productData?.slice(0, 4);

    return (
        <>
            <div className="col-3 mt-5 mx-auto">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search products"
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button className="btn btn-primary" type="button" onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-4 g-4 mx-5 p-5">
                {(retrieveProducts || getProductLoading) && <div>Loading...</div>}
                {productsToShow?.map((product) => {
                    return (
                        <div className="col" key={product.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <Link to="/createproductformik">
                                        <h5 className="card-title">{product.product_name}</h5>
                                    </Link>
                                    <p className="card-text">Category: {product.product_category}</p>
                                    <p className="card-text">Freshness: {product.product_freshness}</p>
                                    <p className="card-text">Additional Information: <br></br>{product.aditional_information}</p>
                                    <p className="card-text">Price: {product.price}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                {!showMore && productData?.length > 4 && (
                    <div className="col-12 text-center mt-5">
                        <button className="btn btn-primary" onClick={() => setShowMore(true)}>Load More</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default ListProductQL
