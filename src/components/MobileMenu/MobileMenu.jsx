import { Link } from "react-router-dom";
import { store } from "../../utils/store";

function MobileMenuNoAuth() {  
    return (
        <>
            <a className="text-right cursor-pointer text-4xl" onClick={ closeMobileMenu }>&times;</a>
            <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Главная</Link>
            <Link to="/about" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">О нас</Link>
            <Link to="/partners" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Партнерство</Link>    
            <Link to="/enter" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Войти</Link>      
        </>
    );
}

function MobileMenuAuth() {  
    return (
        <>
            <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Главная</Link>
            <Link to="/vapors" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Мои пары</Link>
            <Link to="/searchvapors" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Искать людей</Link>
            <Link to="/settings" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Настройки</Link>    
            <Link to="/logout" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Выйти</Link>    
        </>   
    );
}

export function openMobileMenu() {
    let mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu) return;

    mobileMenu.classList.remove('left-[-250px]');
    mobileMenu.classList.add('left-0');    
}

export function closeMobileMenu() {
    let mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu) return;

    mobileMenu.classList.remove('left-0');
    mobileMenu.classList.add('left-[-250px]');   
}

export function MobileMenu() { 
    const { JWT } = store.getState();

    return (
        <div  id="mobile-menu" className="fixed top-0 left-[-250px] w-[240px] h-screen z-50 bg-gray-700 p-5 flex flex-col space-y-5 text-white duration-300">
            { JWT ? <MobileMenuAuth /> : <MobileMenuNoAuth /> } 
        </div>
    );
}
