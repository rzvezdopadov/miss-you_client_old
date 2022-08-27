import { IProfile } from "../interfaces/iprofiles";

export function getStorage(key: string, defaultVal) {
    let storage = JSON.parse(localStorage.getItem(key));

    if (!storage) {
        storage = defaultVal;

        setStorage(key, storage);
    }

    return storage;
}

export function setStorage(key: string, obj: {}) {
    localStorage.setItem(key, JSON.stringify(obj));

    return obj;
}

export function getStorageJWT() {
    return getStorage('jwt', '');
}
 
export function setStorageJWT(data: string) {
    setStorage('jwt', data);
}

export function getStorageProfile() {
    return getStorage('profile',  {
        email: '',
        password: '',
        jwt: '',
        id: 0,
        name: '',
        latitude: 0,
        longitude: 0,
        location: '',
        likes: [],
        age: 0,
        birthday: 0,
        monthOfBirth: 0,
        yearOfBirth: 0,
        gender: 0,
        genderVapor: 0,
        photoMain: 0,
        photoLink: [],
        signZodiac: 0,
        education: 0,
        fieldOfActivity: 0,
        maritalStatus: 0,
        children: 0,
        religion: 0,
        rise: 0,
        smoke: 0,
        alcohol: 0,
        discription: '',
        profit: 0,
        interests: [],
        iLikeСharacter: [],
        iDontLikeСharacter: [],
        vapors: [],
        likePeople: [],
        dislikePeople: [], 
    });
}
 
export function setStorageProfile(data: IProfile) {
    setStorage('profile', data);
}
