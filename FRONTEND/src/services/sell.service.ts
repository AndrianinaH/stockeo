import axios from "../utils/axios";
import { ENDPOINTS } from "../constants/endpoints";
import { SellType } from "../utils/types";

export const SellService = {
  createSell: async (vente: SellType) => {
    try {
      const response = await axios.post(ENDPOINTS.SELL, { vente });
      return response.data;
    } catch (error) {
      console.error("Error creating sell:", error);
      throw error;
    }
  },
};
