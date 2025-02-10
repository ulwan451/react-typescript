import { it, expect, describe } from 'vitest'
import { screen } from '@testing-library/react'
import { navigateTo } from './utils'
import '@testing-library/jest-dom';
import { db } from './mock/db';

describe('AppRouter', () => {
    it('should render the home page for /', () => {
        navigateTo('/');

        expect(screen.getByRole('heading', { name: 'Exclusive Product' })).toBeInTheDocument();
    })

    it('should render the product details page for /:id', async () => {
        const product = db.product.create();

        navigateTo("/" + product.id);

        expect(screen.getByRole("heading", { name: "Detail Product" })).toBeInTheDocument();

        db.product.delete({ where: { id: { equals: product.id } } });
    });

    it('should render the cart page for /cart', () => {
        navigateTo('/cart');

        expect(screen.getByRole('heading', { name: "Your Cart" })).toBeInTheDocument();
    })
})