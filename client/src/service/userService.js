import http from "./httpService";

const apiEndpoint = "http://localhost:5001/auth";

export function login(data) {
    return http.post(`${apiEndpoint}/login`, data);
  }

  export function signup(user) {
      return http.post(`${apiEndpoint}/register`, {
          email: user.email,
          password: user.password
      });
  }

