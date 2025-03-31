import { ENDPOINTS } from "../constants/endpoints";
import axios from "../utils/axios";
import { ProductType } from "../utils/types";

const getProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await axios.get<{ produits: ProductType[] }>(
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
