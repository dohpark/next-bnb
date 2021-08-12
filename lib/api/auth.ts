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
