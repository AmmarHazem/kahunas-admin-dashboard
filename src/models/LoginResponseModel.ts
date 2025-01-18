export interface LoginResponseModel {
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
