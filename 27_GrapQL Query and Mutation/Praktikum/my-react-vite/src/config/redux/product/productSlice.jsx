import { createSlice } from "@reduxjs/toolkit";
import {
    retrieveProducts,
    retrieveProductById,
    createProduct,
    updateProductById,
    deleteProductById,
} from "./productThunk";

const initialState = {
    products: [],
    productDetail: [],
    retrieveProductsLoading: false,
    retrieveProductsError: undefined,

    retrieveProductByIdLoading: false,
    retrieveProductByIdError: undefined,

    createProductLoading: false,
    createProductError: undefined,

    updateProductByIdLoading: false,
    updateProductByIdError: undefined,

    deleteProductByIdLoading: false,
    deleteProductByIdError: undefined,

    type: "",
};

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {
        // add: (state, action) => {
        //     return {
        //         ...state,
        //         products: action.payload,
        //     };
        // },
        // update: (state, action) => {
        //     const { id, updatedProduct } = action.payload;
        //     const updatedProducts = state.products.map((product) => {
        //         if (product.id === id) {
        //             return { ...product, ...updatedProduct };
        //         }
        //         return product;
        //     });
        //     return {
        //         ...state,
        //         products: updatedProducts,
        //     };
        // },
        // delete: (state, action) => {
        //     const productId = action.payload;
        //     const updatedProducts = state.products.filter(
        //         (product) => product.id !== productId
        //     );
        //     return {
        //         ...state,
        //         products: updatedProducts,
        //     };
        // },
    },
    extraReducers: (builder) => {
        builder
            .addCase(retrieveProducts.pending, (state, action) => {
                return {
                    ...state,
                    retrieveProductsLoading: true,
                    retrieveProductsError: undefined,
                    type: action.type,
                };
            })
            .addCase(retrieveProducts.fulfilled, (state, action) => {
                return {
                    ...state,
                    products: action.payload,
                    retrieveProductsLoading: false,
                    retrieveProductsError: undefined,
                    type: action.type,
                };
            })
            .addCase(retrieveProducts.rejected, (state, action) => {
                return {
                    ...state,
                    retrieveProductsLoading: false,
                    retrieveProductsError: action.payload,
                    type: action.type,
                };
            })
            // retrieveProductById
            .addCase(retrieveProductById.pending, (state, action) => {
                return {
                    ...state,
                    retrieveProductByIdLoading: true,
                    retrieveProductByIdError: undefined,
                    type: action.type,
                };
            })
            .addCase(retrieveProductById.fulfilled, (state, action) => {
                return {
                    ...state,
                    products: action.payload,
                    retrieveProductByIdLoading: false,
                    retrieveProductByIdError: undefined,
                    type: action.type,
                };
            })
            .addCase(retrieveProductById.rejected, (state, action) => {
                return {
                    ...state,
                    retrieveProductByIdLoading: false,
                    retrieveProductByIdError: action.payload,
                    type: action.type,
                };
            })
            // createProduct
            .addCase(createProduct.pending, (state, action) => {
                return {
                    ...state,
                    createProductLoading: true,
                    createProductError: undefined,
                    type: action.type,
                };
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                return {
                    ...state,
                    products: action.payload,
                    createProductLoading: false,
                    createProductError: undefined,
                    type: action.type,
                };
            })
            .addCase(createProduct.rejected, (state, action) => {
                return {
                    ...state,
                    createProductLoading: false,
                    createProductError: action.payload,
                    type: action.type,
                };
            })
            // updateProduct
            .addCase(updateProductById.pending, (state, action) => {
                return {
                    ...state,
                    updateProductByIdLoading: true,
                    updateProductByIdError: undefined,
                    type: action.type,
                };
            })
            .addCase(updateProductById.fulfilled, (state, action) => {
                return {
                    ...state,
                    products: action.payload,
                    updateProductByIdLoading: false,
                    updateProductByIdError: undefined,
                    type: action.type,
                };
            })
            .addCase(updateProductById.rejected, (state, action) => {
                return {
                    ...state,
                    updateProductByIdLoading: false,
                    updateProductByIdError: action.payload,
                    type: action.type,
                };
            })
            // deleteProductById
            .addCase(deleteProductById.pending, (state, action) => {
                return {
                    ...state,
                    deleteProductByIdLoading: true,
                    deleteProductByIdError: undefined,
                    type: action.type,
                };
            })
            .addCase(deleteProductById.fulfilled, (state, action) => {
                return {
                    ...state,
                    products: action.payload,
                    deleteProductByIdLoading: false,
                    deleteProductByIdError: undefined,
                    type: action.type,
                };
            })
            .addCase(deleteProductById.rejected, (state, action) => {
                return {
                    ...state,
                    deleteProductByIdLoading: false,
                    deleteProductByIdError: action.payload,
                    type: action.type,
                };
            })
            ;
    },
});

export default productSlice;