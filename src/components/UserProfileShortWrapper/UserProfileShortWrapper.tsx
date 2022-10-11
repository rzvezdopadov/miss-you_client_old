import * as React from 'react';
import { IProfile } from '../../interfaces/iprofiles';
import { store } from '../../utils/store';
import { UserProfileShort } from '../UserProfileShort/UserProfileShort';

export function UserProfileShortWrapper() {
    const { usersProfiles }= store.getState();

    return (
        <>
            { 
                usersProfiles.length 
                ? usersProfiles.map((profile: IProfile ) => <UserProfileShort 
                    key={ 'profile' + profile.id } profile={ profile }
                />)
                : <span className='flex bg-gray-900 p-2 rounded-lg'>Никто не нашелся ^..^</span> 
            }
        </>
    );
}
