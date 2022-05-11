import jwtDecode from "jwt-decode";
import axios from 'axios';
import http from "./httpService";

const apiEndpoint = "http://localhost:5001/auth/";
const tokenKey = "token";
let id = null;
let isProfessor = null;

http.setJwt(getJwt());

export async function login(email, password) {
    let received = await axios
    .post("http://localhost:5001/auth/login", {email, password})
    .catch((error) =>{
        console.error(error);
    });
    id = received.data.id;
    isProfessor = received.data.isProfessor
    localStorage.setItem(tokenKey, received.data.token);
}
export function loginWithJwt(jwt){
    localStorage.setItem(tokenKey, jwt);
}
export function getJwt() {
    return localStorage.getItem(tokenKey);
  }

export default{
    login,
    loginWithJwt
};