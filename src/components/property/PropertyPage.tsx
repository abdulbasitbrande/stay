"use client";

import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";
import { setProperties, updateFilter, applyFilters } from "@/store/propertySlice";
import { properties } from "@/mockdata/properties";
import { filterProperties } from "@/utils/filter";
import Filters from "./Filters";
import PropertyList from "./PropertyList";
import { AppDispatch } from "@/store";

export default function PropertyPage({ purpose }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { all, appliedFilters } = useSelector((s: any) => s.property);

  // 1️⃣ Load data
  useEffect(() => {
    const data = properties.filter((p) => p.purpose === purpose);
    dispatch(setProperties(data));
  }, [purpose, dispatch]);

  // 2️⃣ URL → Redux (ON PAGE LOAD)
  useEffect(() => {
    const type = searchParams.get("type");
    const search = searchParams.get("search");
    const priceMin = searchParams.get("price_min");
    const priceMax = searchParams.get("price_max");
    const bedsMin = searchParams.get("beds_min");
    const bedsMax = searchParams.get("beds_max");
    const amenities = searchParams.get("amenities");

    if (type) {
      dispatch(updateFilter({ key: "type", value: type }));
    }

    if (search) {
      dispatch(updateFilter({ key: "search", value: [search] }));
    }

    if (priceMin || priceMax) {
      dispatch(
        updateFilter({
          key: "price",
          value: {
            min: priceMin ? Number(priceMin) : null,
            max: priceMax ? Number(priceMax) : null,
          },
        })
      );
    }

    if (bedsMin || bedsMax) {
      dispatch(
        updateFilter({
          key: "beds",
          value: {
            min: bedsMin ? Number(bedsMin) : null,
            max: bedsMax ? Number(bedsMax) : null,
          },
        })
      );
    }

    if (amenities) {
      dispatch(
        updateFilter({
          key: "amenities",
          value: amenities.split(","),
        })
      );
    }

    // apply filters from URL
    dispatch(applyFilters());
  }, [searchParams, dispatch]);

  // 3️⃣ Filtering
  const filtered = useMemo(() => {
    return filterProperties(all, appliedFilters);
  }, [all, appliedFilters]);

  return (
    <>
      <Filters />

      <PropertyList data={filtered} />
    </>
  );
}