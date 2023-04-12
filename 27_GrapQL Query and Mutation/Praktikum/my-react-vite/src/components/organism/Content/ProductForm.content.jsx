import React from "react";
import logoBS from "../../../assets/img/bootstrap-logo.svg";
import { Link } from 'react-router-dom';

const ProductForm = ({
    formik,
    article,
    bahasa,
    gantiBahasa,
}) => {

    return (
        <div>
            <section className="d-grid justify-content-center">
                <Link to="/">
                    <button type="button" className="btn btn-primary my-4">
                        Kembali
                    </button>
                </Link>
                {/* <button onClick={handleLogout}>Logout</button> */}
                <div className="text-center">
                    <img src={logoBS} alt="logo" />
                    <h1 className="mt-4">{bahasa ? article.title.id : article.title.en}</h1>
                    <p>
                        {bahasa ? article.description.id : article.description.en}
                    </p>
                    <button className="btn btn-primary" onClick={gantiBahasa}>
                        {bahasa ? "Ganti Bahasa" : "Change Language"}
                    </button>
                </div>
                <form onSubmit={formik.handleSubmit} className="container-fluid mt-5" id="Create Product">
                    <div className="mb-3 col-md-4 col-sm-8">
                        <label htmlFor="product_name" className="form-label">Product Name</label>
                        <input
                            type="text"
                            id="product_name"
                            name="product_name"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.product_name}
                            aria-label="product name"
                            aria-describedby="product-name-description"
                        />
                        {formik.touched.product_name && formik.errors.product_name ? (
                            <div id="product-name-description">{formik.errors.product_name}</div>
                        ) : null}
                    </div>
                    <div className="mb-3 col-md-4 col-sm-6">
                        <label htmlFor="product_category" className="form-label">Product Category</label>
                        <select
                            id="product_category"
                            name="product_category"
                            className="form-select"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.product_category}
                            aria-label="product category"
                            aria-describedby="product-category-description"
                        >
                            <option value="">--Select--</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                            <option value="Category 3">Category 3</option>
                        </select>
                        {formik.touched.product_category && formik.errors.product_category ? (
                            <div id="product-category-description">{formik.errors.product_category}</div>
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
                                formik.setFieldValue("image", event.target.files[0].name);
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
                                    name="product_freshness"
                                    value="Brand New"
                                    className="form-check-input"
                                    checked={formik.values.product_freshness === 'Brand New'}
                                    onChange={formik.handleChange}
                                    aria-label="product freshness"
                                    aria-describedby="product-freshness-description"
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
                                    name="product_freshness"
                                    value="Second Hand"
                                    className="form-check-input"
                                    checked={formik.values.product_freshness === 'Second Hand'}
                                    onChange={formik.handleChange}
                                    aria-label="product freshness"
                                    aria-describedby="product-freshness-description"
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
                                    name="product_freshness"
                                    value="Refurbished"
                                    className="form-check-input"
                                    checked={formik.values.product_freshness === 'Refurbished'}
                                    onChange={formik.handleChange}
                                    aria-label="product freshness"
                                    aria-describedby="product-freshness-description"
                                />
                                <label
                                    htmlFor="validationSecondHand"
                                    className="form-check-label">
                                    Refurbished
                                </label>
                            </div>
                            {formik.touched.product_freshness && formik.errors.product_freshness ? (
                                <div id="product-freshness-description">{formik.errors.product_freshness}</div>
                            ) : null}
                        </label>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="aditional_information"
                            className="form-label">Additional Description</label>
                        <textarea
                            id="aditional_information"
                            name='aditional_information'
                            className="form-control"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.aditional_information}
                            rows={5}
                            aria-label="product additional"
                            aria-describedby="product-additional-description"
                        />
                        {formik.touched.aditional_information && formik.errors.aditional_information ? (
                            <div id="product-additional-description">{formik.errors.aditional_information}</div>
                        ) : null}
                    </div>

                    <div className="mb-3 col-md-4 col-sm-6">
                        <label htmlFor="price" className="form-label">Product Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.price}
                            aria-label="product price"
                            aria-describedby="product-price-description"
                        />
                        {formik.touched.price && formik.errors.price ? (
                            <div id="product-price-description">{formik.errors.price}</div>
                        ) : null}
                    </div>

                    <button type="submit" className='btn btn-primary'>Submit</button>
                </form>
            </section>
        </div>
    );
};

export default ProductForm;
