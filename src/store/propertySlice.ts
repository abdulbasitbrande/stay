import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Property } from "@/types/property";
import { Filters } from "@/types/filter";
import { defaultFilters } from "@/utils/defaultFilters";

interface State {
  all: Property[];
  filters: Filters;
  appliedFilters: Filters; // used for filtering
  viewMode: "grid" | "list";
}

const initialState: State = {
  all: [],
  filters: structuredClone(defaultFilters),
  appliedFilters: structuredClone(defaultFilters),
  viewMode: "list",
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setProperties(state, action: PayloadAction<Property[]>) {
      state.all = action.payload;
    },

    updateFilter<K extends keyof Filters>(
      state: State,
      action: PayloadAction<{
        key: K;
        value: Filters[K];
      }>,
    ) {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },

    applyFilters(state) {
      state.appliedFilters = JSON.parse(JSON.stringify(state.filters));
    },

    resetFilters(state) {
      state.filters = structuredClone(defaultFilters);
    },

    setViewMode(state, action: PayloadAction<"grid" | "list">) {
      state.viewMode = action.payload;
    },
  },
});

export const {
  setProperties,
  updateFilter,
  resetFilters,
  applyFilters,
  setViewMode,
} = propertySlice.actions;

export default propertySlice.reducer;
