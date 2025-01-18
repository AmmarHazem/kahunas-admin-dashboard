import { LoginResponseModel } from "@/models/LoginResponseModel";
import { axiosInstance } from "./axios";

export async function login(params: { email: string; password: string }) {
  try {
    const res = await axiosInstance.post<LoginResponseModel>("/auth/login", params);
    return res.data;
  } catch (e) {
    console.log("Login failed", e);
    return null;
  }
}
