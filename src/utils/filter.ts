import { Property } from "@/types/property";
import { Filters } from "@/types/filter";

export const filterProperties = (data: Property[], filters: Filters) => {
  return data.filter((item) => {
    // SEARCH
    if (
      filters.search.length &&
      !filters.search.some((raw) => {
        const s = raw.toLowerCase();
        const title = (item.title || "").toLowerCase();
        const location = (item.location || "").toLowerCase();

        if (s.startsWith("building:")) {
          return title.includes(s.replace("building:", ""));
        }

        if (s.startsWith("location:")) {
          return location.includes(s.replace("location:", ""));
        }

        return title.includes(s) || location.includes(s);
      })
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
    // AMENITIES (STRICT AND MATCH)
    if (filters.amenities.length) {
      const itemAmenities = (item.amenities || []).map((a) =>
        a.title.toLowerCase(),
      );

      const selectedAmenities = filters.amenities.map((a) => a.toLowerCase());

      const hasAllAmenities = selectedAmenities.every((a) =>
        itemAmenities.includes(a),
      );

      if (!hasAllAmenities) {
        return false;
      }
    }

    return true;
  });
};
