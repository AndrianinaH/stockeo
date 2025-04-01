import { atom } from "jotai";
import { ProductType } from "./types";

// Définis le type pour un item dans la liste des ventes, incluant le produit et la quantité
export type SaleItem = {
  product: ProductType;
  quantity: number;
  sellingPrice?: number;
};

// Initialise l'atom avec une liste vide de SaleItem
export const cartAtom = atom<SaleItem[]>([]);
