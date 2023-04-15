import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const retrieveProducts = createAsyncThunk(
    'products/retrieveProducts',
    async () => {
        const response = await axios.get('https://642f63edb289b1dec4b21d8d.mockapi.io/api/v1/products/');
        return response.data;
    }
);

export const retrieveProductById = createAsyncThunk(
    'products/retrieveProductById',
    async (param) => {
        const response = await axios.get(`https://642f63edb289b1dec4b21d8d.mockapi.io/api/v1/products/${param.id}`);
        return response.data;
    }
);

export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (param) => {
        const response = await axios.post('https://642f63edb289b1dec4b21d8d.mockapi.io/api/v1/products/', param);
        return response.data;
    }
);

export const updateProductById = createAsyncThunk(
    'products/updateProductById',
    async (param) => {
        const response = await axios.put(`https://642f63edb289b1dec4b21d8d.mockapi.io/api/v1/products/${param.id}`, param);
        return response.data;
    }
);

export const deleteProductById = createAsyncThunk(
    'products/deleteProductById',
    async (param) => {
        const response = await axios.delete(`https://642f63edb289b1dec4b21d8d.mockapi.io/api/v1/products/${param.id}`);
        return response.data;
    }
);