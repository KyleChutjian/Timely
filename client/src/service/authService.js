import jwtDecode from "jwt-decode";
import axios from 'axios';
import http from "./httpService";

const apiEndpoint = "http://localhost:5001/auth/";
const tokenKey = "token";
let id = null;
let isProfessor = null;

http.setJwt(getJwt());

export async function login(userInfo) {
    //store the jwt object as object = data and wait login function with user input
    const user = userInfo.info;
    console.log("userInfo" + userInfo)
    const { data: jwt } = await http.post("http://localhost:5001/auth/login", userInfo);
    //store the token in local storage
    localStorage.setItem(tokenKey, jwt);
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