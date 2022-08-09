import { jwtAction } from "../../utils/reducers";
import { setStorageJWT } from "../../utils/storage";
import { store } from "../../utils/store";

export function logout() {
    const state = store.getState();
    let { jwt } = state;

    jwt = "";
    
    setStorageJWT(jwt);
    store.dispatch(jwtAction(jwt));    
}
