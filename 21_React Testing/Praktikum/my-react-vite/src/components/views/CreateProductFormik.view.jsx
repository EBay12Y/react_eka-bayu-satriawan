import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navbar, Article, ProductForm, ProductList } from '../organism';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../../config/redux/product/productSlice';

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

const CreateProductFormik = () => {
    const [isIndonesia, setIsIndonesia] = useState(false);
    const handleBahasa = () => setIsIndonesia(!isIndonesia);
    const products = useSelector((state) => state.products.products);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            id: '',
            productName: '',
            productCategory: '',
            image: null,
            productFreshness: '',
            additionalDescription: '',
            productPrice: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const newProduct = {
                id: Math.random().toString(36).substring(2, 18),
                productName: values.productName,
                productCategory: values.productCategory,
                image: values.image.name,
                productFreshness: values.productFreshness,
                additionalDescription: values.additionalDescription,
                productPrice: values.productPrice
            };
            console.log(newProduct);

            dispatch(productAction.add([...products, newProduct]));

            formik.resetForm();
        },
    });

    const handleDelete = (productId) => {
        if (window.confirm("Are you sure to delete this product?")) {
            dispatch(productAction.delete(productId));
        }
    };

    return (
        <>
            <Navbar />
            <ProductForm
                formik={formik}
                article={Article}
                bahasa={isIndonesia}
                gantiBahasa={handleBahasa}
            />
            <ProductList products={products} handleDelete={handleDelete} />
        </>
    );
}

export default CreateProductFormik