import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routerList } from './routerList';
import ProductPage from '@/pages/ProductPage';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path={routerList.product.root} element={<ProductPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter