import { ENDPOINTS } from "../constants/endpoints";
import axios from "../utils/axios";
import { Product } from "../utils/types";

const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await axios.get<{ produits: Product[] }>(
      `${ENDPOINTS.PRODUCT}`,
    );
    return response.data.produits;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const ProductService = {
  getProducts,
};
