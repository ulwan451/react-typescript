import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import Header from '../../src/components/Header';
import { RootState } from '../../src/_store/store';

const mockStore = configureStore<RootState>();

const renderWithProviders = (store: ReturnType<typeof mockStore>) => {
    return render(
        <Provider store={store}>
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        </Provider>
    );
};

describe('Header Component', () => {
    it('should render two menu items: Home and Cart', () => {
        const store = mockStore({ cart: { items: [] } });
        renderWithProviders(store);

        expect(screen.getByText(/Home/i)).toBeInTheDocument();
        expect(screen.getByText(/Cart/i)).toBeInTheDocument();
    });

    it('should show cart item count when items exist', () => {
        const store = mockStore({ cart: { items: [{ quantity: 2 }, { quantity: 3 }] } });
        renderWithProviders(store);

        expect(screen.getByText('5')).toBeInTheDocument();
    });

    it('should highlight active menu item based on location', () => {
        vi.mock('react-router-dom', async () => {
            const actual = await vi.importActual('react-router-dom');
            return { ...actual, useLocation: () => ({ pathname: '/cart' }) };
        });

        const store = mockStore({ cart: { items: [] } });
        renderWithProviders(store);

        expect(screen.getByText(/Cart/i).closest('li')).toHaveClass('bg-yellow-100');
    });
});

