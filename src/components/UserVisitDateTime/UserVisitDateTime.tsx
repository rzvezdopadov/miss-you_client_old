import * as React from 'react';
import { IProfile, IProfileShort } from '../../interfaces/iprofiles';

function getColorRound(timecodeSub) {
    let colorRound = ' bg-white';

    if (timecodeSub < 1 * 60 * 60 * 1000) {
        colorRound = ' bg-lime-500';
    } else if (timecodeSub < 24 * 60 * 60 * 1000) {
        colorRound = ' bg-yellow-500';
    } else if (timecodeSub < 72 * 60 * 60 * 1000) {
        colorRound = ' bg-red-500';
    }

    return colorRound;
}

export function getDateTimeFromTimeCode(timecode: number) {
    const date = new Date(Number(timecode));
    
    return `${ date.toLocaleDateString() } ${ date.toLocaleTimeString() }`;
}

export function UserVisitDateTimeShort(params: { profile: IProfile | IProfileShort }) {
    const date = new Date(Number(params.profile.timecode));
    const dateNow = new Date();
    const timecodeNow = dateNow.getTime();
    const timecodeSub = timecodeNow - params.profile.timecode;
    const colorRound = getColorRound(timecodeSub);

    let dateStr = params.profile.gender ? 'Была ' : 'Был ';

    if (timecodeSub < 1 * 60 * 60 * 1000) {
        dateStr += 'в ' + date.toLocaleTimeString().slice(0, -3);
    } else {
        dateStr += date.toLocaleDateString(); 
    }
    
    return (
            <div className="flex justify-center items-center">
                <span className={ "flex justify-center rounded-full text-sm shadow-[0px_0px_2px_2px] shadow-zinc-400  h-3 w-3 mx-1" + colorRound } >
                </span>
                <span className="flex justify-center text-sm text-zinc-400" >
                    { dateStr }
                </span>
            </div>
    );
}

export function UserVisitDateTime(params: { profile: IProfile | IProfileShort }) {
    const date = new Date(Number(params.profile.timecode));
    const dateNow = new Date();
    const timecodeNow = dateNow.getTime();
    const timecodeSub = timecodeNow - params.profile.timecode;
    const colorRound = getColorRound(timecodeSub);

    let dateStr = params.profile.gender ? 'Была ' : 'Был ';
    
    dateStr += `${ date.toLocaleDateString() } в ${ date.toLocaleTimeString().slice(0, -3) }`; 

    return (
        <div className="flex justify-center items-center">
            <span className={ "flex justify-center rounded-full text-sm shadow-[0px_0px_2px_2px] shadow-zinc-400  h-3 w-3 mx-1" + colorRound } >
            </span>
            <span className="flex justify-center text-sm text-zinc-400" >
                { dateStr }
            </span>
        </div>
);
}
