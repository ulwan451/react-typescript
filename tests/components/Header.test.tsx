import React from 'react';
import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import Header from '../../src/components/Header';
import { renderWithProviders } from '../utils';
import '@testing-library/jest-dom';

describe('Header Component', () => {
    it('should render two menu items: Home and Cart', () => {
        renderWithProviders(<Header />);

        expect(screen.getByText('Home', { exact: true })).toBeInTheDocument();
        expect(screen.getByText('Cart', { exact: true })).toBeInTheDocument();
    });

    it('should show cart item count when items exist', () => {
        renderWithProviders(<Header />, {
            preloadedState: { cart: { items: [{ quantity: 2 }, { quantity: 3 }] } }
        });

        expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('should highlight active menu item based on location', () => {
        renderWithProviders(<Header />, { route: "/cart" });

        expect(screen.getByText(/Cart/i).closest('li')).toHaveClass('bg-yellow-100');
    });
});
