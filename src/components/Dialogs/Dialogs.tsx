import * as React from 'react';
import { useEffect } from 'react';
import { IDialog } from '../../interfaces/iprofiles';
import { dialogAction, dialogsAction } from '../../utils/reducers';
import { store } from '../../utils/store';
import { Dialog } from '../Dialog/Dialog';
import { DialogShort } from '../DialogShort/DialogShort';

export function Dialogs() {
    const { jwt, userMyProfile, dialogs, dialog } = store.getState();

    const arr_dialogs_test: Array<IDialog> = [
            {
                timecode: 1600000000000,
                idUser: 20,
                name: 'Ева Звездопадова',
                age: 20,
                photomain: 2,
                photolink: [
                    'https://www.belta.by/images/storage/news/with_archive/2021/000029_1622877250_444644_big.jpg', 
                    'https://sib.fm/storage/article/March2021/IDsV2DD5Qhwj5kWTpfYG.jpeg',
                    'https://cs13.pikabu.ru/post_img/2021/02/05/8/1612527856115613271.jpg',

                ],
                messages: [
                    {
                        timecode: 1600000000000,
                        idUser: 20,
                        message: 'Привет, меня зовут Ева, я хорошая девочка',
                    }, {
                        timecode: 1601000000000,
                        idUser: 1,
                        message: 'Привет, меня зовут Джо, я секс машина',
                    }, {
                        timecode: 1602000000000,
                        idUser: 20,
                        message: 'Это просто космос, пойдем гулять?',
                    }, {
                        timecode: 1603000000000,
                        idUser: 1,
                        message: 'Ну я даже незнаю, какие ты заведения любишь?',
                    }, {
                        timecode: 1604000000000,
                        idUser: 20,
                        message: 'Кафешки, боулинг, бильярд, а ты?',
                    }, {
                        timecode: 1605000000000,
                        idUser: 1,
                        message: 'Я люблю киношки, виношки, доминошки',
                    }                
                ],
            },
            {
                timecode: 165450000,
                idUser: 30,
                name: 'Ева Польна',
                age: 30,
                photomain: 1,
                photolink: [
                    'https://www.belta.by/images/storage/news/with_archive/2021/000029_1622877250_444644_big.jpg', 
                    'https://sib.fm/storage/article/March2021/IDsV2DD5Qhwj5kWTpfYG.jpeg',
                    'https://cs13.pikabu.ru/post_img/2021/02/05/8/1612527856115613271.jpg',

                ],
                messages: [
                    {
                        timecode: 1601000000000,
                        idUser: 30,
                        message: 'Привет, меня зовут Изольда, я плохая девочка',
                    }, {
                        timecode: 1602000000000,
                        idUser: 1,
                        message: 'Привет, меня зовут Звезда, а я плохой мальчик',
                    }, {
                        timecode: 1603000000000,
                        idUser: 30,
                        message: 'Я очень люблю глотать приборы до яиц, у тебя большой?',
                    }, {
                        timecode: 1604000000000,
                        idUser: 1,
                        message: 'Ну не очень, около 25 см, могу тебе сделать ФГС своим шлангом!',
                    }, {
                        timecode: 1605000000000,
                        idUser: 30,
                        message: 'Блин, класно, я не против глотнуть его всеми губами',
                    }, {
                        timecode: 1606000000000,
                        idUser: 1,
                        message: 'Я уже выдвигаюсь, говори адрес!',
                    }                
                ]
            }
        ]

    const setDialogOnClick = (idUser: number) => {
        const outDialog = dialogs.filter((value: IDialog) =>  value.idUser === idUser);

        store.dispatch(dialogAction(outDialog[0]));
    }

    useEffect(() => {
        setTimeout(() => {
            store.dispatch(dialogsAction(arr_dialogs_test));
            store.dispatch(dialogAction(arr_dialogs_test[0]));
        }, 500);
    }, [userMyProfile])

    useEffect(() => {
        // console.log(dialogs);
    }, [dialogs])
    

    return (
        <div className="flex h-full w-full justify-center">
            <div className="flex justify-center relative bg-gray-700 text-neutral-50 flex-row shadow-md rounded-3xl px-8 pt-2 pb-2 w-full">
                <div className="flex justify-start shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl m-2 px-2 pt-2 pb-2 h-full w-80" >
                    <div className='flex justify-center items-center w-full my-1 select-none'>
                        Диалоги
                    </div>

                    { 
                        dialogs.length ? dialogs.map((dialog: IDialog, index)=>{                            
                            return <DialogShort 
                                dialog={ dialog } 
                                onClickHandler={ () => { setDialogOnClick(dialog.idUser) }}
                            />
                        }) : <div className='flex justify-center text-lime-400'>Пока нет диалогов =(</div> 
                    }

                </div>
                <div className="flex justify-start shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl m-2 px-2 py-2 h-full w-full">
                    <Dialog { ...dialog } />                   
                </div>
            </div>
        </div>
    );
}
