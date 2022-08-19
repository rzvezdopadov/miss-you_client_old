import { profile } from 'console';
import * as React from 'react';
import { IProfile } from '../../interfaces/iprofiles';

function UserProfileShortInterest({ interest }) {
    return ( 
        <>
            <div className="flex bg-gray-300 select-none text-sm text-black p-1 m-1 h-7 rounded-lg">
                { interest }
            </div>
        </>
    );
}

export function UserProfileShort(params: { key: string, profile: IProfile }) {
    const { profile } = params;

    return (
        <div className="flex justify-center flex-row bg-gray-900 text-neutral-50 shadow-md rounded-xl m-2 px-2 pt-2 pb-2 max-h-30 h-30 w-80" >
            <div className="flex flex-col justify-center" >

                <div 
                    style={{ 
                        'background-image': 'URL(' + profile.photoLink[profile.photoMain] + ')' 
                    }} 
                    className= "flex bg-center bg-contain bg-no-repeat justify-center text-neutral-50 rounded-3xl m-1 h-32 w-32"
                >
                </div>
                <div className="flex bg-lime-700 justify-center cursor-pointer m-1 rounded-md">
                    Посмотреть
                </div>
            </div>

            <div className="flex flex-col text-neutral-50 rounded-3xl w-44">
                <div className="flex justify-center text-neutral-50 rounded-3xl">
                    { profile.name }
                </div>
                <div className="flex justify-center text-neutral-50 rounded-3xl">
                    { profile.age } лет, Интересы:
                </div>
                <div className="flex items-center justify-center overflow-hidden flex-wrap text-sm text-neutral-50 h-28">
                    {
                        profile.interests.length 
                        ? profile.interests.map((interest, i) => {
                            return <UserProfileShortInterest key={ interest + i } interest={ interest } />
                        }) 
                        :<UserProfileShortInterest key={ 'interest' + profile.id } interest={ 'Отсутствуют' } />
                    }
                </div>
            </div>
        </div>
    );
}
