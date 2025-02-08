import { fetchProducts } from '@/_store';
import { AppDispatch, RootState } from '@/_store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useProducts = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, error } = useSelector(
        (state: RootState) => state.products
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);


    return { products, loading, error };
};