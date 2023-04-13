import React from 'react'
import { Link } from "react-router-dom";

const ProductDetail = ({ product, formik }) => {

    return (
        <div key={product.id} className="p-5">
            <form
                onSubmit={formik.handleSubmit}
                className="container-fluid mt-5 w-350 p-5 rounded shadow">
                <Link to="/createproductformik">
                    <button className="btn btn-primary mb-3">Kembali</button>
                </Link>
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
                    />
                    {formik.touched.product_name && formik.errors.product_name ? (
                        <div>{formik.errors.product_name}</div>
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
                    >
                        <option value="">--Select--</option>
                        {['Category 1', 'Category 2', 'Category 3'].map((category) => (
                            <option key={category} value={category} selected={formik.values.product_category === category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    {formik.touched.product_category && formik.errors.product_category ? (
                        <div>{formik.errors.product_category}</div>
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
                                name="product_freshness"
                                value="Brand New"
                                className="form-check-input"
                                checked={formik.values.product_freshness === 'Brand New'}
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
                                name="product_freshness"
                                value="Second Hand"
                                className="form-check-input"
                                checked={formik.values.product_freshness === 'Second Hand'}
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
                                name="product_freshness"
                                value="Refurbished"
                                className="form-check-input"
                                checked={formik.values.product_freshness === 'Refurbished'}
                                onChange={formik.handleChange}
                            />
                            <label
                                htmlFor="validationSecondHand"
                                className="form-check-label">
                                Refurbished
                            </label>
                        </div>
                        {formik.touched.product_freshness && formik.errors.product_freshness ? (
                            <div>{formik.errors.product_freshness}</div>
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
                        rows={5} />
                    {formik.touched.aditional_information && formik.errors.aditional_information ? (
                        <div>{formik.errors.aditional_information}</div>
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
                    />
                    {formik.touched.price && formik.errors.price ? (
                        <div>{formik.errors.price}</div>
                    ) : null}
                </div>

                <button type="submit" className='btn btn-primary'>Update</button>
            </form>
        </div>
    )
}

export default ProductDetail