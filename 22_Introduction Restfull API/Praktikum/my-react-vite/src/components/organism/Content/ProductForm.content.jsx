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
                        <label htmlFor="productName" className="form-label">Product Name</label>
                        <input
                            type="text"
                            id="productName"
                            name="productName"
                            className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.productName}
                            aria-label="product name"
                            aria-describedby="product-name-description"
                        />
                        {formik.touched.productName && formik.errors.productName ? (
                            <div id="product-name-description">{formik.errors.productName}</div>
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
                            aria-label="product category"
                            aria-describedby="product-category-description"
                        >
                            <option value="">--Select--</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                            <option value="Category 3">Category 3</option>
                        </select>
                        {formik.touched.productCategory && formik.errors.productCategory ? (
                            <div id="product-category-description">{formik.errors.productCategory}</div>
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
                                    name="productFreshness"
                                    value="Brand New"
                                    className="form-check-input"
                                    checked={formik.values.productFreshness === 'Brand New'}
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
                                    name="productFreshness"
                                    value="Second Hand"
                                    className="form-check-input"
                                    checked={formik.values.productFreshness === 'Second Hand'}
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
                                    name="productFreshness"
                                    value="Refurbished"
                                    className="form-check-input"
                                    checked={formik.values.productFreshness === 'Refurbished'}
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
                            {formik.touched.productFreshness && formik.errors.productFreshness ? (
                                <div id="product-freshness-description">{formik.errors.productFreshness}</div>
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
                            rows={5}
                            aria-label="product additional"
                            aria-describedby="product-additional-description"
                        />
                        {formik.touched.additionalDescription && formik.errors.additionalDescription ? (
                            <div id="product-additional-description">{formik.errors.additionalDescription}</div>
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
                            aria-label="product price"
                            aria-describedby="product-price-description"
                        />
                        {formik.touched.productPrice && formik.errors.productPrice ? (
                            <div id="product-price-description">{formik.errors.productPrice}</div>
                        ) : null}
                    </div>

                    <button type="submit" className='btn btn-primary'>Submit</button>
                </form>
            </section>
        </div>
    );
};

export default ProductForm;
