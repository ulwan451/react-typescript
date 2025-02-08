import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "/vite.svg";
import HomeIcon from '@/assets/icons/HomeIcon';
import BagIcon from '@/assets/icons/BagIcon';
import { useSelector } from 'react-redux';
import { RootState } from '@/_store/store';

const Header: React.FC = () => {
    const location = useLocation();
    const cart = useSelector((state: RootState) => state.cart);

    return (
        <header className='relative z-10'>
            <nav className='fixed left-0 right-0 top-0 border-b-2 border-gray-200 p-5 bg-white flex items-center justify-between'>
                <div className='flex gap-3 items-center'>
                    <img src={logo} className="App-logo w-10 h-10" alt="logo" loading='lazy' />
                    <span className='text-xl font-bold'>Store</span>
                </div>
                <ul className='flex items-center gap-3'>
                    <Link to="/">
                        <li className={`flex justify-center gap-2 p-2 w-24 text-center rounded-xl ${location.pathname === "/" ? "bg-yellow-100 text-yellow-700" : "bg-gray-50 text-gray-500"}`}>
                            <HomeIcon isActive={location.pathname === "/"} />
                            Home
                        </li>
                    </Link>

                    <Link to="/cart">
                        <li className={`flex justify-center gap-2 relative p-2 w-24 text-center rounded-xl ${location.pathname === "/cart" ? "bg-yellow-100 text-yellow-700" : "bg-gray-50 text-gray-500"}`}>
                            <BagIcon isActive={location.pathname === "/cart"} />
                            Cart
                            {cart.items?.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-200 text-red-700 text-xs font-bold px-2 py-1 rounded-full">
                                    {cart.items.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0)}
                                </span>
                            )}
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
