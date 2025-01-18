import { LoginResponseModel } from "@/models/LoginResponseModel";
import { axiosAPIInstance } from "./axios";
import { AxiosError } from "axios";

export async function login(params: { email: string; password: string }) {
  try {
    const res = await axiosAPIInstance.post<LoginResponseModel>("/auth/login", params);
    return res.data;
  } catch (e) {
    console.log("Login failed", e);
    if (e instanceof AxiosError) {
      return e.response?.data as LoginResponseModel;
    }
    return null;
  }
}

export async function register(params: { email: string; password: string; firstName: string; lastName: string; role: string }) {
  try {
    const res = await axiosAPIInstance.post<LoginResponseModel>("/auth/register", params);
    return res.data;
  } catch (e) {
    console.log("Register failed", e);
    if (e instanceof AxiosError) {
      return e.response?.data as LoginResponseModel;
    }
    return null;
  }
}
