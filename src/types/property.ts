// types/property.ts

export type PropertyVariant = "small" | "medium" | "large";

export interface Property {
  id: number;
  title: string;
  price?: string;
  description: string;
  image: string;
  tags: string[];
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  location?: string;
  variant?: PropertyVariant;
}
