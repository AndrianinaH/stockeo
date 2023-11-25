import axios from "axios";

const instance = axios.create();
console.log({ API_URL: import.meta.env.VITE_API_URL });

instance.defaults.baseURL = `${import.meta.env.VITE_API_URL}`;
instance.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
  "token",
)}`;

export default instance;
