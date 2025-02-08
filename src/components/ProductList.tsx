import ProductCard from './ProductCard';
import { IProduct } from '../types/Product';
import { Skeleton } from './ui/skeleton';

interface ProductListProps {
    products: IProduct[];
    loading: boolean;
    error: string | null;
    onAddToCart: (product: IProduct) => void;
}

const ProductList = ({ products, loading, error, onAddToCart }: ProductListProps) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {error && <div>Error: {error}</div>}
            {loading &&
                Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <Skeleton className="w-full h-[200px] rounded-lg" />
                        <Skeleton className="w-3/4 h-[20px] rounded-full" />
                        <Skeleton className="w-1/2 h-[20px] rounded-full" />
                    </div>
                ))
            }
            {!loading && !error && products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={() => onAddToCart(product)}
                />
            ))}
        </div>
    );
};

export default ProductList;
