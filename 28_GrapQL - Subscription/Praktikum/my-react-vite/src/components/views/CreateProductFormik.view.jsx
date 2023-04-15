import React, { useCallback, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navbar, Article, ProductForm, ProductList } from '../organism';
import { gql, useMutation, useSubscription } from "@apollo/client";

const SUBSCRIBE_PRODUCTS = gql`
    subscription SUBSCRIBE_PRODUCTS {
        product(order_by: {id: asc}) {
            id
            product_name
            product_category
            product_freshness
            aditional_information
            price
        }
    }
`;

const INSERT_PRODUCT_MUTATION = gql`
    mutation INSERT_PRODUCT_MUTATION(
        $product_name: String!,
        $product_category: String!,
        $product_freshness: String!,
        $aditional_information: String!,
        $price: Int!,
        ) {
        insert_product_one(object: {
            product_name: $product_name, 
            product_category: $product_category, 
            product_freshness: $product_freshness, 
            aditional_information: $aditional_information, 
            price: $price
        }){
        id
        }
    } 
`;

const DELETE_PRODUCT_BY_ID_MUTATION = gql`
    mutation DELETE_PRODUCT_BY_ID_MUTATION($id: Int!) {
        delete_product_by_pk(id: $id){
        id
        }
    }
    `;


const validationSchema = Yup.object().shape({
    product_name: Yup.string()
        .required('Product name is required')
        .matches(/^[a-zA-Z ]+$/, 'Product name must only contain letters and spaces'),
    product_category: Yup.string().required('Product category is required'),
    image: Yup.mixed().required('Product image is required'),
    product_freshness: Yup.string().required('Product freshness is required'),
    aditional_information: Yup.string()
        .required('Additional Description is required'),
    price: Yup.number()
        .typeError('Product price must be a number')
        .required('Product price is required')
        .positive('Product price must be a positive number'),
});

const CreateProductFormik = () => {

    const {
        loading: subscriptionLoading,
        data: subscriptionData,
    } = useSubscription(SUBSCRIBE_PRODUCTS);

    const [insertProduct, {
        loading: insertProductLoading, }
    ] = useMutation(INSERT_PRODUCT_MUTATION);

    const [deleteProductById, {
        loading: deleteProductByIdLoading, }
    ] = useMutation(DELETE_PRODUCT_BY_ID_MUTATION);

    const [isIndonesia, setIsIndonesia] = useState(false);
    const handleBahasa = () => setIsIndonesia(!isIndonesia);

    const formik = useFormik({
        initialValues: {
            product_name: '',
            product_category: '',
            image: null,
            product_freshness: '',
            aditional_information: '',
            price: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            insertProduct({
                variables: {
                    product_name: values.product_name,
                    product_category: values.product_category,
                    image: null,
                    product_freshness: values.product_freshness,
                    aditional_information: values.aditional_information,
                    price: values.price,
                }
            });
            formik.resetForm();
        },
    });

    const handleDeleteProduct = useCallback(
        (id) => {
            (window.confirm("Are you sure to delete this product?"));
            deleteProductById({
                variables: {
                    id,
                },
            });
        }
    );
    if (insertProductLoading || deleteProductByIdLoading || subscriptionLoading) return <p>Loading...</p>;

    console.log(subscriptionData);
    return (
        <>
            <Navbar />
            <ProductForm
                formik={formik}
                article={Article}
                bahasa={isIndonesia}
                gantiBahasa={handleBahasa}
            />
            <ProductList products={subscriptionData?.product} handleDelete={handleDeleteProduct} />
        </>
    );
}

export default CreateProductFormik