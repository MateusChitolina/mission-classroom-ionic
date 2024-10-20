import axios from "axios";

const api = axios.create({
  baseURL: "https://classroommission.onrender.com/",
});

export default api;