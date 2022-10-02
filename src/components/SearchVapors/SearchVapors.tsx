import * as React from 'react';
import { UserProfile } from '../UserProfile/UserProfile';
import { UserProfileFilters } from '../UserProfileFilters/UserProfileFilters';
import { UserProfileShortWrapper } from '../UserProfileShortWrapper/UserProfileShortWrapper';

export function SearchVapors() {
    return (
        <div className="flex h-full w-full justify-center">
            <div className="flex relative bg-gray-700 text-neutral-50 flex-col shadow-md rounded-3xl px-8 pt-2 pb-2 w-full">
                <div className="flex justify-center">
                    Поиск пары
                </div>
                <div className="flex justify-center">
                    <UserProfileFilters />
                </div>
                <div className="flex flex-row flex-wrap justify-center">
                    <UserProfileShortWrapper />
                </div>
                <UserProfile />
            </div>
        </div>
    );
}
