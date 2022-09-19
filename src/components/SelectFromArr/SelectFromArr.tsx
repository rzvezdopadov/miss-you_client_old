import * as React from 'react';

export function SelectFromArr( 
    params: { 
        value: string | number | readonly string[], 
        keyOpt: any, 
        onChangeHandler: React.ChangeEventHandler<HTMLSelectElement>, 
        arr: any[], 
        title: string 
    } 
) {
    return (
        <div className="flex shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl p-3 relative items-center h-12 m-2">
            <div className='flex mr-2'>
                <span> { params.title } </span>
            </div>
            <div className='flex ml-2'>
                <select
                    value={ params.value }
                    onChange={ params.onChangeHandler }
                    className="flex appearance-none w-full bg-slate-300 text-black border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    title={ params.title }
                >
                    { 
                        params.arr.map((value, index) => {
                            return <option key={ params.keyOpt + index } value={ index }> { value }</option>
                        })
                    }
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>
    );
}
