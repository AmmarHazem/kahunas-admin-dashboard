import { AI_BOT_URL, API_URL } from "@/config/api";
import axios from "axios";

export const axiosAPIInstance = axios.create({
  baseURL: API_URL,
});

export const axiosAIServiceInstance = axios.create({
  baseURL: AI_BOT_URL,
});
