import { ENDPOINTS } from "../constants/endpoints";
import axios from "../utils/axios";
export const AuthService = {
  login: async (parameters: { username: string; password: string }) => {
    return axios.post(`${ENDPOINTS.LOGIN}`, parameters);
  },
  getUser: async (token: string) => {
    return axios.get(`${ENDPOINTS.ME}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
