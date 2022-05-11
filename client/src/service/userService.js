import http from "./httpService";

const apiEndpoint = "http://localhost:5001/auth/register";

export function register(user){
    return http.post(apiEndpoint, {
        email: user.email,
        password: user.password,
        isProfessor: user.isProfessor,
    });
}