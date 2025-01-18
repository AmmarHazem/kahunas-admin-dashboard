import { BaseResponseModel } from "./BaseResponseModel";

export interface LoginResponseModel extends BaseResponseModel {
  user?: User;
  token?: string;
}

export interface User {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: "admin" | "client" | "coach";
  createdAt?: Date;
}
