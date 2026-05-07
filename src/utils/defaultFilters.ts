import { Filters } from "@/types/filter";

export const defaultFilters: Filters = {
  search: [],
  type: null,
  sort: null,

  price: { min: null, max: null },
  beds: { min: null, max: null },
  size: { min: null, max: null },

  amenities: [],
  purpose: null,
  offplan: false,
};
