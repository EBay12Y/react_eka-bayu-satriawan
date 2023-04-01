import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
            productName: "John",
            productCategory: "Doe",
            productFreshness: "Doe",
            productPrice: "Doe",
            image: "Doe",
            additionalDescription: "Doe",
        },
    ]
};

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            return {
                ...state,
                products: action.payload,
            };
        },
        update: (state, action) => {
            const { id, updatedProduct } = action.payload;
            const updatedProducts = state.products.map((product) => {
                if (product.id === id) {
                    return { ...product, ...updatedProduct };
                }
                return product;
            });
            return {
                ...state,
                products: updatedProducts,
            };
        },
        delete: (state, action) => {
            const productId = action.payload;
            const updatedProducts = state.products.filter(
                (product) => product.id !== productId
            );
            return {
                ...state,
                products: updatedProducts,
            };
        },
    },
});

export const { actions: productAction, reducer: productReducer } = productSlice;