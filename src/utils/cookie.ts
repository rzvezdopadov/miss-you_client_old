export function getCookiesJWT():string {
    const obj = { jwt: '' };
    const cookies = document.cookie.split(/;/);

    for (let i = 0, len = cookies.length; i < len; i++) {
        let cookie = cookies[i].split(/=/);

        obj[cookie[0]] = cookie[1];
    }

    if ((
        Object.keys(obj).length === 0) || 
            (obj.jwt === undefined) ||
                (obj.jwt === '')  
    ) return ''; 

    return obj.jwt;
}
