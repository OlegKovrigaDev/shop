import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://teramebli-api.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
