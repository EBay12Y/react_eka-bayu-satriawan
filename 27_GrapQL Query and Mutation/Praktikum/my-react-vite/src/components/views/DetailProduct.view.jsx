import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useParams, useNavigate } from "react-router-dom";
import { Footer, Navbar, ProductDetail } from '../organism'
import { gql, useMutation, useQuery } from "@apollo/client";

const UPDATE_PRODUCT_BY_ID_MUTATION = gql`
    mutation UPDATE_PRODUCT_BY_ID_MUTATION(
        $id: Int!,
        $product_name: String!,
        $product_category: String!,
        $product_freshness: String!,
        $aditional_information: String!,
        $price: Int!,
    ) {
        update_product_by_pk(
            pk_columns: { id: $id },
            _set: {
                product_name: $product_name,
                product_category: $product_category,
                product_freshness: $product_freshness,
                aditional_information: $aditional_information,
                price: $price
            }) {
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


const DetailProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const {
        loading: retrieveProductsById,
        data: productsData,
    } = useQuery(gql`
    query RETRIEVE_PRODUCTS_BY_ID_QUERY($id: Int!) {
        product_by_pk(id: $id) {
            product_name
            product_category
            product_freshness
            aditional_information
            price
        }
    }
`, { variables: { id } });

    const [updateProduct, {
        loading: updateProductLoading, }
    ] = useMutation(UPDATE_PRODUCT_BY_ID_MUTATION);

    const formik = useFormik({
        initialValues: {
            id: parseInt(id),
            product_name: productsData?.product_by_pk?.product_name ?? '',
            product_category: productsData?.product_by_pk?.product_category ?? '',
            image: null,
            product_freshness: productsData?.product_by_pk?.product_freshness ?? '',
            aditional_information: productsData?.product_by_pk?.aditional_information ?? '',
            price: productsData?.product_by_pk?.price ?? '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log("tes", values);
            updateProduct({
                variables: {
                    id: parseInt(id),
                    product_name: values.product_name,
                    product_category: values.product_category,
                    product_freshness: values.product_freshness,
                    aditional_information: values.aditional_information,
                    price: values.price,
                }
            }).then(() => {
                navigate('/createproductformik');
            });
        },
    });
    if (retrieveProductsById || updateProductLoading) return <p>Loading...</p>;
    return (
        <div>
            <Navbar />
            <ProductDetail
                formik={formik}
                product={productsData?.product_by_pk} />
            <Footer />
        </div>
    )
}

export default DetailProduct