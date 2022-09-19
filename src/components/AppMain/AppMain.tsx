// @ts-nocheck
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { store } from '../../utils/store';
import { AboutUs } from '../AboutUs/AboutUs';
import { Agreement } from '../Agreement/Agreement';
import { FormEnter } from '../FormEnter/FormEnter';
import { FormRegistration } from '../FormRegistrarion/FormRegistration';
import { SettingProfile } from '../SettingProfile/SettingProfile';
import { Partners } from '../Partners/Partners';
import { Vapors } from '../Vapors/Vapors';
import { SearchVapors } from '../SearchVapors/SearchVapors';
import { Messages } from '../Messages/Messages';

export function AppMain() {
    const { jwt } = store.getState();

    return (
        <div className="App-Main flex flex-grow pt-4 pb-4 justify-center items-center">
            {
                <Routes>
                    <Route path="/agreement" element={ <Agreement /> } />
                    <Route path="/about" element={ <AboutUs /> } />
                    <Route path="/partners" element={ <Partners /> } />
                    
                    { 
                        jwt ?
                            <>
                                <Route path="/messages" element={ <Messages /> } />
                                <Route path="/settings" element={ <SettingProfile /> } />
                                <Route path="/searchvapors" element={ <SearchVapors /> } />
                                <Route path="/*" element={ <Vapors /> } />
                            </>
                            : 
                            <>
                                <Route path="/enter" element={ <FormEnter /> } />
                                <Route path="/*" element={ <FormRegistration /> } />
                            </>
                    }
                </Routes>
            }
        </div>
    );
}
