import axios from "axios";
// import logger from "./logService";
// import {toast} from "react-toastify";

axios.interceptors.response.use(null, error => {
    const expectedError = 
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

    return Promise.reject(error);
});

function setJwt(jwt){
    axios.defaults.headers.common["x-access-token"] = jwt;
}

export default{
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    setJwt,
};