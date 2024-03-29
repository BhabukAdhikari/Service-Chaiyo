//key should be present and be string

export const setLocalStorage = (key, value) => {
    const newValue = JSON.stringify(value);
    localStorage.setItem(key, newValue);
}

export const getLocalStorage = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

export const setRemoteStorage = (key) => {
    localStorage.removeItem(key);
}

// if (res.data) {
//     setLocalStorage('token', res.data.token);
// }



// import { setLocalStorage } from '../utils/local-storage';
// import { SupplierValidation } from '../schema';