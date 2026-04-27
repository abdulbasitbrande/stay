"use client";

import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { setProperties, updateFilter, applyFilters } from "@/store/propertySlice";
import { properties } from "@/mockdata/properties";
import { filterProperties } from "@/utils/filter";
import Filters from "./Filters";
import PropertyList from "./PropertyList";
import { AppDispatch } from "@/store";

export default function PropertyPage({ purpose }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { all, appliedFilters } = useSelector((s: any) => s.property);
  const [page, setPage] = useState(1);
  const pageSize = 6;

  // 1️⃣ Load data
  useEffect(() => {
    const data = properties.filter((p) => p.purpose === purpose);
    dispatch(setProperties(data));
  }, [purpose, dispatch]);

  // 2️⃣ URL → Redux (ON PAGE LOAD)
  useEffect(() => {
    const type = searchParams.get("type");
    const sort = searchParams.get("sort");
    const searchAll = searchParams.getAll("search");
    const searchSingle = searchParams.get("search");
    const priceMin = searchParams.get("price_min");
    const priceMax = searchParams.get("price_max");
    const bedsMin = searchParams.get("beds_min");
    const bedsMax = searchParams.get("beds_max");
    const sizeMin = searchParams.get("size_min");
    const sizeMax = searchParams.get("size_max");
    const amenities = searchParams.get("amenities");

    if (type) {
      dispatch(updateFilter({ key: "type", value: type }));
    }

    if (sort) {
      dispatch(updateFilter({ key: "sort", value: sort }));
    }

    const searches = (searchAll?.length ? searchAll : searchSingle ? [searchSingle] : [])
      .map((s: string) => s.trim())
      .filter(Boolean);

    if (searches.length) {
      dispatch(updateFilter({ key: "search", value: searches }));
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

    if (sizeMin || sizeMax) {
      dispatch(
        updateFilter({
          key: "size",
          value: {
            min: sizeMin ? Number(sizeMin) : null,
            max: sizeMax ? Number(sizeMax) : null,
          },
        }),
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

  // 3️⃣ Redux → URL (keep query string in sync with applied filters)
  useEffect(() => {
    const next = new URLSearchParams(searchParams.toString());

    // type
    if (appliedFilters.type) next.set("type", appliedFilters.type);
    else next.delete("type");

    // sort
    if (appliedFilters.sort) next.set("sort", appliedFilters.sort);
    else next.delete("sort");

    // search (multi)
    next.delete("search");
    const searches = (appliedFilters.search ?? [])
      .map((s: string) => s.trim())
      .filter(Boolean);
    for (const s of searches) next.append("search", s);

    // price
    if (appliedFilters.price?.min != null)
      next.set("price_min", String(appliedFilters.price.min));
    else next.delete("price_min");
    if (appliedFilters.price?.max != null)
      next.set("price_max", String(appliedFilters.price.max));
    else next.delete("price_max");

    // beds
    if (appliedFilters.beds?.min != null)
      next.set("beds_min", String(appliedFilters.beds.min));
    else next.delete("beds_min");
    if (appliedFilters.beds?.max != null)
      next.set("beds_max", String(appliedFilters.beds.max));
    else next.delete("beds_max");

    // size
    if (appliedFilters.size?.min != null)
      next.set("size_min", String(appliedFilters.size.min));
    else next.delete("size_min");
    if (appliedFilters.size?.max != null)
      next.set("size_max", String(appliedFilters.size.max));
    else next.delete("size_max");

    // amenities (comma-separated)
    if (appliedFilters.amenities?.length)
      next.set("amenities", appliedFilters.amenities.join(","));
    else next.delete("amenities");

    const currentStr = searchParams.toString();
    const nextStr = next.toString();
    if (nextStr !== currentStr) {
      router.replace(nextStr ? `${pathname}?${nextStr}` : pathname);
    }
  }, [appliedFilters, pathname, router, searchParams]);

  // 3️⃣ Filtering
  const filtered = useMemo(() => {
    return filterProperties(all, appliedFilters);
  }, [all, appliedFilters]);

  const sorted = useMemo(() => {
    const data = [...filtered];
    const sort = appliedFilters.sort;

    if (!sort) return data;

    const byNum =
      (get: (p: any) => number) =>
      (a: any, b: any) =>
        get(a) - get(b);

    switch (sort) {
      case "price_asc":
        return data.sort(byNum((p) => p.price ?? 0));
      case "price_desc":
        return data.sort(byNum((p) => p.price ?? 0)).reverse();
      case "beds_asc":
        return data.sort(byNum((p) => p.beds ?? 0));
      case "beds_desc":
        return data.sort(byNum((p) => p.beds ?? 0)).reverse();
      case "size_asc":
        return data.sort(byNum((p) => p.areasize ?? 0));
      case "size_desc":
        return data.sort(byNum((p) => p.areasize ?? 0)).reverse();
      case "newest":
      default:
        // mock data doesn't have createdAt; use id numeric desc as proxy
        return data.sort(byNum((p) => Number(p.id) || 0)).reverse();
    }
  }, [filtered, appliedFilters.sort]);

  // reset pagination whenever applied filters change
  useEffect(() => {
    setPage(1);
  }, [appliedFilters]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const paged = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, safePage]);

  return (
    <>
      <Filters />

      <PropertyList data={paged} />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button
            className="butn"
            disabled={safePage <= 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Prev
          </button>
          <span style={{ fontSize: 14 }}>
            Page {safePage} of {totalPages}
          </span>
          <button
            className="butn"
            disabled={safePage >= totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}