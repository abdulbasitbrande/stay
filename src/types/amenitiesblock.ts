export interface Amenity {
  title: string;
  description?: string;
}

export interface AmenitiesBlockProps {
  amenities: Amenity[];
}
