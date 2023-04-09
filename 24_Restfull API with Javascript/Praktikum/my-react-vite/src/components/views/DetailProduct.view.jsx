import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Footer, Navbar, ProductDetail } from '../organism'
import { updateProductById } from '../../config/redux/product/productThunk';
// import { useProductsSelector } from '../../config/redux/product/productSelector';

const validationSchema = Yup.object().shape({
    productName: Yup.string()
        .required('Product name is required')
        .matches(/^[a-zA-Z ]+$/, 'Product name must only contain letters and spaces'),
    productCategory: Yup.string().required('Product category is required'),
    image: Yup.mixed().required('Product image is required'),
    productFreshness: Yup.string().required('Product freshness is required'),
    additionalDescription: Yup.string()
        .required('Additional Description is required'),
    productPrice: Yup.number()
        .typeError('Product price must be a number')
        .required('Product price is required')
        .positive('Product price must be a positive number'),
});

const DetailProduct = () => {
    const { id } = useParams();
    const products = useSelector((state) => state.product.products);
    const product = products.find((product) => product.id === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    console.log(product);

    const formik = useFormik({
        initialValues: {
            id: product.id,
            productName: product.productName,
            productCategory: product.productCategory,
            image: product.image,
            productFreshness: product.productFreshness,
            additionalDescription: product.additionalDescription,
            productPrice: product.productPrice,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            dispatch(updateProductById({ ...values }));
            navigate('/createproductformik');
        },
    });

    return (
        <div>
            <Navbar />
            <ProductDetail
                formik={formik}
                product={product} />
            <Footer />
        </div>
    )
}

export default DetailProduct