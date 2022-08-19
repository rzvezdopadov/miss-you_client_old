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
