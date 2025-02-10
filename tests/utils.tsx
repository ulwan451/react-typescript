import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductPage from "../src/pages/ProductPage";
import CartPage from "../src/pages/CartPage";
import ProductDetailPage from "../src/pages/ProductDetailPage";
import { routerList } from "../src/router/routerList";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../src/_store/store";

export const navigateTo = (path: string, preloadedState = {}) => {
    const testStore = configureStore({ reducer: rootReducer, preloadedState });

    render(
        <Provider store={testStore}>
            <MemoryRouter initialEntries={[path]}>
                <Routes>
                    <Route path={routerList.product.root} element={<ProductPage />} />
                    <Route path={routerList.product.detail} element={<ProductDetailPage />} />
                    <Route path={routerList.cart.root} element={<CartPage />} />
                </Routes>
            </MemoryRouter>
        </Provider>
    );
};

export const renderWithProviders = (
    ui: React.ReactElement,
    {
        preloadedState = {},
        store = configureStore({ reducer: rootReducer, preloadedState }),
        route = "/",
        memoryRouterProps = {}
    } = {}
) => {
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[route]} {...memoryRouterProps}>
                {ui}
            </MemoryRouter>
        </Provider>
    );
};
