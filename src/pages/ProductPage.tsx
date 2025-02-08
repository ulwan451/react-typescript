import React from 'react';
import Layout from '@/components/Layout';
import Title from '@/components/Title';
import ProductList from '@/components/ProductList';
import { useProducts } from '@/hooks/use-product';

const ProductPage: React.FC = () => {
    const { products, loading, error, handleAddToCart } = useProducts();

    return (
        <Layout>
            <Title>Exclusive Product</Title>
            <ProductList
                products={products}
                loading={loading}
                error={error}
                onAddToCart={handleAddToCart}
            />
        </Layout>
    );
};

export default ProductPage;