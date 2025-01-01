import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // API URL from the environment variable
});

console.log("API URL:", import.meta.env.VITE_API_URL); // Log to check

export default axiosInstance;
