import { Property } from "@/types/property";
import { Filters } from "@/types/filter";

export const filterProperties = (data: Property[], filters: Filters) => {
  return data.filter((item) => {
    // SEARCH
    if (
      filters.search.length &&
      !filters.search.some((s) =>
        (item.title || "").toLowerCase().includes(s.toLowerCase()),
      )
    ) {
      return false;
    }

    // TYPE
    if (filters.type && item.type !== filters.type) {
      return false;
    }

    // PRICE
    if (filters.price.min !== null && item.price < filters.price.min) {
      return false;
    }

    if (filters.price.max !== null && item.price > filters.price.max) {
      return false;
    }

    // BEDS
    if (filters.beds.min !== null && item.beds < filters.beds.min) {
      return false;
    }

    if (filters.beds.max !== null && item.beds > filters.beds.max) {
      return false;
    }

    // SIZE
    if (filters.size.min !== null && item.areasize < filters.size.min) {
      return false;
    }

    if (filters.size.max !== null && item.areasize > filters.size.max) {
      return false;
    }

    // AMENITIES
    if (
      filters.amenities.length &&
      !filters.amenities.every((a) => (item.amenities || []).includes(a))
    ) {
      return false;
    }

    return true;
  });
};
