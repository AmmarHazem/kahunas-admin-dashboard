import axios from "axios";

export const axiosAPIInstance = axios.create({
  baseURL: "http://localhost:3002",
});

export const axiosAIServiceInstance = axios.create({
  baseURL: "http://localhost:3000",
});
