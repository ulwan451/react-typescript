import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routerList } from './routerList';
import ProductPage from '@/pages/ProductPage';
import CartPage from '@/pages/CartPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={routerList.product.root} element={<ProductPage />} />
                <Route path={routerList.cart.root} element={<CartPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter