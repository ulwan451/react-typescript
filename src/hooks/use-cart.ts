import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "@/_store/slices/cartSlice";
import { RootState } from "@/_store/store";

export const useCart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart);

    const handleDeleteFromCart = (productId: number) => dispatch(removeCartItem(productId));

    return {
        cart,
        handleDeleteFromCart,
    };
};
