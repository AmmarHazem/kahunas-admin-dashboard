export interface BaseResponseModel {
  error?: string;
  statusCode?: number;
  message?: string | string[];
}
