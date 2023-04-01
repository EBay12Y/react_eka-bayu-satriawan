import React from 'react'
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Footer, Navbar, ProductDetail } from '../organism'
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

const DetailProduct = () => {
    const { id } = useParams();
    const products = useSelector((state) => state.products.products);
    const product = products.find((p) => p.id === id);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            const updatedProduct = {
                id: values.id,
                productName: values.productName,
                productCategory: values.productCategory,
                image: values.image.name,
                productFreshness: values.productFreshness,
                additionalDescription: values.additionalDescription,
                productPrice: values.productPrice
            };
            console.log(updatedProduct);

            dispatch(productAction.update({
                id: product.id,
                updatedProduct: updatedProduct,
            }));

            navigate('/createproductformik');
        },
    });

    return (
        <div>
            <Navbar />
            <div key={product.id} className="p-5">
                <form
                    onSubmit={formik.handleSubmit}
                    className="container-fluid mt-5 w-350 p-5 rounded shadow">
                    <Link to="/createproductformik">
                        <button className="btn btn-primary mb-3">Kembali</button>
                    </Link>
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
                            {['Category 1', 'Category 2', 'Category 3'].map((category) => (
                                <option key={category} value={category} selected={formik.values.productCategory === category}>
                                    {category}
                                </option>
                            ))}
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
                        {formik.values.image &&
                            <p>Current file: {product.image}</p>
                        }
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
                                    onChange={formik.handleChange}
                                />
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
                                    onChange={formik.handleChange}
                                />
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
                                    onChange={formik.handleChange}
                                />
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

                    <button type="submit" className='btn btn-primary'>Update</button>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default DetailProduct