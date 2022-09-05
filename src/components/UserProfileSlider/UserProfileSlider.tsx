import * as React from 'react';
import { useEffect, useState } from 'react';
import { useQueryLike } from '../../hooks/api.hook';
import { ILike } from '../../interfaces/iquery';
import { userProfileAction } from '../../utils/reducers';
import { store } from '../../utils/store';
import { openModalMessage } from '../ModalMessage/ModalMessage';

export function UserProfileSlider() {
    const { jwt, userProfile } = store.getState();
    const [positionPhoto, setPositionPhoto] = useState(0);
    const { data, error, querySendHAL } = useQueryLike();

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

    const likeSlideHandler = () => {
        const dataQuery: ILike = {
            jwt: jwt,
            id: userProfile.profile.id,
        }

        querySendHAL(dataQuery);
    }

    useEffect(() => {
        if (data) {
            const newProfile = { ...userProfile.profile };
            
            newProfile.likes = data;

            store.dispatch(userProfileAction(true, newProfile));
            
        } else if (error) {
            openModalMessage(error.response.data.message);
        }
    }, [data, error]);

    let colorHeart = "bg-red-500 text-white";

    if (userProfile.profile.likes.length === 0) {
        colorHeart = "bg-white text-black";
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
                <div onClick={ leftBtnSlideHandler } className="flex select-none bg-gray-300 text-black text-xl font-bold justify-center cursor-pointer m-1 w-24 rounded-md">
                    &lt;
                </div>
                <div onClick={ likeSlideHandler } className= { "flex select-none " + colorHeart + " justify-center text-xl cursor-pointer m-1 w-24 rounded-md" }>
                    &hearts;
                </div>
                <div onClick={ rightBtnSlideHandler } className="flex select-none bg-gray-300 text-black text-xl font-bold justify-center cursor-pointer m-1 w-24 rounded-md">
                    &gt;
                </div>
            </div>
        </>
    );
}
