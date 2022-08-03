import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AboutUs } from '../AboutUs/AboutUs';
import { Agreement } from '../Agreement/Agreement';
import { FormEnter } from '../FormEnter/FormEnter';
import { FormRegistration } from '../FormRegistrarion/FormRegistration';
import { Partners } from '../Partners/Partners';

export function AppMain() {
    return (
        <div className="App-Main flex flex-grow p-4 justify-center items-center">
            <Routes>
                <Route path="/enter" element={ <FormEnter /> } />
                <Route path="/about" element={ <AboutUs /> } />
                <Route path="/partners" element={ <Partners /> } />
                <Route path="/agreement" element={ <Agreement /> } />
                <Route path="*" element={ <FormRegistration /> } />
            </Routes>
        </div>
    );
}
