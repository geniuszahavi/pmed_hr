import axios from "axios";
const LIVE_BASE_URL = "https://placard-api-55f2c69d4a49.herokuapp.com/api/v1/";
const LOCAL_BASE_URL = "https://api.coderigi.co/";

let value = null;


if (typeof window !== "undefined") {
    const obj = localStorage.getItem("plateaumed")
	value = obj;
}

console.log(value);

export const noAuthAPI = axios.create({
    baseURL: LOCAL_BASE_URL,
    headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json"
    }
})


export const authAPI = axios.create({
    baseURL: LOCAL_BASE_URL,
    headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-type": "application/json",
        "Authorization": `Bearer ${value}`
    }
})


// export const authAPI = () => {
//     const getToken = () => {
//         if (typeof window !== 'undefined') {
//             const obj = localStorage.getItem("placard")
//             const value = JSON.parse(obj);
//             return value?.authorization
//         } else {
//             console.log('window is undefined')
//         }
//     }

//     return axios.create({
//         baseURL: LIVE_BASE_URL,
//         headers: {
//             "Authorization": `Bearer ${getToken()}`,
//             "Content-type": "application/json"
//         }
//     });
// }

const api = () => {
    return axios.create({
        baseURL: LIVE_BASE_URL,
        headers: {
            "Accept": "application/json, text/plain, */*",
            "Content-type": "application/json",
            "Authorization": `Bearer ${value.authorization}`
        }
    });
}


export default api;