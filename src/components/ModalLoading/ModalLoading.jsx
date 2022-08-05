import React from 'react';

export function modalLoadingOnShow() {
    const elem = document.querySelector('#modalLoading');
    if (!elem) return;

    elem.classList.remove('invisible');
}

export function modalLoadingOnHide() {
    const elem = document.querySelector('#modalLoading');
    if (!elem) return;

    elem.classList.add('invisible');
}

export function ModalLoading() {
    return (
        <div id='modalLoading' className="flex invisible w-full h-full justify-center items-center bg-black opacity-80 text-white absolute z-40">
            <div className="flex animate-spin  opacity-100 rounded-full bg-lime-500 h-20 w-20 mr-3">
                <div className="flex justify-center animate-pulse bg-black h-10 w-10">
                </div>
            </div>
            
            Загрузка...
        </div>
    );
}
