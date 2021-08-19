import axios from "axios";
import { UserType } from "../../types/user";

interface SignUPAPIBody {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
  birthday: string;
}

export const signupAPI = (body: SignUPAPIBody) =>
  axios.post<UserType>("/api/auth/signup", body);

export const loginAPI = (body: { email: string; password: string }) =>
  axios.post<UserType>("/api/auth/login", body);

// 쿠키의 access_token의 유저 정보 받아오는 api
export const meAPI = () => axios.get<UserType>("/api/auth/me");

export const logoutAPI = () => axios.delete("/api/auth/logout");
