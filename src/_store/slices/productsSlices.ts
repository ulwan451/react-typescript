import { createSlice, PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchProductById, fetchProducts } from "../thunks/productThunks";
import { handlePending, handleRejected } from "../utils/handlers";
import { IProduct } from "../../types/Product";

interface IProductState {
    products: IProduct[];
    productDetail: IProduct;
    loading: boolean;
    error: string | null;
}

const initialState: IProductState = {
    products: [],
    productDetail: {
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating: { rate: 0, count: 0 },
    },
    loading: false,
    error: null,
};

const handleFetchProducts = (builder: ActionReducerMapBuilder<typeof initialState>) => {
    builder
        .addCase(fetchProducts.pending, handlePending)
        .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
            state.loading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, handleRejected);
};

const handleFetchProductById = (builder: ActionReducerMapBuilder<typeof initialState>) => {
    builder
        .addCase(fetchProductById.pending, handlePending)
        .addCase(fetchProductById.fulfilled, (state, action: PayloadAction<IProduct>) => {
            state.loading = false;
            state.productDetail = action.payload;
        })
        .addCase(fetchProductById.rejected, handleRejected);
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleFetchProducts(builder);
        handleFetchProductById(builder);
    },
});

export default productSlice.reducer;