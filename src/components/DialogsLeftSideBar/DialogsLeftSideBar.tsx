import * as React from 'react';
import { IDialog } from '../../interfaces/iprofiles';
import { dialogAction } from '../../utils/reducers';
import { store } from '../../utils/store';
import { DialogShort } from '../DialogShort/DialogShort';

export function DialogsLeftSideBar() {
    const { dialogs } = store.getState();

    const setDialogOnClick = (idUser: number) => {
        const outDialog = dialogs.filter((value: IDialog) =>  value.idUser === idUser);

        store.dispatch(dialogAction(outDialog[0]));
    }

    return (
        <>   
            <div className='flex justify-center items-center w-full my-1 select-none'>
                Диалоги
            </div>

            { 
                dialogs.length ? dialogs.map((dialog: IDialog, index)=>{                            
                    return <DialogShort
                        key={ dialog.timecode + index }
                        dialog={ dialog } 
                        onClickHandler={ () => { setDialogOnClick(dialog.idUser) }}
                    />
                }) : <div className='flex justify-center text-lime-400'>Пока нет диалогов =(</div> 
            }
        </>
    );
}
