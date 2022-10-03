import * as React from 'react';
import { useEffect, useRef } from 'react';
import { IProfile } from '../../interfaces/iprofiles';
import { settingProfileCharactersAction, userMyProfileAction, userProfileAction } from '../../utils/reducers';
import { store } from '../../utils/store';

export function openSettingProfileCharacters() {
    store.dispatch(settingProfileCharactersAction(true));
}

function closeSettingProfileCharacters(profile: IProfile) {
    store.dispatch(settingProfileCharactersAction(false));
    store.dispatch(userMyProfileAction(profile));   
}

export function SettingProfileCharacters() {
    const { userProfile } = store.getState();
    const refUserProfile = useRef(null);

    useEffect(() => {
        if (userProfile.enabled) {
            refUserProfile.current.classList.remove('invisible');
        } else {
            refUserProfile.current.classList.add('invisible');
        }
    }, [userProfile.enabled]);

    const closeUserProfileHandler = () => {
        closeSettingProfileCharacters(userProfile.profile);
    }

    return (
        <div className='flex '></div>
    );
}
