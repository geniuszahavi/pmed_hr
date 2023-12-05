import axios from "axios";

const LOCAL_BASE_URL = "https://api.coderigi.co/"
const LIVE_BASE_URL = "https://placard-api-55f2c69d4a49.herokuapp.com/api/v1/"

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
