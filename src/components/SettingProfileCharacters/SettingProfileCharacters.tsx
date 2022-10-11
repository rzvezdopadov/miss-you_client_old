import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import { arr_iDontLikeСharacter, arr_iLikeСharacter } from '../../arrdata/profiles';
import { IProfile } from '../../interfaces/iprofiles';
import { settingProfileCharactersAction, userMyProfileAction } from '../../utils/reducers';
import { store } from '../../utils/store';
import { SettingProfileCharacter } from '../SettingProfileCharacter/SettingProfileCharacter';

export function openSettingProfileCharacters() {
    store.dispatch(settingProfileCharactersAction(true));
}

function closeSettingProfileCharacters(profile: IProfile) {
    store.dispatch(settingProfileCharactersAction(false));
    store.dispatch(userMyProfileAction(profile));   
}

export function SettingProfileCharacters() {
    const { settingProfileCharacters, userMyProfile } = store.getState();
    const myProfile: IProfile = userMyProfile;
    const [profile, setProfile] = useState(myProfile);
    const refSettingProfileCharacters = useRef(null);

    const closeUserProfileHandler = () => {
        closeSettingProfileCharacters(profile);
    }

    const invertCharacter = (arr, id) => {
        const newArr = [...arr];
        if (newArr.includes(id)) {
            newArr.splice(newArr.indexOf(id), 1);
        } else {
            newArr.push(id);
        }

        return newArr;
    }

    const likeCharacterChangeHandler = (id) => {
        const newArr = invertCharacter(profile.ilikecharacter, id);
        const newProfile = { ...profile }
        newProfile.ilikecharacter = newArr as any; 
        setProfile(newProfile);
    }

    const dontlikeCharacterChangeHandler = (id) => {
        const newArr = invertCharacter(profile.idontlikecharacter, id);
        const newProfile = { ...profile }
        newProfile.idontlikecharacter = newArr as any; 
        setProfile(newProfile);
    }

    useEffect(() => {
        if (settingProfileCharacters.enabled) {
            refSettingProfileCharacters.current.classList.remove('invisible');

        } else {
            refSettingProfileCharacters.current.classList.add('invisible');
        }
    }, [settingProfileCharacters.enabled]);

    useEffect(() => {
      return () => {
        store.dispatch(settingProfileCharactersAction(false));
      }
    }, [])

    useEffect(() => {
        setProfile(myProfile);
    }, [myProfile]);
    
    return (
        <div 
            ref={ refSettingProfileCharacters }  
            className="flex flex-col fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-20 bottom-6 left-0 right-0 m-auto px-2 pt-2 pb-2 lg:h-2/3 lg:max-w-5xl" 
        >
            <div className='flex justify-end h-6 w-full'>
                <div 
                    onClick={ closeUserProfileHandler } 
                    className='flex fixed justify-center cursor-pointer rounded-full z-10 bg-red-400 h-6 w-6'
                >X</div>
            </div>
            <div className="flex flex-col select-none font-bold"> Настройки качеств </div>
            
            <div className="flex flex-col select-none"> Ценю качества:</div>

            {
                arr_iLikeСharacter.map((value, index)=>{
                    return <SettingProfileCharacter 
                        id={ index } 
                        key={ value[0] + index } 
                        value={ value[0] } 
                        title= { value[1] }
                        check= { profile.ilikecharacter.includes(index as never) }
                        changeClbk={ likeCharacterChangeHandler }
                    />
                })
            }

            <div className="flex flex-col select-none"> Не нравятся качества:</div>

            {
                arr_iDontLikeСharacter.map((value, index)=>{
                    return <SettingProfileCharacter 
                        id={ index } 
                        key={ value[0] + index } 
                        value={ value[0] } 
                        title= { value[1] } 
                        color={ 'shadow-red-400' }
                        check= { profile.idontlikecharacter.includes(index as never) }
                        changeClbk={ dontlikeCharacterChangeHandler }
                    />
                })
            }

            <div className='flex flex-wrap justify-around m-2'>
                <button 
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                    onClick={ closeUserProfileHandler }
                    type="button"
                >Закрыть</button>
            </div>
        </div>
    );
}
