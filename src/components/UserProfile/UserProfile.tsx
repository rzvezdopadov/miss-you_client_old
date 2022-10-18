import * as React from 'react';
import { useEffect, useRef } from 'react';
import { arr_alcohol, arr_children, arr_genderVapor, arr_iDontLikeСharacter, arr_iLikeСharacter, arr_profit, arr_religion, arr_signZodiac, arr_smoke } from '../../arrdata/profiles';
import { IProfile } from '../../interfaces/iprofiles';
import { userProfileAction } from '../../utils/reducers';
import { store } from '../../utils/store';
import { UserProfileInterest } from '../UserProfileInterest/UserProfileInterest';
import { UserProfileSlider } from '../UserProfileSlider/UserProfileSlider';
import { UserVisitDateTime } from '../UserVisitDateTime/UserVisitDateTime';

export function openUserProfile(profile: IProfile) {
    store.dispatch(userProfileAction(true, profile));
}

function closeUserProfile(profile: IProfile) {
    store.dispatch(userProfileAction(false, profile));   
}

export function UserProfile() {
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
        closeUserProfile(userProfile.profile);
    }

    return (
        <div ref={ refUserProfile } className="flex flex-col fixed justify-start bg-gray-900 shadow-[0px_0px_5px_5px] shadow-lime-300 text-neutral-50 rounded-xl  overflow-y-scroll lg:overflow-auto top-0 bottom-0 left-0 right-0 m-auto px-2 pt-2 z-20 pb-2 h-full lg:h-2/3 lg:max-w-5xl" >
            <div className='flex justify-center h-6 w-full'>
                <div onClick={ closeUserProfileHandler } className='flex justify-center absolute right-2 cursor-pointer rounded-full bg-red-400 h-6 w-6'>X</div>
            </div>

            <div className='flex flex-wrap mt-4 flex-col lg:flex-row justify-center items-center h-fit w-full'>
                <div className="flex flex-col">
                    <UserProfileSlider />

                    <div className="flex select-none bg-lime-700 justify-center cursor-pointer m-1 rounded-md">
                        Написать сообщение
                    </div>
                </div>

                <div className="flex items-center flex-col">
                    <div className="flex justify-center select-none text-white p-1 m-1 h-7 rounded-lg">
                        { userProfile.profile.name }, { userProfile.profile.age } лет
                    </div>

                    <UserVisitDateTime profile = { userProfile.profile } />

                    <div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
                        <span className="flex">О себе:</span>
                        
                        <div className="flex flex-wrap justify-center">
                            { userProfile.profile.discription }
                        </div>
                    </div>

                    <div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
                        <span className="flex">Личное:</span>
                        <div className="flex flex-wrap justify-center">
                            { <UserProfileInterest key={ 'location' + userProfile.profile.location } value={ userProfile.profile.location } title= { 'Локация' } /> }
                            { <UserProfileInterest key={ 'growth' + userProfile.profile.growth } value={ userProfile.profile.growth + ' см' } title= { 'Рост' } /> }
                            { <UserProfileInterest key={ 'weight' + userProfile.profile.weight } value={ userProfile.profile.weight + ' кг' } title= { 'Вес' } /> }
                            { <UserProfileInterest key={ 'signZodiac' + userProfile.profile.signzodiac } value={ arr_signZodiac[userProfile.profile.signzodiac] } title= { 'Знак зодиака' } /> }
                            { <UserProfileInterest key={ 'genderVapors' + userProfile.profile.gendervapor } value={ arr_genderVapor[userProfile.profile.gendervapor] }  title= { 'Ищу' }/> }
                            { 
                                !(userProfile.profile.children === 0)
                                ? <UserProfileInterest key={ 'children' + userProfile.profile.children } value={ arr_children[userProfile.profile.children] } title= { 'Дети' } />
                                : <></>
                            }
                            { 
                                !(userProfile.profile.religion === 0)
                                ? <UserProfileInterest key={ 'religion' + userProfile.profile.religion } value={ arr_religion[userProfile.profile.religion] } title= { 'Религия' } />
                                : <></>
                            }
                            { 
                                !(userProfile.profile.profit === 0)
                                ? <UserProfileInterest key={ 'profit' + userProfile.profile.profit } value={ arr_profit[userProfile.profile.profit] } title= { 'Заработок в месяц' } /> 
                                : <></>
                            }
                            { 
                                !(userProfile.profile.smoke === 0)
                                ? <UserProfileInterest key={ 'smoke' + userProfile.profile.smoke } value={ arr_smoke[userProfile.profile.smoke] } title= { 'Курение' } />
                                : <></>
                            }
                            { 
                                !(userProfile.profile.alcohol === 0)
                                ? <UserProfileInterest key={ 'alcohol' + userProfile.profile.alcohol } value={ arr_alcohol[userProfile.profile.alcohol] } title= { 'Алкоголь' } />
                                : <></>
                            }
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
                            <span className="flex">Интересы:</span>

                            <div className="flex flex-wrap justify-center">
                                { userProfile.profile.interests.length ? userProfile.profile.interests.map((interest, i) => {
                                    return <UserProfileInterest key={ interest + i } value={ interest } title= { interest }/>
                                }) :<UserProfileInterest key={ 'interest' + userProfile.profile.id } value={ 'Отсутствуют' }/> }
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
                            <span className="flex">Ценю качества:</span>
                            
                            <div className="flex flex-wrap justify-center">
                                <div className="flex flex-wrap justify-center">
                                    { userProfile.profile.ilikecharacter.length ? userProfile.profile.ilikecharacter.map((quality, i) => {
                                        return <UserProfileInterest key={ arr_iLikeСharacter[quality] + i } value={ arr_iLikeСharacter[quality][0] } title={ arr_iLikeСharacter[quality][1] } />
                                    }) :<UserProfileInterest key={ 'interest' + userProfile.profile.id } value={ 'Отсутствуют' } /> }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center items-center flex-col select-none text-white max-w-xl p-1 m-1 rounded-lg">
                            <span className="flex">Не нравятся качества:</span>
                            
                            <div className="flex flex-wrap justify-center">
                                { userProfile.profile.idontlikecharacter.length ? userProfile.profile.idontlikecharacter.map((quality, i) => {
                                        return <UserProfileInterest key={ arr_iDontLikeСharacter[quality] + i } value={ arr_iDontLikeСharacter[quality][0] }  title={ arr_iDontLikeСharacter[quality][1] } />
                                }) :<UserProfileInterest key={ 'interest' + userProfile.profile.id } value={ 'Отсутствуют' } /> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
