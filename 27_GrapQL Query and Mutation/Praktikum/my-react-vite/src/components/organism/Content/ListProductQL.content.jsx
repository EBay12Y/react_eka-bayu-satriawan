import React from 'react'
import useLandingProductViewModel from './LandingProducts.content.viewModel'
import { gql, useQuery } from "@apollo/client";
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

const ListProductQL = () => {

    const viewModel = useLandingProductViewModel();
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    return (
        <div className="row row-cols-1 row-cols-md-4 g-4 mx-5 p-5">
            {error && <div>some error</div>}
            {loading && <div>loading...</div>}
            {data?.product.map((products) => {
                return (
                    <div className="col" key={products.id}>
                        <div className="card h-100">
                            <div className="card-body">
                                <Link to="/createproductformik">
                                    <h5 className="card-title">{products.product_name}</h5>
                                </Link>
                                <p className="card-text">Category: {products.product_category}</p>
                                <p className="card-text">Freshness: {products.product_freshness}</p>
                                <p className="card-text">Additional Information: <br></br>{products.aditional_information}</p>
                                <p className="card-text">Price: {products.price}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default ListProductQL