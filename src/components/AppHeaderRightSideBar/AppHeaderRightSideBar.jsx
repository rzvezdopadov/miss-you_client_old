import { React } from 'react';
import { Link } from "react-router-dom";
import { store } from "../../utils/store";

export function AppHeaderRightSideBarNoAuth() {
    return (
        <>
            <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Главная</Link>
            <Link to="/about" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">О нас</Link>
            <Link to="/partners" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Партнерство</Link>    
            <Link to="/enter" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Войти</Link>
        </>
    );
}

export function AppHeaderRightSideBarAuth() {
    return (
        <>
            <Link Link="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Главная</Link>
            <Link href="/vapors" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Мои пары</Link>
            <Link href="/searchvapors" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Искать людей</Link>
            <Link href="/settings" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Настройки</Link>    
            <Link href="/logout" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Выйти</Link>    
        </>
    );
}

export function AppHeaderRightSideBar() {
    const { JWT } = store.getState();

    return (
        <div className="flex space-x-4">
            { JWT ? <AppHeaderRightSideBarAuth /> : <AppHeaderRightSideBarNoAuth /> } 
        </div>
    );
}
