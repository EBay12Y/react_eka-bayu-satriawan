import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Navbar, ProductForm, Footer, Article, ProductList } from "../organism";

const CreateProduct = () => {
    const [isIndonesia, setIsIndonesia] = useState(false);
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState();
    const [productImage, setProductImage] = useState();
    const [productPrice, setProductPrice] = useState();
    const stateGlobal = useSelector(state => state);

    const [products, setProducts] = useState([
        {
            id: "121234125",
            productName: "Kaos",
            productCategory: "1",
            productFreshness: "Brand New",
            productPrice: "34500",
        },
        {
            id: "432242342",
            productName: "Tas",
            productCategory: "2",
            productFreshness: "Second",
            productPrice: "65000",
        },
        {
            id: "543425234",
            productName: "Jeans",
            productCategory: "3",
            productFreshness: "Refurbished",
            productPrice: "75900",
        },
    ]);

    const [formProduct, setFormProduct] = useState({
        id: "",
        productName: "",
        productCategory: "",
        productFreshness: "",
        productPrice: "",
    });

    const handleBahasa = () => setIsIndonesia(!isIndonesia);

    const handleRandomNumber = (e) => {
        e.preventDefault();
        const randomNumber = Math.floor(Math.random() * 100);
        console.log(`Random number: ${randomNumber}`);
    }
    const handleProductName = (e) => {
        if (e.target.value.length > 10) {
            alert("Product name tidak boleh 10 karakter");
            e.target.value = "";
        }
        setProductName(e.target.value);
    };
    const handleProductCategory = (e) => {
        if (e.target.value === "") {
            alert("Product category belum dipilih");
            e.target.value = "";
        }
        setProductCategory(e.target.value);
    };
    const handleProductImage = (e) => setProductImage(e.target.value);
    const handleProductPrice = (e) => setProductPrice(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts([
            ...products,
            { ...formProduct, id: Math.floor(Math.random() * 10000000000) },
        ]);
        setFormProduct({
            id: "",
            productName: "",
            productCategory: "",
            productFreshness: "",
            productPrice: "",
        });
    };

    const handleDelete = (id) => {
        if (window.confirm("Apakah Anda yakin ingin menghapus data dengan id: " + id + " ini?")) {
            const newProducts = products.filter((item) => item.id !== id);
            setProducts(newProducts);
        }
    };

    // useEffect(() => {
    //     alert("Welcome");
    // }, []);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <div>
            <Navbar />
            <ProductForm
                randomNumber={handleRandomNumber}
                article={Article}
                bahasa={isIndonesia}
                gantiBahasa={handleBahasa}
                handleProductName={handleProductName}
                productName={productName}
                handleProductCategory={handleProductCategory}
                productImage={productImage}
                handleProductImage={handleProductImage}
                productCategory={productCategory}
                handleProductPrice={handleProductPrice}
                productPrice={productPrice}
                handleSubmit={handleSubmit}
                formProduct={formProduct}
                setName={(e) =>
                    setFormProduct({ ...formProduct, productName: e.target.value })
                }
                setCategory={(e) =>
                    setFormProduct({ ...formProduct, productCategory: e.target.value })
                }
                setFreshness={(e) =>
                    setFormProduct({ ...formProduct, productFreshness: e.target.value })
                }
                setPrice={(e) =>
                    setFormProduct({ ...formProduct, productPrice: e.target.value })
                }
            />
            <ProductList products={products} handleDelete={handleDelete} />
            <Footer />
        </div>
    )
}

export default CreateProduct