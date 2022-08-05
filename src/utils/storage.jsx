export function getStorage(key, defaultVal) {
    let storage = JSON.parse(localStorage.getItem(key));

    if (!storage) {
        storage = defaultVal;

        setStorage(key, storage);
    }

    return storage;
}

export function setStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));

    return obj;
}

export function getStorageJWT() {
    return getStorage('jwt', '');
}
 
export function setStorageJWT(data) {
    setStorage('jwt', data);
}

export function getStorageProfile() {
    return getStorage('profile', 
        {
            login: '',
            name: '',
            surname: '',
            myGender: '',
            searchGender: '',
            relation: '',
            interests: [],
            about: '',
            linkPhoto: '',
        }       
    );
}
 
export function setStorageProfile(data) {
    setStorage('profile', data);
}

export function getStorageMyVapors() {
    return getStorage('myVapors', []);
}
 
export function setStorageMyVapors(data) {
    setStorage('myVapors', data);
}
