import * as React from 'react';
import { Link } from "react-router-dom";
import { store } from "../../utils/store";
import message from '../../img/message.png'
import heart from '../../img/heart.png'
import glass from '../../img/glass.png'
import gear from '../../img/gear.png'
import exit from '../../img/exit.png'

function MobileMenuNoAuth() {  
    return (
        <>
            <a href="/" className="text-right cursor-pointer text-4xl" onClick={ closeMobileMenu }>&times;</a>
            <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                Главная
            </Link>
            <Link to="/about" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                О нас
            </Link>
            <Link to="/partners" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                Партнерство
            </Link>    
            <Link to="/enter" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                Войти
            </Link>      
        </>
    );
}

function MobileMenuAuth() {  
    return (
        <>
            <a href="/" className="text-right cursor-pointer text-4xl" onClick={ closeMobileMenu }>&times;</a>
            <Link to="/vapors" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                <img className="block h-5 w-auto" src={ heart } alt="Кто лайкнул" title='Кто лайкнул'/> 
            </Link>
            <Link to="/messages" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                <img className="block h-5 w-auto" src={ message } alt="Сообщения" title='Сообщения'/>  
            </Link>
            <Link to="/searchvapors" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                <img className="block h-5 w-auto" src={ glass } alt="Поиск людей" title='Поиск людей' /> 
            </Link>
            <Link to="/settings" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                <img className="block h-5 w-auto" src={ gear } alt="Настройки" title='Настройки' /> 
            </Link>    
            <Link to="/logout" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                <img className="block h-5 w-auto" src={ exit } alt="Выход" title='Выход' />
            </Link>
        </>   
    );
}

export function openMobileMenu() {
    let mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu) return;

    mobileMenu.classList.remove('left-[-100px]');
    mobileMenu.classList.add('left-0');
}

function closeMobileMenu(event) {
    event.preventDefault(); 

    let mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu) return;

    mobileMenu.classList.remove('left-0');
    mobileMenu.classList.add('left-[-100px]');
}

export function MobileMenu() { 
    const { jwt } = store.getState();

    return (
        <div id="mobile-menu" onClick={ closeMobileMenu } className="fixed items-center top-0 left-[-100px] w-[100px] h-screen z-50 bg-gray-700 p-5 flex flex-col space-y-5 text-white duration-300">
            { jwt ? <MobileMenuAuth /> : <MobileMenuNoAuth /> } 
        </div>
    );
}
