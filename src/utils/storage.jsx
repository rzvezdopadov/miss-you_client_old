function getStorage() {
    let storage = JSON.parse(localStorage.getItem('state'));

    if (!storage) {
        storage = {
            jwt: '554',
            profile: {
                login: '',
                name: '',
                surname: '',
                myGender: '',
                searchGender: '',
                relation: '',
                interests: [],
                about: '',
                linkPhoto: [],
            },
            myFriends: [],
        }

        setStorage(storage);
    }

    return storage;
}

function setStorage(obj) {
    localStorage.setItem('state', JSON.stringify(obj));

    return obj;
}

export {getStorage, setStorage};
