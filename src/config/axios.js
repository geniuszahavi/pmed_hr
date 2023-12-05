import axios from "axios";

const LOCAL_BASE_URL = process.env.REACT_APP_BASE_URL_LOCAL;
const LIVE_BASE_URL = process.env.REACT_APP_BASE_URL_LIVE;

let value = null;

if (typeof window !== "undefined") {
    const obj = localStorage.getItem("plateaumed_staff");
    console.log(obj);
    value = obj;
}

console.log(value)

export const noAuthAPI = axios.create({
    baseURL: LOCAL_BASE_URL,
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
    },
});

export const authAPI = axios.create({
    baseURL: LOCAL_BASE_URL,
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
        Authorization: `Bearer ${value}`,
    },
});

const liveAPI = axios.create({
    baseURL: LIVE_BASE_URL,
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-type": "application/json",
        Authorization: `Bearer ${value?.authorization}`,
    },
});

export default liveAPI;
