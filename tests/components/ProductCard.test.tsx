import React from "react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../utils";
import { db } from '../mock/db';
import ProductCard from '../../src/components/ProductCard';
import '@testing-library/jest-dom';
import { IProduct } from "../../src/types/Product";

describe("ProductCard Component", () => {
    const mockHandleAddToCart = vi.fn();
    let product: IProduct;

    beforeAll(() => {
        product = db.product.create();
    });

    afterAll(() => {
        db.product.delete({ where: { id: { equals: product.id } } });
    });

    it("should display product details", async () => {
        renderWithProviders(
            <ProductCard product={product} onAddToCart={mockHandleAddToCart} />
        );

        expect(screen.getByText(product.title)).toBeInTheDocument();
        expect(screen.getByText(product.category)).toBeInTheDocument();
        expect(screen.getByText(`$${product.price}`)).toBeInTheDocument();
        expect(screen.getByRole("img", { name: product.title })).toBeInTheDocument();
    });

    it("should display description if provided", async () => {
        renderWithProviders(
            <ProductCard product={product} description="Sample description" onAddToCart={mockHandleAddToCart} />
        );

        expect(screen.getByText("Sample description")).toBeInTheDocument();
    });

    it("should call onAddToCart when 'Add to Cart' button is clicked", async () => {
        renderWithProviders(
            <ProductCard product={product} onAddToCart={mockHandleAddToCart} />
        );

        const button = screen.getByRole("button", { name: /add to cart/i });
        fireEvent.click(button);

        expect(mockHandleAddToCart).toHaveBeenCalledWith(product);
    });

    it("should show quantity selector if product exists in cart", async () => {
        renderWithProviders(
            <ProductCard product={product} onAddToCart={mockHandleAddToCart} />,
            {
                preloadedState: {
                    cart: {
                        items: [{ ...product, quantity: 2 }],
                    },
                },
            }
        );

        expect(screen.getByText("2")).toBeInTheDocument();
    });

    it("should navigate to product detail page when clicked", async () => {
        renderWithProviders(
            <ProductCard product={product} onAddToCart={mockHandleAddToCart} />
        );

        const productLink = screen.getByRole("link", { name: product.title });
        expect(productLink.getAttribute("href")).toBe(`/${product.id}`);
    });
});
