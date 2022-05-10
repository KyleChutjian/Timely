import http from "./httpService";
import * as config from "../config.json";

const { apiUrl } = config;

const apiEndpoint = apiUrl + "users/register";

export function register(user) {
  return http.post(apiEndpoint, {
    username: user.username,
    password: user.password,
    lastname: user.lastname,
    firstname: user.firstname,
  });
}
