import { profile } from 'console';
import * as React from 'react';

export function UserProfile() {
    return (
        <div className="flex absolute justify-center flex-row bg-gray-900 shadow-lime-400 text-neutral-50 rounded-xl top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 pb-2 max-h-30 h-96 w-96" >
            <div className='flex justify-end h-6 w-full'>
                <div className='flex justify-center rounded-full bg-red-400 h-6 w-6'>X</div>
            </div>
        </div>
    );
}
