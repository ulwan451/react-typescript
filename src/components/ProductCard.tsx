import { RootState } from '@/_store/store';
import { IProduct } from '@/types/Product';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartQuantity from './CartQuantity';

interface ProductCardProps {
    product: IProduct;
    description?: string;
    onAddToCart: (product: IProduct) => void;
}

const ProductCard = ({ product, onAddToCart, description }: ProductCardProps) => {
    const cart = useSelector((state: RootState) => state.cart);
    const existingProduct = cart.items.find(item => item.id === product.id);

    return (
        <div className="bg-gray-50 border-2 w-full max-w-2xl border-gray-200 rounded-3xl p-4 flex flex-col gap-3">
            <Link to={`/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.title}
                    className="bg-white w-full p-5 border-gray-200 h-48 object-contain mb-2 rounded-3xl"
                />
            </Link>
            <div className='flex flex-col'>
                <span className='text-sm text-gray-400 uppercase'>{product.category}</span>
                <h3 className="font-medium">{product.title}</h3>
                {description &&
                    <span className='text-sm text-gray-400 uppercase'>{description}</span>
                }
            </div>
            <div className='flex items-center justify-between mt-auto'>
                <div className='flex flex-col'>
                    <span className='text-sm text-gray-400'>Price:</span>
                    <p className="text-blue-700 font-medium text-xl">${product.price}</p>
                </div>

                {existingProduct ? <CartQuantity item={existingProduct} /> :
                    <button onClick={() => onAddToCart(product)} className='bg-blue-700 cursor-pointer shadow-md px-5 py-3 text-sm rounded-xl text-white font-medium'>
                        Add to Cart
                    </button>
                }
            </div>
        </div>
    );
};

export default ProductCard;