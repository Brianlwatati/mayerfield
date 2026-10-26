// src/data/coffeeData.ts (or your data file)
export type Categories =
  | "Hot Coffee"
  | "Cold Drinks"
  | "Bakery"
  | "Tea & Others";

export const CATEGORIES = [
  "All",
  "Hot Coffee",
  "Cold Drinks",
  "Bakery",
  "Tea & Others",
] as const;

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Categories;
  image: string;
  is_popular?: boolean;
}
