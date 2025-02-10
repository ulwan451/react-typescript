import React from "react";
import { decrementCartItem, incrementCartItem } from "@/_store/slices/cartSlice";
import { IProduct } from "@/types/Product";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/_store/store";

type CartQuantityProps = {
    item: IProduct;
};

const CartQuantity: React.FC<CartQuantityProps> = ({ item }) => {
    const cart = useSelector((state: RootState) => state.cart);
    const cartItem = cart.items.find(val => val.id === item.id);
    const dispatch = useDispatch();

    if (!cartItem) {
        return (
            <button onClick={() => dispatch(incrementCartItem(item))} className='bg-blue-700 cursor-pointer shadow-md px-5 py-3 text-sm rounded-xl text-white font-medium'>
                Add to Cart
            </button>
        )
    }

    return (
        <div className="flex items-center space-x-3">
            <button onClick={() => dispatch(decrementCartItem(item.id))} className="bg-blue-200 text-blue-700 font-bold px-3 py-1 rounded-md">
                -
            </button>
            <span role="status" className="text-lg">{cartItem.quantity}</span>
            <button onClick={() => dispatch(incrementCartItem(item))} className="bg-blue-200 text-blue-700 font-bold px-3 py-1 rounded-md">
                +
            </button>
        </div>
    );
};

export default CartQuantity;
