import { ICartItem } from "@/types/Product";
import CartQuantity from "./CartQuantity";

interface CartItemProps {
    product: ICartItem;
    onDelete: () => void;
}

const CartItem = ({ product, onDelete }: CartItemProps) => {
    return (
        <div className="bg-gray-50 border-2 border-gray-200 rounded-3xl p-4 flex items-center justify-center gap-3">
            <img
                src={product.image}
                alt={product.title}
                className="bg-white w-20 h-20 p-5 border-gray-200 object-contain mb-2 rounded-3xl"
            />
            <div className="w-full flex flex-col">
                <h3 className="font-medium">{product.title}</h3>
                <span className='text-sm text-gray-400'>${product.price} x {product.quantity}</span>
                <p className="text-blue-700 font-medium text-lg">Total: ${(product.price * product.quantity).toFixed(2)}</p>
                <div className="mt-2 flex items-center justify-between">
                    <button onClick={onDelete} className='inline-block bg-red-100 text-red-700 px-3 py-2 text-sm rounded-xl font-medium'>
                        Delete
                    </button>
                    <div className="flex items-center space-x-3">
                        <CartQuantity item={product} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;