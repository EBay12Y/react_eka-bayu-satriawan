import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CreateProduct, LandingPage, ProductDetail, SignupForm, Counter, CreateProductFormik, SignupFormik, LoginFormik } from './components/views'

const RootRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/createproduct" element={<CreateProduct />} />
                <Route path="/createproductformik" element={<CreateProductFormik />} />
                <Route path="/detailproduct/:id" element={<ProductDetail />} />
                <Route path="/signupformik" element={<SignupFormik />} />
                <Route path="/loginformik" element={<LoginFormik />} />
                <Route path="/signup" element={<SignupForm />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RootRouter