import * as React from 'react';

export function UserProfileInterest({ value, title = '' }) {
    return ( 
        <>
            <div className="flex bg-gray-300 select-none text-sm text-black p-1 m-1 h-7 rounded-lg" title={ title }>
                { value }
            </div>
        </>
    );
}
