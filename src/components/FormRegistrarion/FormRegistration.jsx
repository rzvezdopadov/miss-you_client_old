import React from 'react';

export function FormRegistration() {
  return (
    <div className="flex w-full justify-center min-w-xs">
        <form className="bg-gray-700 shadow-md rounded-3xl px-8 pt-2 pb-2 w-80" method='POST'>
            <label className="block text-white text-2xl font-bold mb-4">Регистрация</label>
            <div className="mb-4">
                <div className="mb-4 relative w-64">
                    <select placeholder="Имя"  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value='0'>Я мужчина</option>
                        <option value='1'>Я женщина</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <div className="mb-4 relative w-64">
                    <select placeholder="Имя"  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option value='0'>Ищу женщину</option>
                        <option value='1'>Ищу мужчину</option>
                        <option value='2'>Ищу друзей</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Имя" />
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="E-mail" />
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="current-password" placeholder="Пароль" />
                </div>
                <div className="mb-4">
                    <input type="checkbox" onClick={
                        (event)=>{
                            const elemBtn = document.querySelector('#btnRegistration');

                            if (!elemBtn) return;

                            event.target.checked ? elemBtn.disabled = false : elemBtn.disabled = true;
                        }
                    } /> 
                    <span className='text-white'> Я подтверждаю, что мне уже исполнилось 18 лет и я принимаю </span>
                    <a href="/agreement" target="_blank" className="text-red-500">Пользовательское соглашение </a>
                </div>
                <div className="flex items-center justify-center">
                    <button id='btnRegistration' disabled className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                       Найти себе пару 
                    </button>
                </div>
            </div>
        </form>
    </div>
  );
}
