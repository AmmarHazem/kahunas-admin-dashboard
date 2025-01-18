import { BaseResponseModel } from "./BaseResponseModel";

export interface LoginResponseModel extends BaseResponseModel {
  user?: UserModel;
  token?: string;
}

export interface UserModel {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role?: "admin" | "client" | "coach";
  createdAt?: Date;
}
