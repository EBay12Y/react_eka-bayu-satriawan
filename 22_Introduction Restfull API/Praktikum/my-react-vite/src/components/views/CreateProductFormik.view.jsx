import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import { Navbar, Article, ProductForm, ProductList } from '../organism';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveProducts, createProduct, deleteProductById, updateProductById } from '../../config/redux/product/productThunk';
// import { useProductTypeSelector } from '../../config/redux/product/productSelector';
// import { useProductsSelector, useProductTypeSelector } from '../../config/redux/product/productSelector';

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
    const products = useSelector((state) => state.product.products);
    const productType = useSelector((state) => state.product.type);;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveProducts());
    }, []);

    useEffect(() => {
        console.log(productType)
        if (productType === createProduct.fulfilled.type) {
            dispatch(retrieveProducts());
            alert('Add Success');
        }
        if (productType === deleteProductById.fulfilled.type) {
            dispatch(retrieveProducts());
            alert('Delete Success');
        }
        if (productType === updateProductById.fulfilled.type) {
            dispatch(retrieveProducts());
            alert('Update Success');
        }

    }, [productType])

    const formik = useFormik({
        initialValues: {
            // id: randomId,
            productName: '',
            productCategory: '',
            image: null,
            productFreshness: '',
            additionalDescription: '',
            productPrice: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);

            dispatch(createProduct({ ...values, id: uuidv4() }));

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