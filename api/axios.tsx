import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://teramebli-api.onrender.com/api",
});

export default axiosClient;
