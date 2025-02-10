import React from "react";
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils";
import '@testing-library/jest-dom';
import { IProduct } from "../../src/types/Product";
import CartQuantity from "../../src/components/CartQuantity";
import userEvent from "@testing-library/user-event";

describe('CartQuantity', () => {
    const renderComponent = () => {
        const product: IProduct = {
            id: 1,
            title: "Title",
            price: 99.5,
            description: "Description",
            category: "Category",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        }

        renderWithProviders(<CartQuantity item={product} />);

        const getAddToCartButton = () => {
            return screen.queryByRole("button", {
                name: /add to cart/i,
            });
        }

        const getQuantityControls = () => ({
            quantity: screen.queryByRole("status"),
            decrementButton: screen.queryByRole("button", {
                name: "-",
            }),
            incrementButton: screen.queryByRole("button", {
                name: "+",
            }),
        });

        const user = userEvent.setup();

        const addToCart = async () => {
            const button = getAddToCartButton();
            await user.click(button!);
        };

        const incrementQuantity = async () => {
            const { incrementButton } = getQuantityControls();
            await user.click(incrementButton!);
        };

        const decrementQuantity = async () => {
            const { decrementButton } = getQuantityControls();
            await user.click(decrementButton!);
        };

        return {
            getAddToCartButton,
            addToCart,
            getQuantityControls,
            incrementQuantity,
            decrementQuantity,
        };

    }

    it("should render the Add to Cart button", () => {
        const { getAddToCartButton } = renderComponent();

        expect(getAddToCartButton()).toBeInTheDocument();
    });

    it("should add the product to the cart", async () => {
        const {
            getAddToCartButton,
            addToCart,
            getQuantityControls,
        } = renderComponent();

        await addToCart();

        const {
            quantity,
            incrementButton,
            decrementButton
        } = getQuantityControls();

        expect(quantity).toHaveTextContent("1");
        expect(decrementButton).toBeInTheDocument();
        expect(incrementButton).toBeInTheDocument();
        expect(getAddToCartButton()).not.toBeInTheDocument();
    });

    it("should remove the product from the cart", async () => {
        const {
            getAddToCartButton,
            decrementQuantity,
            addToCart,
            getQuantityControls,
        } = renderComponent();
        await addToCart();

        await decrementQuantity();

        const {
            incrementButton,
            decrementButton,
            quantity
        } = getQuantityControls();

        expect(quantity).not.toBeInTheDocument();
        expect(decrementButton).not.toBeInTheDocument();
        expect(incrementButton).not.toBeInTheDocument();
        expect(getAddToCartButton()).toBeInTheDocument();
    });


    it("should increment the quantity", async () => {
        const {
            addToCart,
            incrementQuantity,
            getQuantityControls
        } = renderComponent();

        await addToCart();
        await incrementQuantity();

        const { quantity } = getQuantityControls();
        expect(quantity).toHaveTextContent("2");
    });

    it("should decrement the quantity", async () => {
        const {
            addToCart,
            incrementQuantity,
            decrementQuantity,
            getQuantityControls,
        } = renderComponent();

        await addToCart();
        await incrementQuantity();

        await decrementQuantity();

        const { quantity } = getQuantityControls();
        expect(quantity).toHaveTextContent("1");
    });
})