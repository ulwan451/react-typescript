import { createSlice, PayloadAction, ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { fetchProducts } from "../thunks/productThunks";
import { handlePending, handleRejected } from "../utils/handlers";
import { IProduct } from "@/types/Product";

interface IProductState {
    products: IProduct[];
    loading: boolean;
    error: string | null;
}

const initialState: IProductState = {
    products: [],
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

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        handleFetchProducts(builder);
    },
});

export default productSlice.reducer;