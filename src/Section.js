import Cookies from "js-cookie";

export const hasSession = () => {
    let session = Cookies.get("Authorization")

    return session !== undefined 
};

export const getToken = () => {
    return Cookies.get("Authorization")
}

export const setSession = (token) => {
    Cookies.set("Authorization",token)
}

export const removeToken = () => {
    Cookies.remove("Authorization")
}

