import { IDialog, IProfile, IProfileShort } from "../interfaces/iprofiles";
import { ILogin, IQueryDialog, IQueryGetProfiles, IQueryLike, IQuerySetProfile } from "../interfaces/iquery";
import { IQueryAnswerDialog, IQueryAnswerDialogs, IQueryAnswerError, IQueryAnswerGetProfile, IQueryAnswerLike, IQueryAnswerLogin, IQueryAnswerLoginData, IQueryAnswerMessageData, IQueryAnswerProfiles, IQueryAnswerProfileShort, IQueryAnswerRegistration, IQueryAnswerRegistrationData, IQueryAnswerSetProfile } from "../interfaces/iqueryanswer";
import { useQueryGet, useQueryPost, useQueryPut } from "./querys.hook";

/* API Query to server */

/* Registration new user */
export function useQueryRegistration() {  
    const { data, error, loaded, querySend } = useQueryPost();

    const querySendRegistration = async (dataQuery: ILogin) => {
        querySend('/api/registration', dataQuery, true);
    }

    const dataNew = data as IQueryAnswerRegistrationData;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerRegistration = { data: dataNew, error: errorNew, loaded, querySendRegistration };

    return queryAnswer; 
}

/* Enter user */
export function useQueryLogin() {  
    const { data, error, loaded, querySend } = useQueryPost();

    const querySendLogin = async (dataQuery: ILogin) => {
        querySend('/api/login', dataQuery, true);
    }

    const dataNew = data as IQueryAnswerLoginData;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerLogin = { data: dataNew, error: errorNew, loaded, querySendLogin };

    return queryAnswer;
}

/* Enter user */
export function useQueryLike() {  
    const { data, error, loaded, querySend } = useQueryPut();

    const querySendLike = async (dataQuery: IQueryLike) => {
        querySend('/api/like', dataQuery, false);
    }

    const dataNew = data as IQueryAnswerMessageData;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerLike = { data: dataNew, error: errorNew, loaded, querySendLike };

    return queryAnswer;
}

/* Set profile 
    - profile - modified user profile  
*/
export function useQuerySetProfile() {
    const { data, error, loaded, querySend } = useQueryPut();

    const querySendSetProfile = async (dataQuery: IQuerySetProfile) => {
        querySend('/api/profile', dataQuery, true);
    }

    const dataNew = data as IProfile;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerSetProfile = { data: dataNew, error: errorNew, loaded, querySendSetProfile };

    return queryAnswer;
}

/* Set profile short
    - profileShort - modified user profile  
*/
export function useQuerySetProfileShort() { 
    const { data, error, loaded, querySend } = useQueryPut();

    const querySendSetProfileShort = async (dataQuery: IProfileShort) => {
        querySend('/api/profileshort', dataQuery, true);
    }

    const dataNew = data as IProfileShort;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerProfileShort = { data: dataNew, error: errorNew, loaded, querySendSetProfileShort };

    return queryAnswer;
}

/* Get profile 
    - id = 0 - get our profile, * - other profiles 
*/
export function useQueryGetProfile() {
    const { data, error, loaded, querySend } = useQueryGet();

    const querySendGetProfile = async (dataQuery: IProfileShort) => {
        querySend('/api/profile', dataQuery, true);
    }

    const dataNew = data as IProfile;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerGetProfile = { data: dataNew, error: errorNew, loaded, querySendGetProfile };

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

    const querySendGetProfiles = async (dataQuery: IQueryGetProfiles) => {

        querySend('/api/profiles', dataQuery, true);
    }

    const dataNew = data as [IProfile];
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerProfiles = { data: dataNew, error: errorNew, loaded, querySendGetProfiles };

    return queryAnswer;
}

/* Get dialogs
*/
export function useQueryGetDialogs() {   
    const { data, error, loaded, querySend } = useQueryGet();

    const querySendGetDialogs = async () => {

        querySend('/api/dialogs', {} , true);
    }

    const dataNew = data as [IDialog];
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerDialogs = { data: dataNew, error: errorNew, loaded, querySendGetDialogs };

    return queryAnswer;
}

/* Get dialog
    - id = 0 - get our profile, * - other profiles 
*/
export function useQueryGetDialog() {   
    const { data, error, loaded, querySend } = useQueryGet();

    const querySendGetDialog = async (dataQuery: IQueryDialog) => {

        querySend('/api/dialog', dataQuery , true);
    }

    const dataNew = data as IDialog;
    const errorNew = error as IQueryAnswerError;

    const queryAnswer: IQueryAnswerDialog = { data: dataNew, error: errorNew, loaded, querySendGetDialog };

    return queryAnswer;
}
