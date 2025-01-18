import { AxiosError } from "axios";
import { axiosAPIInstance } from "./axios";
import { GetClientsResponse } from "@/models/GetClientsResponse";

export async function getClients({ page = 1, token }: { page?: number; token: string }) {
  try {
    const res = await axiosAPIInstance.get<GetClientsResponse>(`/users/clients`, {
      params: {
        page,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log("Error getting clients", e);
    if (e instanceof AxiosError) {
      return e.response?.data;
    }
    return null;
  }
}
