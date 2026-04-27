import { Filters } from "@/types/filter";

export const defaultFilters: Filters = {
  search: [],
  type: null,

  price: { min: null, max: null },
  beds: { min: null, max: null },
  size: { min: null, max: null },

  amenities: [],
};
