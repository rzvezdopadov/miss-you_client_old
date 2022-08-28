import * as React from 'react';
import { useCallback, useState } from 'react';
import { store } from '../../utils/store';

export function UserProfileSlider() {
    const [positionPhoto, setPositionPhoto] = useState(0);
    const { userProfile } = store.getState();

    if (positionPhoto > userProfile.profile.photolink.length - 1) {
        setTimeout(()=>{
            setPositionPhoto(0);
        }, 50);   
    }

    const leftBtnSlideHandler = () => {
        let posPhoto = positionPhoto;

        if (userProfile.profile.photolink.length > 0) {
            posPhoto--;

            if (posPhoto < 0) {
                posPhoto =  userProfile.profile.photolink.length - 1;
            }
        }

        setPositionPhoto(posPhoto);
    } 

    const rightBtnSlideHandler = () => {
        let posPhoto = positionPhoto;

        if (userProfile.profile.photolink.length > 0) {
            posPhoto++;

            if (posPhoto > userProfile.profile.photolink.length - 1) {
                posPhoto = 0;
            }
        }

        setPositionPhoto(posPhoto);
    } 

    return (
        <>
            <div 
                style={{ 
                    backgroundImage: 'URL(' + userProfile.profile.photolink[positionPhoto] + ')' 
                }} 
                className='flex bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl justify-center h-80 w-80 m-1'>
            </div>

            <div className="flex justify-center m-1">
                { positionPhoto + 1 } / { userProfile.profile.photolink.length }
            </div>

            <div className="flex justify-center cursor-pointer m-1 rounded-md">
                <div onClick={ leftBtnSlideHandler } className="flex bg-gray-300 text-black text-xl font-bold justify-center cursor-pointer m-1 w-24 rounded-md">
                    &lt;
                </div>
                <div className="flex bg-white text-black justify-center text-xl cursor-pointer m-1 w-24 rounded-md">
                    &hearts;
                </div>
                <div onClick={ rightBtnSlideHandler } className="flex bg-gray-300 text-black text-xl font-bold justify-center cursor-pointer m-1 w-24 rounded-md">
                    &gt;
                </div>
            </div>
        </>
    );
}
