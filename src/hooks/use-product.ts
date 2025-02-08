import { fetchProducts } from '@/_store';
import { AppDispatch, RootState } from '@/_store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IProduct } from '@/types/Product';
import { incrementCartItem } from '@/_store/slices/cartSlice';

export const useProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector(
        (state: RootState) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAddToCart = (product: IProduct) => {
        dispatch(incrementCartItem(product));
    };

    return { products, loading, error, handleAddToCart };
};