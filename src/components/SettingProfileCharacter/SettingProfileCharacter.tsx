import * as React from 'react';

export function SettingProfileCharacter({ id, value, title = '', color = 'shadow-lime-300', check, changeClbk = (id: number)=>{} }) {
    return ( 
        <>
            <div className={"flex flex-col  shadow-[0px_0px_3px_3px] rounded-xl p-3 relative items-center min-h-12 m-2 " + color} title={ title }>
                <div className='flex items-center'>
                    <input 
                        className=' shadow-[0px_0px_2px_2px] shadow-lime-300 rounded-lg m-2' 
                        onChange={ 
                            ()=>{ changeClbk(id) } 
                        } 
                        type={ 'checkbox' } 
                        checked={ check }
                    ></input>
                    <label className="flex select-none">{ value }</label>
                </div>
                <div className="flex select-none">{ title }</div>       
            </div>
        </>
    );
}
