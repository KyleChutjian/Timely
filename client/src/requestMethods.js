import axios from "axios";

const BASE_URL = "http://localhost:5001/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2IzNjYxNDc3N2QzZGQ0NDMyZmEzZSIsImlhdCI6MTY1MjI0MjIzNywiZXhwIjoxNjUyNTAxNDM3fQ.Ml1ZBUe7aNlPicIdsV4w0-OGpTYOsoDFO62-HRW0Ixg";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: 'Bearer ${TOKEN}' },
});