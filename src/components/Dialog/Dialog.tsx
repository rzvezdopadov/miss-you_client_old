import * as React from 'react';
import { IDialog, IMessage } from '../../interfaces/iprofiles';
import { store } from '../../utils/store';
import { DialogMessage } from '../DialogMessage/DialogMessage';

export function Dialog( dialog: IDialog ) {
    const { userMyProfile } = store.getState();

    return (
        <>
            <div className='flex justify-center items-center w-full my-1 text-lime-400 select-none cursor-pointer'>
                    { `${ dialog.name }, ${ dialog.age } год` }
            </div>

            <div className="flex justify-start shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl px-2 pt-2 pb-2 h-full w-full">
                {
                    Object.keys(dialog).length ? 
                    dialog.messages.map((value: IMessage) => {
                        let name = userMyProfile.name;
                        let photolink = userMyProfile.photolink[userMyProfile.photomain];

                        if (userMyProfile.id !== value.idUser) {
                            name = dialog.name;
                            photolink = dialog.photolink[dialog.photomain];
                        }

                        return <DialogMessage 
                            key={ dialog.timecode + value.timecode } 
                            name={ name } 
                            timecode={ value.timecode } 
                            message={ value.message } 
                            photolink={ photolink } 
                        />
                    }) : <div>Диалогов нет</div>
                }
            </div>
        </>
    );
}
