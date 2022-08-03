import React from 'react';

export function FormEnter() {
  return (
    <div className="flex trasition-opacity duration-1000 delay-1000 opacity-100 w-full justify-center ">
        <form className="bg-gray-700 shadow-md rounded-3xl px-8 pt-2 pb-2 w-80">
            <label className="block text-white text-2xl font-bold mb-4">Вход</label>
            <div className="mb-4">
                <div className="mb-4">
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="E-mail" />
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Пароль" />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                       Войти
                    </button>
                </div>
            </div>
        </form>
    </div>
  );
}
