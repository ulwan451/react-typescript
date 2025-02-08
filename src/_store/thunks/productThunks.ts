import { productServices } from "@/_services/product.services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async (_, { rejectWithValue }) => {
    try {
        return await productServices.getProducts();
    } catch (error) {
        return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch products");
    }
});

export const fetchProductById = createAsyncThunk("products/fetchProductById", async (id: number, { rejectWithValue }) => {
    try {
        return await productServices.getProductById(id);
    } catch (error) {
        return rejectWithValue(error instanceof Error ? error.message : "Failed to fetch product detail");
    }
});