import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "@/hooks/use-toast";
import { ICartItem, IProduct } from "@/types/Product";

interface ICartState {
    items: ICartItem[];
}

const initialState: ICartState = {
    items: [],
};

const removeItemFromCart = (state: ICartState, productId: number) => {
    state.items = state.items.filter((item) => item.id !== productId);
    toast({
        title: "Item Removed!",
        description: "The product has been removed from your cart.",
        className: "border-2 border-blue-300 bg-blue-100 text-blue-700",
        duration: 1000,
    })
};

const addItemToCart = (state: ICartState, action: PayloadAction<IProduct>) => {
    state.items.push({ ...action.payload, quantity: 1 });
    toast({
        title: "Success!",
        description: "The product has been added. Continue shopping or proceed to checkout!",
        className: "border-2 border-green-300 bg-green-100 text-green-700",
        duration: 1000
    })
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        incrementCartItem: (state, action: PayloadAction<IProduct>) => {
            const existingItem = state.items.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                addItemToCart(state, action)
            }
        },
        decrementCartItem: (state, action: PayloadAction<number>) => {
            const existingItem = state.items.find((item) => item.id === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    removeItemFromCart(state, action.payload)
                }
            }
        },
        removeCartItem: (state, action: PayloadAction<number>) => {
            removeItemFromCart(state, action.payload)
        }
    },
});

export const { incrementCartItem, decrementCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
