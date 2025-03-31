import { ROLES, SELL_STATUS } from "./enum";

export type SnackbarContextType = {
  handleSetSnackbar: (value: {
    isOpen: boolean;
    message: string;
    variant: "success" | "error";
  }) => void | undefined;
};

export type SessionContextType = {
  user: UserType | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUser: any | null;
  isLoading: boolean;
};

export type UserType = {
  email: string;
  role: ROLES;
};

export type ProductType = {
  id: number;
  name: string;
  prix: number;
  category: string;
};

export type SellType = {
  produits: {
    id: number;
    quantite: number;
    prixVente: number;
  }[];
  commentaires?: string;
  status: SELL_STATUS;
};
