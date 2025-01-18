import { GetClientsResponse } from "@/models/GetClientsResponse";
import useSWR from "swr";

export default function useClients({ page = 1 }: { page?: number }) {
  const { data, error, isLoading } = useSWR<GetClientsResponse>(`/api/users/clients?page=${page}`);
  return { data, error, isLoading };
}
