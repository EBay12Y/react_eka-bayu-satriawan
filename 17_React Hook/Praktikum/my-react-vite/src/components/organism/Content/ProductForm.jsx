import React, { useState } from "react";
import logoBS from "../../../assets/img/bootstrap-logo.svg";

const ProductForm = ({
    randomNumber,
    article,
    bahasa,
    gantiBahasa,
    productName,
    handleProductName,
    productCategory,
    handleProductCategory,
    productImage,
    handleProductImage,
    productPrice,
    handleProductPrice,
    handleSubmit,
    formProduct,
    setName,
    setCategory,
    setFreshness,
    setPrice,
}) => {

    return (
        <div>
            <section className="d-grid justify-content-center py-5">
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
                <form action="" className="container-fluid mt-5 needs-validation" id="form" noValidate="" onSubmit={handleSubmit}>
                    <h3 className="mb-4">Detail Product</h3>
                    <div className="mb-3 col-md-4 col-sm-8">
                        <label htmlFor="validationProductName" className="form-label">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name="product-name"
                            className={formProduct.productName ? "form-control" : "form-control is-invalid"}
                            id="validationProductName"
                            value={formProduct.productName}
                            onChange={setName}
                            required=""
                        />
                        <div className="invalid-feedback">Please add a product name.</div>
                    </div>
                    <div className="mb-3 col-md-4 col-sm-6">
                        <label htmlFor="product-category" className="form-label">
                            Product Category
                        </label>
                        <select
                            className="form-select"
                            name="product-category"
                            id="product-category"
                            value={formProduct.productCategory}
                            onChange={setCategory}
                            required=""
                        >
                            <option value="">Choose...</option>
                            <option value="category 1">Category 1</option>
                            <option value="category 2">Category 2</option>
                            <option value="category 3">Category 3</option>
                        </select>
                        <div className="invalid-feedback">
                            Please choose a product category.
                        </div>
                    </div>
                    <div className="mb-3 col-md-4 col-sm-6">
                        <label htmlFor="product-category" className="form-label">
                            Image of Product
                        </label>
                        <input
                            type="file"
                            name="image"
                            required=""
                            className={productImage ? "form-control" : "form-control is-invalid"}
                            value={productImage}
                            onChange={handleProductImage}
                        />
                        <div className="invalid-feedback">
                            Please provide a valid image.
                        </div>
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="mb-3 col-md-4 col-sm-6">
                        <label className="pb-1 form-label">Product Freshness</label>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="validationProductBrandNew"
                                name="radio-stacked"
                                defaultValue="Brand New"
                                defaultChecked=""
                                checked={formProduct.productFreshness === "Brand New"}
                                onChange={setFreshness}
                            />
                            <label
                                htmlFor="validationProductBrandNew"
                                className="form-check-label"
                            >
                                Brand New
                            </label>
                            <div className="invalid-feedback">Please choose one</div>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="validationSecondHand"
                                name="radio-stacked"
                                defaultValue="Second Hand"
                                checked={formProduct.productFreshness === "Second Hand"}
                                onChange={setFreshness}
                            />
                            <label
                                htmlFor="validationSecondHand"
                                className="form-check-label"
                            >
                                Second Hand
                            </label>
                            <div className="invalid-feedback">Please choose one</div>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                className="form-check-input"
                                id="validationRefurbrished"
                                name="radio-stacked"
                                defaultValue="Refurbished"
                                checked={formProduct.productFreshness === "Refurbished"}
                                onChange={setFreshness}
                            />
                            <label
                                htmlFor="validationRefurbrished"
                                className="form-check-label"
                            >
                                Refurbrished
                            </label>
                            <div className="invalid-feedback">Please choose one</div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Additional Description</label>
                        <textarea className="form-control" rows={5} required="" />
                        <div className="invalid-feedback">Please provide a description</div>
                        <div className="valid-feedback">Looks good!</div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="validationProductPrice" className="form-label">
                            Product Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            className={formProduct.productPrice ? "form-control" : "form-control is-invalid"}
                            id="validationProductPrice"
                            placeholder="$1"
                            value={formProduct.productPrice}
                            onChange={setPrice}
                            required=""
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 mb-5"
                        id="btn-submit"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Submit"
                    // onClick={randomNumber}
                    >
                        Submit
                    </button>
                </form>
            </section>
        </div>
    );
};

export default ProductForm;
