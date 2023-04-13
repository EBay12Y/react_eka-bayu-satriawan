import React from 'react'
import client from '../../../config/apollo'
import { gql, useQuery } from '@apollo/client';

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

const useLandingProductViewModel = () => {

  const { loading, error, data } = useQuery(GET_PRODUCTS);
  // const products
  return (
    <></>
    // products: data?.products|| [],
  )
}

export default useLandingProductViewModel