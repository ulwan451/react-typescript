import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '@/_store';
import { incrementCartItem } from '@/_store/slices/cartSlice';
import { IProduct } from '@/types/Product';
import { AppDispatch, RootState } from '@/_store/store';

export const useProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const { productDetail, loading, error } = useSelector(
        (state: RootState) => state.products
    );

    useEffect(() => {
        dispatch(fetchProductById(Number(id)));
    }, [dispatch, id]);

    const handleAddToCart = (product: IProduct) => {
        dispatch(incrementCartItem(product));
    };

    return { productDetail, loading, error, handleAddToCart };
};