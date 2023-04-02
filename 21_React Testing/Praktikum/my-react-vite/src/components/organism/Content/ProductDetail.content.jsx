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
    )
}

export default ProductDetail