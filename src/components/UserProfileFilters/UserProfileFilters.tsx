import * as React from 'react';
import { useEffect } from 'react';
import { arr_age, arr_alcohol, arr_genderVapor, arr_growth, arr_location, arr_religion, arr_signZodiac, arr_smoke, arr_weight } from '../../arrdata/profiles';
import { useQueryGetProfiles } from '../../hooks/api.hook';
import { useFormFieldSelectNumber, useFormFieldSelectString } from '../../hooks/form.hook';
import { IFilterUsers } from '../../interfaces/iprofiles';
import { IQueryGetProfiles } from '../../interfaces/iquery';
import { filtersUserAction, usersProfilesAction } from '../../utils/reducers';
import { store } from '../../utils/store';
import { openModalMessage } from '../ModalMessage/ModalMessage';

function UserProfileFiltersAgeOption({ id }) {
    return ( 
        <>
            <option value={ id }>{ id }</option>
        </>
    );
}

export function UserProfileFilters() {
    const { jwt } = store.getState();
    let { filtersUser } = store.getState();
    const { data, error, querySendHAL} = useQueryGetProfiles();

    const location = useFormFieldSelectString(filtersUser.location);
    const ageStart = useFormFieldSelectNumber(filtersUser.agestart);
    const ageEnd = useFormFieldSelectNumber(filtersUser.ageend);
    const growthStart = useFormFieldSelectNumber(filtersUser.growthstart);
    const growthEnd = useFormFieldSelectNumber(filtersUser.growthend);
    const weightStart = useFormFieldSelectNumber(filtersUser.weightstart);
    const weightEnd = useFormFieldSelectNumber(filtersUser.weightend);
    const signZodiac = useFormFieldSelectNumber(filtersUser.signzodiac);
    const genderVapor = useFormFieldSelectNumber(filtersUser.gendervapor);
    const religion = useFormFieldSelectNumber(filtersUser.religion);
    const smoke = useFormFieldSelectNumber(filtersUser.smoke);
    const alcohol = useFormFieldSelectNumber(filtersUser.alcohol);
    
    useEffect(() => {
        const data: IQueryGetProfiles = {
            jwt: jwt,
            startCount: 0,
            amount: 0,
            filters: {
                location: location.value,
                agestart: ageStart.value,
                ageend: ageEnd.value,
                growthstart: growthStart.value,
                growthend: growthEnd.value,
                weightstart: weightStart.value,
                weightend: weightEnd.value,
                signzodiac: signZodiac.value,
                gendervapor: genderVapor.value,
                religion: religion.value,
                smoke: smoke.value,
                alcohol: alcohol.value,
                interests: [],
            }
        };

        querySendHAL(data);
    }, [filtersUser]);

    useEffect(() => {
        const filters: IFilterUsers = {
            location: location.value,
            agestart: ageStart.value,
            ageend: ageEnd.value,
            growthstart: growthStart.value,
            growthend: growthEnd.value,
            weightstart: weightStart.value,
            weightend: weightEnd.value,
            signzodiac: signZodiac.value,
            gendervapor: genderVapor.value,
            religion: religion.value,
            smoke: smoke.value,
            alcohol: alcohol.value,
            interests: [],
        }

        store.dispatch(filtersUserAction(filters));
    }, [
        location.value, 
        ageStart.value, ageEnd.value, 
        growthStart.value, growthEnd.value, 
        weightStart.value, weightEnd.value, 
        signZodiac.value, genderVapor.value, 
        religion.value, smoke.value, alcohol.value]);

    useEffect(() => {
        if (data) {
            store.dispatch(usersProfilesAction(data));
        } else if (error) {
            openModalMessage(error.response.data.message);
        }
    }, [data, error]);

    return (
        <div className="flex justify-center flex-row flex-wrap text-neutral-50 rounded-xl m-2 max-h-30 h-30">
            <div className="flex flex-row bg-gray-900 p-1 m-1 rounded-xl justify-center" >
                <span className="flex m-1">Город:</span>
                
                <select {...location} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_location.map((arr) => {
                            const [key, value] = arr;

                            return <option key={ key + value } value={ key }>{ value }</option>
                        })
                    }
                </select>
            </div>

            <div className="flex flex-row  bg-gray-900 p-1 m-1 rounded-xl justify-center" >
                <span className="flex m-1">Возраст:</span>
                
                <select {...ageStart} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_age.map((value) => {
                            return <UserProfileFiltersAgeOption key={ 'ageStart' + value } id={ value } />
                        })
                    }
                </select>-
                <select {...ageEnd} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_age.map((value) => {
                            return <UserProfileFiltersAgeOption key={ 'ageEnd' + value } id={ value } />
                        })
                    }
                </select>
            </div>


            <div className="flex flex-row  bg-gray-900 p-1 m-1 rounded-xl justify-center" >
                <span className="flex m-1">Рост:</span>
                
                <select {...growthStart} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_growth.map((value) => {
                            return <UserProfileFiltersAgeOption key={ 'growthStart' + value } id={ value } />
                        })
                    }
                </select>-
                <select {...growthEnd} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_growth.map((value) => {
                            return <UserProfileFiltersAgeOption key={ 'growthEnd' + value } id={ value } />
                        })
                    }
                </select>
            </div>

            <div className="flex flex-row  bg-gray-900 p-1 m-1 rounded-xl justify-center" >
                <span className="flex m-1">Вес:</span>
                
                <select {...weightStart} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_weight.map((value) => {
                            return <UserProfileFiltersAgeOption key={ 'weightStart' + value } id={ value } />
                        })
                    }
                </select>-
                <select {...weightEnd} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_weight.map((value) => {
                            return <UserProfileFiltersAgeOption key={ 'weightEnd' + value } id={ value } />
                        })
                    }
                </select>
            </div>

            <div className="flex flex-row bg-gray-900 p-1 m-1 rounded-xl justify-center" >
                <span className="flex m-1">Знак зодиака:</span>
                
                <select {...signZodiac} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_signZodiac.map((str, i) => {
                            return <option key={ 'signZodiac' + i } value={ i }>{ str }</option>
                        })
                    }
                </select>
            </div>

            <div className="flex flex-row bg-gray-900 p-1 m-1 rounded-xl justify-center" >
                <span className="flex m-1">Ищу:</span>
                
                <select {...genderVapor} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_genderVapor.map((str, i) => {
                            return <option key={ str } value={ i }>{ str }</option>
                        })
                    }
                </select>
            </div>

            <div className="flex flex-row bg-gray-900 p-1 m-1 rounded-xl justify-center" >
                <span className="flex m-1">Религия:</span>
                
                <select {...religion} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_religion.map((str, i) => {
                            return <option key={ str } value={ i }>{ str }</option>
                        })
                    }
                </select>
            </div>

            <div className="flex flex-row bg-gray-900 p-1 m-1 rounded-xl justify-center" >
                <span className="flex m-1">Курение:</span>
                
                <select {...smoke} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_smoke.map((str, i) => {
                            return <option key={ str } value={ i }>{ str }</option>
                        })
                    }
                </select>
            </div>

            <div className="flex flex-row bg-gray-900 p-1 m-1 rounded-xl justify-center" >
                <span className="flex m-1">Алкоголь:</span>
                
                <select {...alcohol} className="flex bg-gray-300 text-black m-1 rounded-lg">
                    {
                        arr_alcohol.map((str, i) => {
                            return <option key={ str } value={ i }>{ str }</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
}
