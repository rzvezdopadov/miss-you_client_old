import * as React from 'react';

export function Messages() {
    const arr_test = [0, 0, 0, 0, 0]; 


    return (
        <div className="flex h-full w-full justify-center">
            <div className="flex justify-center relative bg-gray-700 text-neutral-50 flex-row shadow-md rounded-3xl px-8 pt-2 pb-2 w-full">
                <div className="flex justify-start shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl m-2 px-2 pt-2 pb-2 h-full w-80" >
                    <div className='flex justify-center items-center w-full my-1'>
                        Диалоги
                    </div>

                    {
                        arr_test.map((value, index) => {

                            return <div key={index} className='flex items-center my-1 w-auto h-16 bg-gray-700 rounded-xl shadow-[0px_0px_1px_1px] shadow-lime-300' >
                                <div 
                                    style={{ 
                                        backgroundImage: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yZXS2ZZ24wVPM-Y39eN0CUzeGJr2tsIoOrgw8IbbXB9yQR5wFlKI0rmuv4gQtd6efc8&usqp=CAU)' 
                                    }} 
                                    className= "flex flex-shrink-0 bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-full m-1 h-14 w-14"
                                ></div>
                                <div className='flex flex-col w-40 h-full m-1 overflow-hidden'>
                                    <div className='flex flex-shrink-0 justify-center w-max overflow-hidden'>
                                        Ева Звездопадова
                                    </div>
                                    <div className='flex justify-center text-zinc-400 text-sm overflow-hidden'>
                                        Честно говоря незнаю, насчет этой темы, я сама не местная и плохо знаю Москву
                                    </div>
                                </div>
                            </div>
                        })                        
                    }

                </div>
                <div className="flex justify-start shadow-[0px_0px_1px_1px] shadow-lime-300 flex-col bg-gray-900 text-neutral-50 rounded-xl m-2 px-2 pt-2 pb-2 h-full w-full">
                    <div className='flex justify-center items-center w-full my-1'>
                        Ева звездопадова, 31 год
                    </div>

                    <div className='flex justify-center items-center w-full my-1'></div>
                    {
                        arr_test.map((value, index) => {
                            return <div className='flex items-start my-1 w-auto h-fit'>
                                <div className='flex m-1'>
                                    <div 
                                        style={{ 
                                            backgroundImage: 'URL(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4yZXS2ZZ24wVPM-Y39eN0CUzeGJr2tsIoOrgw8IbbXB9yQR5wFlKI0rmuv4gQtd6efc8&usqp=CAU)' 
                                        }} 
                                        className= "flex flex-shrink-0 bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-full m-1 h-10 w-10"
                                    ></div>
                                </div>
                                <div className='flex flex-col m-1'>
                                    <div className='flex justify-start text-lime-400 items-center w-full'>
                                        Ева Звездопадова, 17:12
                                    </div>
                                    <div className='flex justify-center items-center w-full'>
                                        Честно говоря незнаю, насчет этой темы, я сама не местная и плохо знаю Москву
                                    </div>
                                </div>
                                
                                
                            </div>
                        })
                    }

                {
                    arr_test.map((value, index) => {
                        return <div className='flex items-start my-1 w-auto h-fit'>
                                <div className='flex m-1'>
                                    <div 
                                        style={{ 
                                            backgroundImage: 'URL(https://n1s1.hsmedia.ru/54/49/ee/5449eef30275f6b7bdff0eef556cf188/600x600_1_9275278c358c03d6e52961af7f1cff2d@800x800_0xac120003_16908940551633367459.png)' 
                                        }} 
                                        className= "flex flex-shrink-0 bg-center bg-cover bg-no-repeat justify-center shadow-[0px_0px_2px_2px] shadow-lime-300 text-neutral-50 rounded-full m-1 h-10 w-10"
                                    ></div>
                                </div>
                                <div className='flex flex-col m-1'>
                                    <div className='flex justify-start text-lime-400 items-center w-full'>
                                        Джо Пятизвездочный, 17:12
                                    </div>
                                    <div className='flex justify-center items-center w-full'>
                                        Не переживай, я тебя встречу на вокзале
                                    </div>
                                </div>
                                
                                
                            </div>
                        })
                    }

                </div>
            </div>
        </div>
    );
}
