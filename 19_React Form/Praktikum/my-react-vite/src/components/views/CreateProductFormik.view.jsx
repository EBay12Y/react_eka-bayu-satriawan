import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logoBS from "../../assets/img/bootstrap-logo.svg";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Navbar, Article } from '../organism';

const validationSchema = Yup.object().shape({
    productName: Yup.string()
        .required('Product name is required')
        .matches(/^[a-zA-Z ]+$/, 'Product name must only contain letters and spaces'),
    productCategory: Yup.string().required('Product category is required'),
    productImage: Yup.mixed().required('Product image is required'),
    productFreshness: Yup.string().required('Product freshness is required'),
    productPrice: Yup.number()
        .typeError('Product price must be a number')
        .required('Product price is required')
        .positive('Product price must be a positive number'),
});

const CreateProductFormik = () => {
    const [isIndonesia, setIsIndonesia] = useState(false);
    const handleBahasa = () => setIsIndonesia(!isIndonesia);
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
                productImage: values.productImage.name,
                productFreshness: values.productFreshness,
                productPrice: values.productPrice
            };

            const updatedProducts = [...products, newProduct];
            setProducts(updatedProducts);

            formik.resetForm();
        },
    });

    const handleDelete = (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus data dengan id: " + id + " ini?")) {
            const newProducts = products.filter((item) => item.id !== id);
            setProducts(newProducts);
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
                <form onSubmit={formik.handleSubmit} className="d-grid justify-content-center mt-5">
                    <div className="mb-4">
                        <label htmlFor="productName">Product Name</label><br />
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
                    <div className="mb-4">
                        <label htmlFor="productCategory">Product Category</label><br />
                        <select
                            id="productCategory"
                            name="productCategory"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.productCategory}
                        >
                            <option value="">--Select--</option>
                            <option value="1">Category 1</option>
                            <option value="2">Category 2</option>
                            <option value="3">Category 3</option>
                        </select>
                        {formik.touched.productCategory && formik.errors.productCategory ? (
                            <div>{formik.errors.productCategory}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="productImage">Product Image</label><br />
                        <input
                            type="file"
                            id="productImage"
                            name="productImage"
                            onChange={(event) => {
                                formik.setFieldValue("productImage", event.currentTarget.files[0])
                            }}
                        />
                        {formik.touched.productImage && formik.errors.productImage ? (
                            <div>{formik.errors.productImage}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label>
                            Product Freshness:
                            <br />
                            <input
                                type="radio"
                                name="productFreshness"
                                value="Brand New"
                                checked={formik.values.productFreshness === 'Brand New'}
                                onChange={formik.handleChange} />
                            Brand New
                            <br />

                            <input
                                type="radio"
                                name="productFreshness"
                                value="Second Hand"
                                checked={formik.values.productFreshness === 'Second Hand'}
                                onChange={formik.handleChange} />
                            Second Hand
                            <br />

                            <input
                                type="radio"
                                name="productFreshness"
                                value="Refurbished"
                                checked={formik.values.productFreshness === 'Refurbished'}
                                onChange={formik.handleChange} />
                            Refurbished
                            <br />
                            {formik.touched.productFreshness && formik.errors.productFreshness ? (
                                <div>{formik.errors.productFreshness}</div>
                            ) : null}
                        </label>
                        <br />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="productPrice">Product Price</label><br />
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
                                    <th scope="col">{product.productImage}</th>
                                    <th scope="col">{product.productFreshness}</th>
                                    <th scope="col">{product.productPrice}</th>
                                    <th>
                                        <Link to={`/detailproduct/${product.id}`}>
                                            Detail {product.id}
                                        </Link>
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