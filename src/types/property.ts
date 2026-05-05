import { GalleryProp } from "./gallery";
import { AgentProp } from "./agent";
import { PropertyLocationProp } from "./propertylocation";
import { PermitProp } from "./permit";

// types/property.ts
export type PropertyVariant = "small-card" | "medium-card" | "large-card";
export interface Property {
  id: string;
  slug: string;
  purpose: string;
  type: string;
  price: number;
  title: string;
  description: string;
  image: string;
  location: string;
  beds: number;
  areasize: number;
  bathrooms?: number;
  amenities: {
    title: string;
    description?: string;
  }[];
  offplan?: boolean;
  variant?: PropertyVariant;
  tags?: string[];
}

export interface PropertySingle {
  projectCard: Property;
  gallery: GalleryProp;
  agent: AgentProp;
  propertyLocation: PropertyLocationProp;
  permit: PermitProp;
}

export interface PropertyDetial {
  projectData: PropertySingle;
}
