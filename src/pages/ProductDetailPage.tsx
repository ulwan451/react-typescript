import React from 'react';
import Layout from '../components/Layout';
import { useProductDetail } from '@/hooks/use-product-detail';
import ProductDetailCard from '@/components/ProductDetailCard';
import Title from '@/components/Title';

const ProductDetailPage: React.FC = () => {
    const { productDetail, loading, error } = useProductDetail();

    return (
        <Layout>
            <Title>Detail Product</Title>
            <ProductDetailCard
                productDetail={productDetail}
                loading={loading}
                error={error}
            />
        </Layout>
    );
};

export default ProductDetailPage;
