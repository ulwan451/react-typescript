import React from "react";
import { decrementCartItem, incrementCartItem } from "@/_store/slices/cartSlice";
import { ICartItem } from "@/types/Product";
import { useDispatch } from "react-redux";

type CartQuantityProps = {
    item: ICartItem | undefined;
};

const CartQuantity: React.FC<CartQuantityProps> = ({ item }) => {
    const dispatch = useDispatch();

    if (!item) return;
    return (
        <div className="flex items-center space-x-3">
            <button onClick={() => dispatch(decrementCartItem(item.id))} className="bg-blue-200 text-blue-700 font-bold px-3 py-1 rounded-md">
                -
            </button>
            <span className="text-lg">{item.quantity}</span>
            <button onClick={() => dispatch(incrementCartItem(item))} className="bg-blue-200 text-blue-700 font-bold px-3 py-1 rounded-md">
                +
            </button>
        </div>
    );
};

export default CartQuantity;
