import { ENDPOINTS } from "../constants/endpoints";
import axios from "../utils/axios";
export const AuthService = {
  login: async (parameters: { email: string; password: string }) => {
    return axios.post(`${ENDPOINTS.LOGIN}`, parameters);
  },
  getUser: async (token: string) => {
    return axios.get(`${ENDPOINTS.USERS}/getMe`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
