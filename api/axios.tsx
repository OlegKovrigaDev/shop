import axios from "axios";

const API_URL = "https://teramebli-api.onrender.com/api";

export const axiosClient = axios.create({
  baseURL: API_URL,
});
