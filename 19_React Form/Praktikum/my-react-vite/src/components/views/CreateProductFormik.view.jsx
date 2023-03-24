import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    productName: Yup.string()
        .required('Product name is required')
        .matches(/^[a-zA-Z ]+$/, 'Product name must only contain letters and spaces'),
    productCategory: Yup.string().required('Product category is required'),
    productImage: Yup.mixed().required('Product image is required'),
    productPrice: Yup.number()
        .typeError('Product price must be a number')
        .required('Product price is required')
        .positive('Product price must be a positive number'),
});

const CreateProductFormik = () => {
    const [products, setProducts] = useState([
        {
            id: "121234125",
            productName: "Kaos",
            productCategory: "1",
            productImage: "gambar1.jpg",
            productFreshness: "Brand New",
            productPrice: "34500",
        },
        {
            id: "432242342",
            productName: "Tas",
            productCategory: "2",
            productImage: "gambar2.jpg",
            productFreshness: "Second",
            productPrice: "65000",
        },
        {
            id: "543425234",
            productName: "Jeans",
            productCategory: "3",
            productImage: "gambar3.jpg",
            productFreshness: "Refurbished",
            productPrice: "75900",
        },
    ]);

    const formik = useFormik({
        initialValues: {
            id: '',
            productName: '',
            productCategory: '',
            productImage: null,
            productFreshness: '',
            productPrice: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            const newProduct = {
                id: Math.floor(Math.random() * 10000000000),
                productName: values.productName,
                productCategory: values.productCategory,
                productImage: values.productImage,
                productFreshness: values.productFreshness,
                productPrice: values.productPrice
            };

            const updatedProducts = [...products, newProduct];
            setProducts(updatedProducts);

            formik.resetForm();

        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="productName">Product Name</label>
                    <input
                        type="text"
                        id="productName"
                        name="productName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.productName}
                    />
                    {formik.touched.productName && formik.errors.productName ? (
                        <div>{formik.errors.productName}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="productCategory">Product Category</label>
                    <select
                        id="productCategory"
                        name="productCategory"
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

                <div>
                    <label htmlFor="productImage">Product Image</label>
                    <input
                        type="file"
                        id="productImage"
                        name="productImage"
                        onChange={(event) => formik.setFieldValue('productImage', event.currentTarget.files[0])}
                    />
                    {formik.touched.productImage && formik.errors.productImage ? (
                        <div>{formik.errors.productImage}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="productPrice">Product Price</label>
                    <input
                        type="number"
                        id="productPrice"
                        name="productPrice"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.productPrice}
                    />
                    {formik.touched.productPrice && formik.errors.productPrice ? (
                        <div>{formik.errors.productPrice}</div>
                    ) : null}
                </div>

                <button type="submit">Submit</button>
            </form>
            <section id="list product">
                <div className="container mb-5 pb-3">
                    <h2 className="text-center fw-bold fs-2">List Product</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">No UUID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product category</th>
                                <th scope="col">Product Freshness</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Lihat Detail</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <th scope="col">{product.id}</th>
                                    <th scope="col">{product.productName}</th>
                                    <th scope="col">{product.productCategory}</th>
                                    <th scope="col">{product.productFreshness}</th>
                                    <th scope="col">{product.productPrice}</th>
                                    <th>
                                        {/* <Link to={`/detailproduct/${product.id}`}>
                                            Detail {product.id}
                                        </Link> */}
                                    </th>
                                    <button className="btn btn-outline-warning me-2">Edit</button>
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() => handleDelete(product.id)}>
                                        Delete
                                    </button>
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