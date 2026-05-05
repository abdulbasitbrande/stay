"use client";

import { useMemo, useRef, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import Slider from "rc-slider";
import {
  applyFilters,
  resetFilters,
  updateFilter,
} from "@/store/propertySlice";
import { AppDispatch } from "@/store";
import {
  ChevronDown,
  Home,
  Search,
  Banknote,
  BedDouble,
  Maximize,
} from "lucide-react";

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

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (priceRef.current && !priceRef.current.contains(target))
        setPriceOpen(false);
      if (bedsRef.current && !bedsRef.current.contains(target))
        setBedsOpen(false);
      if (sizeRef.current && !sizeRef.current.contains(target))
        setSizeOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    setPriceMinText(
      filters.price?.min != null ? String(filters.price.min) : "",
    );
    setPriceMaxText(
      filters.price?.max != null ? String(filters.price.max) : "",
    );
  }, [filters.price?.min, filters.price?.max]);

  const searchOptions = useMemo(() => {
    const buildings = Array.from(
      new Set((all ?? []).map((p: any) => String(p.title ?? "").trim())),
    ).filter(Boolean);
    const locations = Array.from(
      new Set((all ?? []).map((p: any) => String(p.location ?? "").trim())),
    ).filter(Boolean);
    return [
      {
        label: "Building",
        options: buildings.map((b) => ({ value: `building:${b}`, label: b })),
      },
      {
        label: "Location",
        options: locations.map((l) => ({ value: `location:${l}`, label: l })),
      },
    ];
  }, [all]);

  const sizeMin = filters.size?.min ?? 0;
  const sizeMax = filters.size?.max ?? 10000;

  const parsePrice = (raw: string) => {
    const cleaned = raw.replaceAll(",", "").replaceAll(" ", "").trim();
    if (!cleaned) return null;
    const n = Number(cleaned);
    return Number.isFinite(n) ? n : null;
  };

  const typeOptions = useMemo(() => {
    const types = Array.from(
      new Set((all ?? []).map((p: any) => p.type).filter(Boolean)),
    );
    return types.map((t) => ({
      value: t as string,
      label: (t as string).charAt(0).toUpperCase() + (t as string).slice(1),
    }));
  }, [all]);

  const amenitiesOptions = useMemo(() => {
    const allAmenities = new Set<string>();

    (all ?? []).forEach((p: any) => {
      if (Array.isArray(p.amenities)) {
        p.amenities.forEach((a: { title: string }) => {
          if (a?.title) {
            allAmenities.add(a.title);
          }
        });
      }
    });

    return Array.from(allAmenities).map((title) => {
      const label = title
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      return {
        value: title,
        label,
      };
    });
  }, [all]);

  return (
    <div className="filtersSection">
      <div className="filtersContainer container">
        <div className="filtersBar">
          {/* SEARCH */}
          <div className="filterGroup filterGroupGrow">
            <div className="icon">
              <Search size={16} />
            </div>
            <div className="selectContainer searchContainer">
              <Select
                isMulti
                classNamePrefix="react-select"
                options={searchTypeahead.length >= 3 ? searchOptions : []}
                placeholder="Search by location or building"
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

          <div className="divider" />

          {/* TYPE */}
          <div className="filterGroup">
            <div className="icon">
              <Home size={16} />
            </div>
            <div className="selectContainer" style={{ minWidth: 140 }}>
              <Select
                classNamePrefix="react-select"
                options={typeOptions}
                placeholder="Property Type"
                isClearable
                value={
                  filters.type
                    ? (typeOptions.find((o) => o.value === filters.type) ??
                      null)
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
          </div>

          <div className="divider" />

          {/* PRICE */}
          <div className="filterGroup" ref={priceRef}>
            <button
              type="button"
              className="dropdownTrigger"
              onClick={() => setPriceOpen((p) => !p)}
            >
              <span className="icon">
                <Banknote size={16} />
              </span>
              <span>Price</span>
              <ChevronDown size={14} color="#94a3b8" />
            </button>

            {priceOpen && (
              <div className="dropdownMenu">
                <div className="inputRow">
                  <div className="input-wrap">
                    <label htmlFor="priceMin" className="mb-2">From</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="0"
                      value={priceMinText}
                      onChange={(e) => {
                        const raw = e.target.value;
                        setPriceMinText(raw);
                        dispatch(
                          updateFilter({
                            key: "price",
                            value: { ...filters.price, min: parsePrice(raw) },
                          }),
                        );
                      }}
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="priceMax" className="mb-2">Upto</label>
                    <input
                      type="number"
                      inputMode="numeric"
                      placeholder="any"
                      value={priceMaxText}
                      onChange={(e) => {
                        const raw = e.target.value;
                        setPriceMaxText(raw);
                        dispatch(
                          updateFilter({
                            key: "price",
                            value: { ...filters.price, max: parsePrice(raw) },
                          }),
                        );
                      }}
                    />
                  </div>

                </div>
              </div>
            )}
          </div>

          <div className="divider" />

          {/* BEDS */}
          <div className="filterGroup" ref={bedsRef}>
            <button
              type="button"
              className="dropdownTrigger"
              onClick={() => setBedsOpen((b) => !b)}
            >
              <span className="icon">
                <BedDouble size={16} />
              </span>
              <span>Beds</span>
              <ChevronDown size={14} color="#94a3b8" />
            </button>

            {bedsOpen && (
              <div className="dropdownMenu">
                <div className="inputRow">
                  <div className="input-wrap">
                    <label htmlFor="minBeds">From</label>
                    <input
                      type="number"
                      placeholder="0"
                      value={filters.beds.min ?? ""}
                      onChange={(e) =>
                        dispatch(
                          updateFilter({
                            key: "beds",
                            value: {
                              ...filters.beds,
                              min: e.target.value ? Number(e.target.value) : null,
                            },
                          }),
                        )
                      }
                    />
                  </div>
                  <div className="input-wrap">
                    <label htmlFor="maxBeds">Max Beds</label>
                    <input
                      type="number"
                      placeholder="any"
                      value={filters.beds.max ?? ""}
                      onChange={(e) =>
                        dispatch(
                          updateFilter({
                            key: "beds",
                            value: {
                              ...filters.beds,
                              max: e.target.value ? Number(e.target.value) : null,
                            },
                          }),
                        )
                      }
                    />
                  </div>

                </div>
              </div>
            )}
          </div>

          <div className="divider" />

          {/* SIZE */}
          <div className="filterGroup" ref={sizeRef}>
            <button
              type="button"
              className="dropdownTrigger"
              onClick={() => setSizeOpen((s) => !s)}
            >
              <span className="icon">
                <Maximize size={16} />
              </span>
              <span>Size</span>
              <ChevronDown size={14} color="#94a3b8" />
            </button>

            {sizeOpen && (
              <div className="dropdownMenu">
                <div className="sliderContainer">
                  <div className="sliderMeta">
                    <span>Min: {sizeMin} sqft</span>
                    <span>Max: {sizeMax} sqft</span>
                  </div>
                  <Slider
                    range
                    min={0}
                    max={10000}
                    allowCross={false}
                    value={[sizeMin, sizeMax]}
                    onChange={(value: number | number[]) => {
                      const [min, max] = Array.isArray(value)
                        ? value
                        : [0, value];
                      dispatch(
                        updateFilter({ key: "size", value: { min, max } }),
                      );
                    }}
                  />
                </div>
              </div>
            )}
          </div>



          {/* ACTIONS */}
          <div className="actions">
            <button
              type="button"
              className="btn btnGhost"
              onClick={() => setAdvancedOpen((v) => !v)}
            >
              FILTERS
            </button>
            <button
              type="button"
              className="btn btnPrimary"
              onClick={() => dispatch(applyFilters())}
            >
              SEARCH
            </button>
          </div>
        </div>

        <div className={`advancedFilters ${advancedOpen ? "open" : ""}`}>
          <div className="advancedFiltersContent">
            <div className="advancedItem">
              <div className="advancedLabel">Amenities</div>
              <div className="checkboxList">
                {amenitiesOptions.map((opt) => {
                  const isChecked = (filters.amenities ?? []).includes(
                    opt.value,
                  );
                  return (
                    <label key={opt.value} className="checkboxLabel">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          const current = filters.amenities ?? [];
                          const next = e.target.checked
                            ? [...current, opt.value]
                            : current.filter((v: string) => v !== opt.value);
                          dispatch(
                            updateFilter({ key: "amenities", value: next }),
                          );
                        }}
                      />
                      {opt.label}
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="advancedActions">
              <span style={{ fontSize: 13, color: "#64748b" }}>
                Active Filters:{" "}
                {(filters.search?.length ?? 0) +
                  (filters.type ? 1 : 0) +
                  (filters.price?.min != null ? 1 : 0) +
                  (filters.price?.max != null ? 1 : 0) +
                  (filters.beds?.min != null ? 1 : 0) +
                  (filters.beds?.max != null ? 1 : 0) +
                  (filters.size?.min != null ? 1 : 0) +
                  (filters.size?.max != null ? 1 : 0) +
                  (filters.amenities?.length ?? 0) +
                  (filters.offplan ? 1 : 0)}
              </span>
              <button
                type="button"
                className="btn btnGhost"
                onClick={() => {
                  const currentPurpose = filters.purpose;
                  dispatch(resetFilters());
                  if (currentPurpose) {
                    dispatch(
                      updateFilter({ key: "purpose", value: currentPurpose }),
                    );
                  }
                  dispatch(applyFilters());
                  setSearchTypeahead("");
                  setPriceOpen(false);
                  setBedsOpen(false);
                  setSizeOpen(false);
                }}
              >
                CLEAR FILTERS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
