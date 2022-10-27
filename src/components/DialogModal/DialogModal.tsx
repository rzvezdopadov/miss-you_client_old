import * as React from 'react';
import { useEffect, useRef } from 'react';
import { IDialog } from '../../interfaces/iprofiles';
import { dialogModalAction } from '../../utils/reducers';
import { store } from '../../utils/store';

export function openDialogModal(dialog: IDialog) {
    store.dispatch(dialogModalAction(true, dialog));
}

function closeDialogModal() {
    store.dispatch(dialogModalAction(false, null));   
}

export function DialogModal() {
    const { dialogModal } = store.getState();
    const refDialogModal = useRef(null);

    useEffect(() => {
        if (dialogModal.enabled) {
            refDialogModal.current.classList.remove('invisible');
        } else {
            refDialogModal.current.classList.add('invisible');
        }
    }, [dialogModal.enabled]);

    const closeDialogModalHandler = () => {
        closeDialogModal();
    }

    return (
        <div ref={ refDialogModal } className="flex flex-col fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-30 pb-2 h-full lg:h-2/3 lg:max-w-5xl" >
            <div className='flex justify-center h-6 w-full'>
                <div onClick={ closeDialogModalHandler } className='flex justify-center absolute right-2 cursor-pointer rounded-full bg-red-400 h-6 w-6'>X</div>
            </div>

            
        </div>
    );
}
