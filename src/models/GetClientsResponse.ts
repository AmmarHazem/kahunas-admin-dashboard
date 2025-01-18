import { UserModel } from "./LoginResponseModel";

export interface GetClientsResponse {
  data?: UserModel[];
  total?: number;
  page?: number;
  limit?: number;
}
