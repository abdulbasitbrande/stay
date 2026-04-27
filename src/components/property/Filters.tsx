"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import Slider from "rc-slider";
import { applyFilters, resetFilters, updateFilter } from "@/store/propertySlice";
import { AppDispatch } from "@/store";
import { ChevronDown, MapPin, Home, BedDouble, Ruler, Search } from "lucide-react";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

export default function Filters() {
  const dispatch = useDispatch<AppDispatch>();
  const { filters, all } = useSelector((s: any) => s.property);

  const [searchTypeahead, setSearchTypeahead] = useState("");
  const [advancedOpen, setAdvancedOpen] = useState(false);
  const [priceOpen, setPriceOpen] = useState(false);
  const [bedsOpen, setBedsOpen] = useState(false);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [priceMinText, setPriceMinText] = useState("");
  const [priceMaxText, setPriceMaxText] = useState("");

  const priceRef = useRef<HTMLDivElement>(null);
  const bedsRef = useRef<HTMLDivElement>(null);
  const sizeRef = useRef<HTMLDivElement>(null);

  // close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;

      if (priceRef.current && !priceRef.current.contains(target)) {
        setPriceOpen(false);
      }

      if (bedsRef.current && !bedsRef.current.contains(target)) {
        setBedsOpen(false);
      }

      if (sizeRef.current && !sizeRef.current.contains(target)) {
        setSizeOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // keep UI inputs in sync when filters are set from URL/reset
  useEffect(() => {
    setPriceMinText(filters.price?.min != null ? String(filters.price.min) : "");
    setPriceMaxText(filters.price?.max != null ? String(filters.price.max) : "");
  }, [filters.price?.min, filters.price?.max]);

  const searchOptions = useMemo(() => {
    const buildings = Array.from(
      new Set((all ?? []).map((p: any) => String(p.title ?? "").trim())),
    ).filter(Boolean);

    const locations = Array.from(
      new Set((all ?? []).map((p: any) => String(p.location ?? "").trim())),
    ).filter(Boolean);

    const buildingOptions = buildings.map((b) => ({
      value: `building:${b}`,
      label: b,
    }));

    const locationOptions = locations.map((l) => ({
      value: `location:${l}`,
      label: l,
    }));

    return [
      { label: "Building", options: buildingOptions },
      { label: "Location", options: locationOptions },
    ];
  }, [all]);

  const selectedCount = useMemo(() => {
    let count = 0;
    count += (filters.search?.length ?? 0);
    if (filters.type) count += 1;
    if (filters.sort) count += 1;
    if (filters.price?.min != null) count += 1;
    if (filters.price?.max != null) count += 1;
    if (filters.beds?.min != null) count += 1;
    if (filters.beds?.max != null) count += 1;
    if (filters.size?.min != null) count += 1;
    if (filters.size?.max != null) count += 1;
    count += (filters.amenities?.length ?? 0);
    return count;
  }, [filters]);

  const sizeMin = filters.size?.min ?? 0;
  const sizeMax = filters.size?.max ?? 10000;

  const parsePrice = (raw: string) => {
    const cleaned = raw.replaceAll(",", "").replaceAll(" ", "").trim();
    if (!cleaned) return null;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  };

  const typeOptions = [
    { value: "villa", label: "Villa" },
    { value: "apartment", label: "Apartment" },
    { value: "penthouse", label: "Penthouse" },
  ];

  const amenitiesOptions = [
    { value: "pool", label: "Pool" },
    { value: "gym", label: "Gym" },
    { value: "garden", label: "Garden" },
  ];

  return (
    <div className="pill-filters">
      <div className="pill-filter-bar">
        {/* SEARCH (grouped multi select with typeahead) */}
        <div className="pill-seg pill-seg--grow">
          <div className="pill-icon">
            <Search size={16} />
          </div>
          <div className="pill-control pill-control--grow">
            <Select
              isMulti
              options={searchTypeahead.length >= 3 ? searchOptions : []}
              placeholder="Search by location or building"
              className="pill-select"
              classNamePrefix="pill-select"
              onInputChange={(val: string) => setSearchTypeahead(val)}
              noOptionsMessage={() =>
                searchTypeahead.length < 3
                  ? "Type at least 3 letters"
                  : "No matches"
              }
              value={(filters.search ?? []).map((s: string) => ({
                value: s,
                label: s.startsWith("building:")
                  ? s.replace("building:", "")
                  : s.startsWith("location:")
                    ? s.replace("location:", "")
                    : s,
              }))}
              onChange={(val: any) =>
                dispatch(
                  updateFilter({
                    key: "search",
                    value: val ? val.map((v: any) => v.value) : [],
                  }),
                )
              }
            />
          </div>
        </div>

        <div className="pill-divider" />

        {/* TYPE */}
        <div className="pill-seg">
          <div className="pill-icon">
            <Home size={16} />
          </div>
          <div className="pill-control">
            <Select
              options={typeOptions}
              placeholder="Property Type"
              className="pill-select"
              classNamePrefix="pill-select"
              isClearable
              value={
                filters.type
                  ? typeOptions.find((o) => o.value === filters.type) ?? null
                  : null
              }
              onChange={(val: any) => {
                dispatch(
                  updateFilter({
                    key: "type",
                    value: val ? val.value : null,
                  }),
                );
              }}
            />
          </div>
          <ChevronDown size={14} className="pill-caret" />
        </div>

        <div className="pill-divider" />

        {/* PRICE */}
        <div className="pill-seg pill-dropdown" ref={priceRef}>
          <button
            type="button"
            className="pill-trigger"
            onClick={() => setPriceOpen((p) => !p)}
          >
            <span className="pill-icon">
              <span style={{ fontSize: 12, fontWeight: 600 }}>د.إ</span>
            </span>
            <span className="pill-trigger-label">Price</span>
            <ChevronDown size={14} className="pill-caret" />
          </button>

          {priceOpen && (
            <div className="pill-menu">
              <div className="pill-menu-row">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Min"
                  value={priceMinText}
                  onChange={(e) => {
                    const raw = e.target.value;
                    setPriceMinText(raw);
                    const parsed = parsePrice(raw);
                    dispatch(
                      updateFilter({
                        key: "price",
                        value: { ...filters.price, min: parsed },
                      }),
                    );
                  }}
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Max"
                  value={priceMaxText}
                  onChange={(e) => {
                    const raw = e.target.value;
                    setPriceMaxText(raw);
                    const parsed = parsePrice(raw);
                    dispatch(
                      updateFilter({
                        key: "price",
                        value: { ...filters.price, max: parsed },
                      }),
                    );
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="pill-divider" />

        {/* BEDS */}
        <div className="pill-seg pill-dropdown" ref={bedsRef}>
          <button
            type="button"
            className="pill-trigger"
            onClick={() => setBedsOpen((b) => !b)}
          >
            <span className="pill-icon">
              <BedDouble size={16} />
            </span>
            <span className="pill-trigger-label">Beds</span>
            <ChevronDown size={14} className="pill-caret" />
          </button>

          {bedsOpen && (
            <div className="pill-menu">
              <div className="pill-menu-row">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.beds.min ?? ""}
                  onChange={(e) => {
                    dispatch(
                      updateFilter({
                        key: "beds",
                        value: {
                          ...filters.beds,
                          min: e.target.value ? Number(e.target.value) : null,
                        },
                      }),
                    );
                  }}
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.beds.max ?? ""}
                  onChange={(e) => {
                    dispatch(
                      updateFilter({
                        key: "beds",
                        value: {
                          ...filters.beds,
                          max: e.target.value ? Number(e.target.value) : null,
                        },
                      }),
                    );
                  }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="pill-divider" />

        {/* SIZE */}
        <div className="pill-seg pill-dropdown" ref={sizeRef}>
          <button
            type="button"
            className="pill-trigger"
            onClick={() => setSizeOpen((s) => !s)}
          >
            <span className="pill-icon">
              <Ruler size={16} />
            </span>
            <span className="pill-trigger-label">Size</span>
            <ChevronDown size={14} className="pill-caret" />
          </button>

          {sizeOpen && (
            <div className="pill-menu">
              <div className="pill-menu-col">
                <div className="pill-menu-meta">
                  <span>Min: {sizeMin}</span>
                  <span>Max: {sizeMax}</span>
                </div>
                <Slider
                  range
                  min={0}
                  max={10000}
                  allowCross={false}
                  value={[sizeMin, sizeMax]}
                  onChange={(value: number | number[]) => {
                    const vals = Array.isArray(value) ? value : [0, value];
                    const [min, max] = vals as number[];
                    dispatch(
                      updateFilter({
                        key: "size",
                        value: { min, max },
                      }),
                    );
                  }}
                />
              </div>
            </div>
          )}
        </div>

        {/* RIGHT BUTTONS */}
        <div className="pill-actions">
          <button
            type="button"
            className="pill-btn pill-btn--ghost"
            onClick={() => setAdvancedOpen((v) => !v)}
          >
            FILTERS
          </button>
          <button
            type="button"
            className="pill-btn pill-btn--primary"
            onClick={() => dispatch(applyFilters())}
          >
            SEARCH
          </button>
        </div>
      </div>

      {advancedOpen && (
        <div className="pill-advanced">
          <div className="pill-advanced-row">
            <div className="pill-advanced-item">
              <div className="pill-advanced-label">
                <MapPin size={14} /> Amenities
              </div>
              <Select
                isMulti
                options={amenitiesOptions}
                placeholder="Select amenities"
                className="pill-select"
                classNamePrefix="pill-select"
                value={amenitiesOptions.filter((o) =>
                  (filters.amenities ?? []).includes(o.value),
                )}
                onChange={(val: any) => {
                  dispatch(
                    updateFilter({
                      key: "amenities",
                      value: val ? val.map((v: any) => v.value) : [],
                    }),
                  );
                }}
              />
            </div>

            <div className="pill-advanced-item">
              <div className="pill-advanced-label">Sort</div>
              <Select
                options={[
                  { value: "newest", label: "Newest" },
                  { value: "price_desc", label: "Price: High to Low" },
                  { value: "price_asc", label: "Price: Low to High" },
                  { value: "beds_desc", label: "Beds: High to Low" },
                  { value: "beds_asc", label: "Beds: Low to High" },
                  { value: "size_desc", label: "Size: High to Low" },
                  { value: "size_asc", label: "Size: Low to High" },
                ]}
                placeholder="Sort"
                className="pill-select"
                classNamePrefix="pill-select"
                isClearable
                value={
                  filters.sort
                    ? {
                        value: filters.sort,
                        label:
                          filters.sort === "newest"
                            ? "Newest"
                            : filters.sort === "price_desc"
                              ? "Price: High to Low"
                              : filters.sort === "price_asc"
                                ? "Price: Low to High"
                                : filters.sort === "beds_desc"
                                  ? "Beds: High to Low"
                                  : filters.sort === "beds_asc"
                                    ? "Beds: Low to High"
                                    : filters.sort === "size_desc"
                                      ? "Size: High to Low"
                                      : filters.sort === "size_asc"
                                        ? "Size: Low to High"
                                        : "Sort",
                      }
                    : null
                }
                onChange={(val: any) => {
                  dispatch(
                    updateFilter({
                      key: "sort",
                      value: val ? val.value : null,
                    }),
                  );
                }}
              />
            </div>

            <div className="pill-advanced-actions">
              <div className="pill-selected">Selected: {selectedCount}</div>
              <button
                type="button"
                className="pill-btn pill-btn--ghost"
                onClick={() => {
                  dispatch(resetFilters());
                  dispatch(applyFilters());
                  setSearchTypeahead("");
                  setPriceOpen(false);
                  setBedsOpen(false);
                  setSizeOpen(false);
                }}
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
