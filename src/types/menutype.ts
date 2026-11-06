// src/data/coffeeData.ts (or your data file)
export interface Categories {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

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
  category_name: string; // Changed from 'category' to 'category_name'
  category_id: string;
  image: string;
  is_popular?: boolean;
}
