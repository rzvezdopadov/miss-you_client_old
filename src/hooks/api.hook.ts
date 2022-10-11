import { IProfile, IProfileShort } from "../interfaces/iprofiles";
import { ILike, ILogin, IQueryGetProfiles, IQuerySetProfile } from "../interfaces/iquery";
import { IQueryAnswerError, IQueryAnswerLike, IQueryAnswerLogin, IQueryAnswerLoginData, IQueryAnswerMessageData, IQueryAnswerProfile, IQueryAnswerProfiles, IQueryAnswerProfileShort, IQueryAnswerRegistration, IQueryAnswerRegistrationData } from "../interfaces/iqueryanswer";
import { useQueryGet, useQueryPost, useQueryPut } from "./querys.hook";

/* API Query to server */

/* Registration new user */
export function useQueryRegistration() {  
    const { data, error, loaded, querySend } = useQueryPost();

    const querySendHAL = async (dataQuery: ILogin) => {
        querySend('/api/registration', dataQuery, true);
    }

    const dataNew = data as IQueryAnswerRegistrationData;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerRegistration = { data: dataNew, error: errorNew, loaded, querySendHAL };

    return queryAnswer; 
}

/* Enter user */
export function useQueryLogin() {  
    const { data, error, loaded, querySend } = useQueryPost();

    const querySendHAL = async (dataQuery: ILogin) => {
        querySend('/api/login', dataQuery, true);
    }

    const dataNew = data as IQueryAnswerLoginData;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerLogin = { data: dataNew, error: errorNew, loaded, querySendHAL };

    return queryAnswer;
}

/* Enter user */
export function useQueryLike() {  
    const { data, error, loaded, querySend } = useQueryPut();

    const querySendHAL = async (dataQuery: ILike) => {
        querySend('/api/like', dataQuery, false);
    }

    const dataNew = data as IQueryAnswerMessageData;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerLike = { data: dataNew, error: errorNew, loaded, querySendHAL };

    return queryAnswer;
}

/* Set profile 
    - profile - modified user profile  
*/
export function useQuerySetProfile() {
    const { data, error, loaded, querySend } = useQueryPut();

    const querySendHAL = async (dataQuery: IQuerySetProfile) => {
        querySend('/api/profile', dataQuery, true);
    }

    const dataNew = data as IProfile;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerProfile = { data: dataNew, error: errorNew, loaded, querySendHAL };

    return queryAnswer;
}

/* Set profile 
    - profileShort - modified user profile  
*/
export function useQuerySetProfileShort() { 
    const { data, error, loaded, querySend } = useQueryPut();

    const querySendHAL = async (dataQuery: IProfileShort) => {
        querySend('/api/profileshort', dataQuery, true);
    }

    const dataNew = data as IProfileShort;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerProfileShort = { data: dataNew, error: errorNew, loaded, querySendHAL };

    return queryAnswer;
}

/* Get profile 
    - id = 0 - get our profile, * - other profiles 
*/
export function useQueryGetProfile() {
    const { data, error, loaded, querySend } = useQueryGet();

    const querySendHAL = async (dataQuery: IProfileShort) => {
        querySend('/api/profile', dataQuery, true);
    }

    const dataNew = data as IProfile;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerProfile = { data: dataNew, error: errorNew, loaded, querySendHAL };

    return queryAnswer;
}

/* Get profiles
    - filters - filters by which to search in the database, 
    if this field is left blank, then all users will be sent; 
    - startCount - user position to start;
    - amount - number of users in response;
*/
export function useQueryGetProfiles() {   
    const { data, error, loaded, querySend } = useQueryGet();

    const querySendHAL = async (dataQuery: IQueryGetProfiles) => {

        querySend('/api/profiles', dataQuery, true);
    }

    const dataNew = data as [IProfile];
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerProfiles = { data: dataNew, error: errorNew, loaded, querySendHAL };

    return queryAnswer;
}
