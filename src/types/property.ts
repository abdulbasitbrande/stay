// types/property.ts

export type PropertyVariant = "small" | "medium" | "large";

// export interface Property {
//   id: number;
//   title: string;
//   price?: string;
//   description: string;
//   image: string;
//   tags: string[];
//   bedrooms?: number;
//   bathrooms?: number;
//   size?: string;
//   location?: string;
//   variant?: PropertyVariant;
// }

export type PropertyType = "villa" | "apartment" | "penthouse";

export interface Property {
  id: string;
  title: string;
  price: number;
  type: PropertyType;
  beds: number;
  areasize: number;
  location: string;
  purpose: "buy" | "rent" | "offplan";
  amenities: string[];
  image: string;
  slug: string;
  variant?: PropertyVariant;
  tags?: string[];
  bedrooms?: number;
  bathrooms?: number;
  size?: string;
  description: string;
}
