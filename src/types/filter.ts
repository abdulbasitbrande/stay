export interface Filters {
  search: string[];
  type: string | null;
  sort: string | null;

  price: {
    min: number | null;
    max: number | null;
  };

  beds: {
    min: number | null;
    max: number | null;
  };

  size: {
    min: number | null;
    max: number | null;
  };

  amenities: string[];
}