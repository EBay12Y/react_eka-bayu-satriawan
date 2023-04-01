import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logoBS from "../../assets/img/bootstrap-logo.svg";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navbar, Article } from '../organism';
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
            <section className="d-grid justify-content-center">
                <Link to="/">
                    <button type="button" className="btn btn-primary my-4">
                        Kembali
                    </button>
                </Link>
                <div className="text-center">
                    <img src={logoBS} alt="logo" />
                    <h1 className="mt-4">{isIndonesia ? Article.title.id : Article.title.en}</h1>
                    <p>
                        {isIndonesia ? Article.description.id : Article.description.en}
                    </p>
                    <button className="btn btn-primary" onClick={handleBahasa}>
                        {isIndonesia ? "Ganti Bahasa" : "Change Language"}
                    </button>
                </div>
                <form onSubmit={formik.handleSubmit} className="container-fluid mt-5">
                    <div className="mb-3 col-md-4 col-sm-8">
                        <label htmlFor="productName" className="form-label">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.productName}
                        />
                        {formik.touched.productName && formik.errors.productName ? (
                            <div>{formik.errors.productName}</div>
                        ) : null}
                    </div>
                    <div className="mb-3 col-md-4 col-sm-6">
                        <label htmlFor="productCategory" className="form-label">Product Category</label>
                        <select
                            id="productCategory"
                            name="productCategory"
                            className="form-select"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.productCategory}
                        >
                            <option value="">--Select--</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                            <option value="Category 3">Category 3</option>
                        </select>
                        {formik.touched.productCategory && formik.errors.productCategory ? (
                            <div>{formik.errors.productCategory}</div>
                        ) : null}
                    </div>

                    <div className="mb-3 col-md-4 col-sm-6">
                        <label htmlFor="image" className="form-label">Product Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            className='form-control'
                            onChange={(event) => {
                                formik.setFieldValue("image", event.currentTarget.files[0])
                            }}
                        />
                        {formik.touched.image && formik.errors.image ? (
                            <div>{formik.errors.image}</div>
                        ) : null}
                    </div>

                    <div className="mb-3 col-md-4 col-sm-6">
                        <label className="pb-1 form-label">
                            Product Freshness:
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="validationProductBrandNew"
                                    name="productFreshness"
                                    value="Brand New"
                                    className="form-check-input"
                                    checked={formik.values.productFreshness === 'Brand New'}
                                    onChange={formik.handleChange} />
                                <label
                                    htmlFor="validationProductBrandNew"
                                    className="form-check-label">
                                    Brand New
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="validationSecondHand"
                                    name="productFreshness"
                                    value="Second Hand"
                                    className="form-check-input"
                                    checked={formik.values.productFreshness === 'Second Hand'}
                                    onChange={formik.handleChange} />
                                <label
                                    htmlFor="validationSecondHand"
                                    className="form-check-label">
                                    Second Hand
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    id="validationRefurbrished"
                                    name="productFreshness"
                                    value="Refurbished"
                                    className="form-check-input"
                                    checked={formik.values.productFreshness === 'Refurbished'}
                                    onChange={formik.handleChange} />
                                <label
                                    htmlFor="validationSecondHand"
                                    className="form-check-label">
                                    Refurbished
                                </label>
                            </div>
                            {formik.touched.productFreshness && formik.errors.productFreshness ? (
                                <div>{formik.errors.productFreshness}</div>
                            ) : null}
                        </label>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="additionalDescription"
                            className="form-label">Additional Description</label>
                        <textarea
                            id="additionalDescription"
                            name='additionalDescription'
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.additionalDescription}
                            rows={5} />
                        {formik.touched.additionalDescription && formik.errors.additionalDescription ? (
                            <div>{formik.errors.additionalDescription}</div>
                        ) : null}
                    </div>

                    <div className="mb-3 col-md-4 col-sm-6">
                        <label htmlFor="productPrice" className="form-label">Product Price</label>
                        <input
                            type="number"
                            id="productPrice"
                            name="productPrice"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.productPrice}
                        />
                        {formik.touched.productPrice && formik.errors.productPrice ? (
                            <div>{formik.errors.productPrice}</div>
                        ) : null}
                    </div>

                    <button type="submit" className='btn btn-primary'>Submit</button>
                </form>
            </section>
            <section id="list product">
                <div className="container mt-5">
                    <h2 className="text-center fw-bold fs-2">List Product</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No UUID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Category</th>
                                <th scope="col">Product Image</th>
                                <th scope="col">Product Freshness</th>
                                <th scope="col">Description</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productCategory}</td>
                                    <td>{product.image}</td>
                                    <td>{product.productFreshness}</td>
                                    <td>{product.additionalDescription}</td>
                                    <td>{product.productPrice}</td>
                                    <td>
                                        <Link to={`/detailproduct/${product.id}`}>
                                            <button className="btn btn-outline-warning me-2">Edit</button>
                                        </Link>
                                        <button
                                            className="btn btn-outline-danger"
                                            onClick={() => handleDelete(product.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default CreateProductFormik