import CartItem from "@/components/CartItem";
import { ICartItem } from "@/types/Product";
import { Link } from "react-router-dom";

interface CartListProps {
    items: ICartItem[];
    onDelete: (id: number) => void;
}

const CartList = ({ items, onDelete }: CartListProps) => {
    return (
        <div className="grid grid-cols-1 gap-5">
            {items?.length > 0 ? (
                items.map((product) => (
                    <CartItem
                        key={product.id}
                        product={product}
                        onDelete={() => onDelete(product.id)}
                    />
                ))
            ) : (
                <div className="flex flex-col items-center justify-center h-full">
                    <p className="text-center text-lg text-gray-600 mb-5">Oops!<br />Your cart is empty. Start shopping now!</p>
                    <Link to={"/"}>
                        <button
                            className="mt-4 px-6 py-2 bg-blue-100 text-blue-700 rounded-xl"
                        >
                            Back to Products
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartList;
