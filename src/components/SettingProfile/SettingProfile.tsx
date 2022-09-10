import * as React from 'react';
import { useEffect, useState } from 'react';
import { arr_alcohol, arr_children, arr_education, arr_fieldOfActivity, arr_gender, arr_genderVapor, arr_maritalStatus, arr_profit, arr_religion, arr_smoke } from '../../arrdata/profiles';
import { useQueryGetProfile } from '../../hooks/api.hook';
import { IProfile } from '../../interfaces/iprofiles';
import { IQueryGetProfile } from '../../interfaces/iquery';
import { userMyProfileAction } from '../../utils/reducers';
import { store } from '../../utils/store';
import { openModalMessage } from '../ModalMessage/ModalMessage';
import { SelectFromArr } from '../SelectFromArr/SelectFromArr';

export function SettingProfile() {
    const { jwt, userMyProfile } = store.getState();
    const [positionPhoto, setPositionPhoto] = useState(0);
    const { data, error, querySendHAL } = useQueryGetProfile();
    const myProfile: IProfile = userMyProfile;
    const [profile, setProfile] = useState(myProfile);

    let date = new Date();

    date.setFullYear(date.getFullYear() - 18);

    let minDateBirth = date.toISOString().split('T')[0];

    const leftBtnSlideHandler = () => {
        let posPhoto = positionPhoto;

        if (profile.photolink.length > 0) {
            posPhoto--;

            if (posPhoto < 0) {
                posPhoto =  profile.photolink.length - 1;
            }
        }

        setPositionPhoto(posPhoto);
    } 

    const rightBtnSlideHandler = () => {
        let posPhoto = positionPhoto;

        if (profile.photolink.length > 0) {
            posPhoto++;

            if (posPhoto > profile.photolink.length - 1) {
                posPhoto = 0;
            }
        }

        setPositionPhoto(posPhoto);
    }

    const onChangeValueProfile = (e, key) => { 
        const newProfile = { ...profile }
        newProfile[key] = e.target.value;
        setProfile(newProfile);
    } 

    const nameOnChangeHandler = (e) => { onChangeValueProfile(e, 'name') };
    const discriptionOnChangeHandler = (e) => { onChangeValueProfile(e, 'discription') };
    const genderOnChangeHandler = (e) => { onChangeValueProfile(e, 'gender') };
    const genderVaporOnChangeHandler = (e) => { onChangeValueProfile(e, 'gendervapor') };
    const birhdayOnChangeHandler = (e) => {
        const newProfile = { ...profile }
        const date: string = e.target.value;
        const arrDate = date.split('-');

        if (arrDate.length !== 3) return

        newProfile.yearofbirth = Number(arrDate[0]);
        newProfile.monthofbirth = Number(arrDate[1]);
        newProfile.birthday = Number(arrDate[2]);

        setProfile(newProfile);
    };
    const educationOnChangeHandler = (e) => { onChangeValueProfile(e, 'education') };
    const fieldofactivityOnChangeHandler = (e) => { onChangeValueProfile(e, 'fieldofactivity') }
    const maritalstatusOnChangeHandler = (e) => { onChangeValueProfile(e, 'maritalstatus') }
    const childrenOnChangeHandler = (e) => { onChangeValueProfile(e, 'children') }
    const religionOnChangeHandler = (e) => { onChangeValueProfile(e, 'religion') }
    const riseOnChangeHandler = (e) => { onChangeValueProfile(e, 'rise') }
    const smokeOnChangeHandler = (e) => { onChangeValueProfile(e, 'smoke') }
    const alcoholOnChangeHandler = (e) => { onChangeValueProfile(e, 'alcohol') }
    const profitOnChangeHandler = (e) => { onChangeValueProfile(e, 'profit') }
    
    
    

    useEffect(() => {
        const data: IQueryGetProfile = {
            jwt: jwt,
            id: 0,
        };

        querySendHAL(data);    
    }, [])

    useEffect(() => {
        if (data) {           
            store.dispatch(userMyProfileAction(data));
        } else if (error) {
            openModalMessage(error.response.data.message);
        }
    }, [data, error]);

    useEffect(() => {
        setProfile(myProfile);
    }, [myProfile]);
    
    return (
        <div className="flex flex-col fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl overflow-y-scroll lg:overflow-auto top-20 bottom-6 left-0 right-0 m-auto px-2 pt-2 pb-2 lg:h-2/3 lg:max-w-5xl" >
            <div className="flex flex-col font-bold"> Настройки профиля </div>
            <div className="flex flex-col">
                <div className="flex justify-center m-1">
                    <div 
                        style={{ 
                            backgroundImage: 'URL(' + profile.photolink[positionPhoto] + ')' 
                        }} 
                        className='flex relative bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl justify-center h-80 w-80 m-1'>
                        <div 
                            className='flex justify-center absolute right-0 m-4 cursor-pointer rounded-full shadow-[0px_0px_3px_3px] shadow-lime-300 bg-red-500 h-6 w-6' 
                            title='Удалить фото'
                        >X</div>
                    </div>
                </div> 
                <div className="flex justify-center cursor-pointer m-1 rounded-md">
                    <div 
                        onClick={ leftBtnSlideHandler } 
                        className="flex select-none bg-gray-300 text-black text-xl border-lime-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-md"
                    >&lt;</div>
                    <div 
                        className="flex select-none bg-gray-300 text-black text-xl border-yellow-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-md"
                    >+</div>
                    <div
                        onClick={ rightBtnSlideHandler } 
                        className="flex select-none bg-gray-300 text-black text-xl border-lime-300 border-2 font-bold justify-center cursor-pointer m-1 w-24 rounded-md"
                    >&gt;</div>
                </div>
                <div className="flex flex-wrap justify-center m-1">
                    { profile.photolink.map((value, index) => {
                        return <div 
                            style={{ 
                                backgroundImage: 'URL(' + value + ')' 
                            }}
                            key = { 'slide' + index }
                            onClick = { () => { setPositionPhoto(index) } } 
                            className='flex bg-center bg-cover bg-no-repeat shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-2xl cursor-pointer justify-center ml-2 mr-2 h-16 w-16 m-1'>
                        </div>
                    }) }                    
                </div>
            </div>
            <div className="flex flex-col">
                <input 
                    value={ profile.name }
                    onChange={ nameOnChangeHandler }
                    title='Ваше имя'
                    className='flex text-center rounded-md bg-slate-300 text-black m-1' 
                    placeholder='Ваше имя'
                />
            </div>
            <div className="flex flex-col">
                <textarea
                    value={ profile.discription }
                    onChange={ discriptionOnChangeHandler }
                    title='О себе'
                    className='flex text-center resize-none rounded-md bg-slate-300 text-black m-1' 
                    placeholder='О себе'
                ></textarea>
            </div>
            <div className='flex flex-wrap justify-around'>
                <SelectFromArr 
                    keyOpt={ 'gender' }
                    value={ profile.gender } 
                    onChangeHandler={ genderOnChangeHandler } 
                    arr={ arr_gender } 
                    title={ 'Кто я?' } 
                />

                <SelectFromArr 
                    keyOpt={ 'gendervapor' }
                    value={ profile.gendervapor } 
                    onChangeHandler={ genderVaporOnChangeHandler } 
                    arr={ arr_genderVapor } 
                    title={ 'Кого ищу?' } 
                />

                <div className="flex shadow-[0px_0px_3px_3px] shadow-lime-300 rounded-xl items-center relative h-12 p-2 w-64 m-3">
                    <label htmlFor="date" className='text-white'>Дата рождения: </label> &nbsp;
                    <input
                        value={ '' + profile.yearofbirth + '-' + 
                            (profile.monthofbirth < 10 ? '0' + profile.monthofbirth : profile.monthofbirth)  + '-' + 
                            (profile.birthday < 10 ? '0' + profile.birthday : profile.birthday) 
                        }
                        className='border rounded bg-slate-300 text-black ' 
                        type="date" 
                        max={ minDateBirth } 
                        name="date"
                        onChange={ birhdayOnChangeHandler }
                    />
                </div>

                <SelectFromArr 
                    keyOpt={ 'education' }
                    value={ profile.education } 
                    onChangeHandler={ educationOnChangeHandler } 
                    arr={ arr_education } 
                    title={ 'Образование' } 
                />

                <SelectFromArr 
                    keyOpt={ 'fieldofactivity' }
                    value={ profile.fieldofactivity } 
                    onChangeHandler={ fieldofactivityOnChangeHandler } 
                    arr={ arr_fieldOfActivity } 
                    title={ 'Сфера деятельности' } 
                />

                <SelectFromArr 
                    keyOpt={ 'maritalstatus' }
                    value={ profile.maritalstatus } 
                    onChangeHandler={ maritalstatusOnChangeHandler } 
                    arr={ arr_maritalStatus } 
                    title={ 'Семейное положение' } 
                />

                <SelectFromArr 
                    keyOpt={ 'children' }
                    value={ profile.children } 
                    onChangeHandler={ childrenOnChangeHandler } 
                    arr={ arr_children } 
                    title={ 'Дети' } 
                />

                <SelectFromArr 
                    keyOpt={ 'religion' }
                    value={ profile.religion } 
                    onChangeHandler={ religionOnChangeHandler } 
                    arr={ arr_religion } 
                    title={ 'Религия' } 
                />

                <SelectFromArr 
                    keyOpt={ 'smoke' }
                    value={ profile.smoke } 
                    onChangeHandler={ smokeOnChangeHandler } 
                    arr={ arr_smoke } 
                    title={ 'Курение' } 
                />

                <SelectFromArr 
                    keyOpt={ 'alcohol' }
                    value={ profile.alcohol } 
                    onChangeHandler={ alcoholOnChangeHandler } 
                    arr={ arr_alcohol } 
                    title={ 'Алкоголь' } 
                />

                <SelectFromArr 
                    keyOpt={ 'profit' }
                    value={ profile.profit } 
                    onChangeHandler={ profitOnChangeHandler } 
                    arr={ arr_profit } 
                    title={ 'Заработок в месяц' } 
                />

                
            </div>
        </div>
    );
}
