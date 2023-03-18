import React, { useState } from 'react'
import { Navbar, ProductForm, Footer, Article } from "../organism";

const CreateProduct = () => {
    const [isIndonesia, setIsIndonesia] = useState(false);
    const [productName, setProductName] = useState("");
    const [productCategory, setProductCategory] = useState("");
    const [productImage, setProductImage] = useState();
    const [productPrice, setProductPrice] = useState("");

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
            />
            <Footer />
        </div>
    )
}

export default CreateProduct