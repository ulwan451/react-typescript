import React from "react";
import { useCart } from "@/hooks/use-cart";
import CartList from "@/components/CartList";
import Layout from "@/components/Layout";
import Title from "@/components/Title";

const CartPage: React.FC = () => {
    const { cart, handleDeleteFromCart } = useCart();

    return (
        <Layout>
            <Title>Your Cart</Title>
            <CartList
                items={cart.items}
                onDelete={handleDeleteFromCart}
            />
        </Layout>
    );
};

export default CartPage;
