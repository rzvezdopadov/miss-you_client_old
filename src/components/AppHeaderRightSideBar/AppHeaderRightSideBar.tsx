import * as React from 'react';
import { Link } from "react-router-dom";
import { store } from "../../utils/store";
import { logout } from '../logout/logout';

function AppHeaderRightSideBarNoAuth() {
    return (
        <>
            <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Главная</Link>
            <Link to="/about" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">О нас</Link>
            <Link to="/partners" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Партнерство</Link>    
            <Link to="/enter" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Войти</Link>
        </>
    );
}

function AppHeaderRightSideBarAuth() {
    return (
        <>
            <Link to="/vapors" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Мои пары</Link>
            <Link to="/searchvapors" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Искать людей</Link>
            <Link to="/settings" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Настройки</Link>    
            <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" onClick={ logout }>Выйти</Link>    
        </>
    );
}

export function AppHeaderRightSideBar() {
    const { jwt } = store.getState();

    return (
        <div className="flex space-x-4">
            {
               jwt ? <AppHeaderRightSideBarAuth /> : <AppHeaderRightSideBarNoAuth />
            } 
        </div>
    );
}
