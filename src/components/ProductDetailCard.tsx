import { IProduct } from '@/types/Product';
import { Skeleton } from './ui/skeleton';
import ProductCard from './ProductCard';

interface ProductDetailCardProps {
    productDetail: IProduct | null;
    loading: boolean;
    error: string | null;
}

const ProductDetailCard = ({ productDetail, loading, error }: ProductDetailCardProps) => {
    return (
        <div className="flex flex-col items-center justify-center">
            {loading && (
                <div className="max-w-2xl w-full flex flex-col gap-2">
                    <Skeleton className="max-w-2xl w-full h-[300px] rounded-lg" />
                    <Skeleton className="w-3/4 h-[20px] rounded-full" />
                    <Skeleton className="w-1/2 h-[20px] rounded-full" />
                </div>
            )}
            {error && <div>Error: {error}</div>}
            {!loading && !error && productDetail && (
                <ProductCard
                    product={productDetail}
                    description={productDetail.description}
                />
            )}
        </div>
    );
};

export default ProductDetailCard;
