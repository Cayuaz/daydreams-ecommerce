import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://daydreams-api.onrender.com",
});

axiosInstance.interceptors.response.use((res) => {
  return res.data;
});
