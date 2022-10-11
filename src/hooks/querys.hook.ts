import { useState } from "react";
import axios from "../../node_modules/axios/index";
import { modalLoadingOnHide, modalLoadingOnShow } from "../components/ModalLoading/ModalLoading";
import { IQueryAnswer } from "../interfaces/iqueryanswer";
import { jwtAction } from "../utils/reducers";
import { setStorageJWT } from "../utils/storage";
import { store } from "../utils/store";

function testOnBadTokenStatus(message) {
    if (message === 'Токен просрочен, повторите вход в систему!') {
        setTimeout(() => {
            store.dispatch(jwtAction(''));
            setStorageJWT('');
            document.location.href = '/'
        }, 1500);
    }
}

export function useQueryGet() {
    const [data, setDataAnswer] = useState(null);
    const [error, setErrorAnswer] = useState('');
    const [loaded, setLoaded] = useState(false);

    const querySend = async (link: string = '', data: {} = { params: {}}, modalLoad: boolean = false) => {
        if (modalLoad) modalLoadingOnShow();
        setLoaded(true);

        const newData = {
            params: data,
        }
        
        await axios.get(link, newData).then((payload) => {
            setDataAnswer(payload.data);
        }).catch((error) => {
            setErrorAnswer(error);
            testOnBadTokenStatus(error.response.data.message);
        }).finally(() => {
            if (modalLoad) modalLoadingOnHide();
            setLoaded(false);
        });
    }
        
    const queryAnswer: IQueryAnswer = { data, error, loaded, querySend };

    return queryAnswer;
}
 
export function useQueryPost() {
    const [data, setDataAnswer] = useState(null);
    const [error, setErrorAnswer] = useState('');
    const [loaded, setLoaded] = useState(false);

    const querySend = async (link: string = '', data: {} = {}, modalLoad: boolean = false) => {
        
        if (modalLoad) modalLoadingOnShow();
        setLoaded(true);
        
        await axios.post(link, data).then((payload) => {
            setDataAnswer(payload.data);
        }).catch((error) => {
            setErrorAnswer(error);
            testOnBadTokenStatus(error.response.data.message);
        }).finally(() => {
            if (modalLoad) modalLoadingOnHide();
            setLoaded(false);
        });
    }
        
    const queryAnswer: IQueryAnswer = { data, error, loaded, querySend };

    return queryAnswer;
}

export function useQueryPut() {
    const [data, setDataAnswer] = useState(null);
    const [error, setErrorAnswer] = useState('');
    const [loaded, setLoaded] = useState(false);

    const querySend = async (link: string = '', data: {} = {}, modalLoad: boolean = false) => {
        
        if (modalLoad) modalLoadingOnShow();
        setLoaded(true);
        
        await axios.put(link, data).then((payload) => {
            setDataAnswer(payload.data);
        }).catch((error) => {
            setErrorAnswer(error);
            testOnBadTokenStatus(error.response.data.message);
        }).finally(() => {
            if (modalLoad) modalLoadingOnHide();
            setLoaded(false);
        });
    }
        
    const queryAnswer: IQueryAnswer = { data, error, loaded, querySend };

    return queryAnswer;
}

export function useQueryDelete() {
    const [data, setDataAnswer] = useState(null);
    const [error, setErrorAnswer] = useState('');
    const [loaded, setLoaded] = useState(false);

    const querySend = async (link: string = '', data: {} = {}, modalLoad: boolean = false) => {
        
        if (modalLoad) modalLoadingOnShow();
        setLoaded(true);
        
        await axios.delete(link, data).then((payload) => {
            setDataAnswer(payload.data);
        }).catch((error) => {
            setErrorAnswer(error);
            testOnBadTokenStatus(error.response.data.message);
        }).finally(() => {
            if (modalLoad) modalLoadingOnHide();
            setLoaded(false);
        });
    }
        
    const queryAnswer: IQueryAnswer = { data, error, loaded, querySend };

    return queryAnswer;
}
