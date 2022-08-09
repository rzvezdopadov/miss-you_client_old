// @ts-nocheck
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { store } from '../../utils/store';
import { AboutUs } from '../AboutUs/AboutUs';
import { Agreement } from '../Agreement/Agreement';
import { FormEnter } from '../FormEnter/FormEnter';
import { FormRegistration } from '../FormRegistrarion/FormRegistration';
import { FormSettingProfile } from '../FormSettingProfile/FormSettingProfile';
import { Partners } from '../Partners/Partners';
import { Vapors } from '../Vapors/Vapors';
import { SearchVapors } from '../SearchVapors/SearchVapors';

export function AppMain() {
    const { jwt } = store.getState();

    return (
        <div className="App-Main flex flex-grow p-4 justify-center items-center">
            {
                <Routes>
                    <Route path="/enter" element={ <FormEnter /> } />
                    <Route path="/about" element={ <AboutUs /> } />
                    <Route path="/partners" element={ <Partners /> } />
                    <Route path="/agreement" element={ <Agreement /> } />
                    <Route path="/settings" element={ <FormSettingProfile /> } />
                    <Route path="/vapors" element={ <Vapors /> } />
                    <Route path="/searchvapors" element={ <SearchVapors /> } />
                    { jwt ? <Route path="/" element={ <Vapors /> } /> : <Route path="/" element={ <FormRegistration /> } /> }
                    <Route path="/*" element={ <FormRegistration /> } />
                </Routes>
            }
        </div>
    );
}
