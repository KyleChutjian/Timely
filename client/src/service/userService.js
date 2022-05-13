import http from "./httpService";
import { getJwt } from "./authService";
const apiEndpoint = "http://localhost:5001/auth";
const apiEndpointUser = "http://localhost:5001/user";

export function login(data) {
  return http.post(`${apiEndpoint}/login`, data);
}

export function signup(user) {
  return http.post(`${apiEndpoint}/register`, {
    email: user.email,
    password: user.password,
    isProfessor: true,
  });
}

//get user
export function getUserById(userId) {
  http.setJwt(getJwt());
  return http.get(`${apiEndpointUser}/${userId}`);
}
//get courses by user
export function getCourses(userId) {
  http.setJwt(getJwt());
  return http.get(`${apiEndpointUser}/enroll/6254b804d6a914b5b6981b0d`);
}
//get all courses
export function getAllCourses() {
  http.setJwt(getJwt());
  return http.get(`${apiEndpointUser}/courses/frogs`);
}
//get all lessons within course
export function getAllLessons(courseId) {
  http.setJwt(getJwt());
  return http.get(`${apiEndpointUser}/courses/${courseId}/entry`);
}
//enroll user in a course
export function enrollInCourse(userId, courseId) {
  http.setJwt(getJwt());
  return http.post(`${apiEndpointUser}/enroll/${userId}/${courseId}`);
}
//get all lessons within course by user
export function getAllLessonsByUser(courseId, userId) {
  http.setJwt(getJwt());
  return http.get(`${apiEndpointUser}/courses/${courseId}/${userId}/entry`);
}
//create a course
export function createCourse(userId, courseName) {
  http.setJwt(getJwt());
  return http.post(`${apiEndpointUser}/course/${userId}/${courseName}`);
}
