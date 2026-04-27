"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { applyFilters, updateFilter } from "@/store/propertySlice";
import { AppDispatch } from "@/store";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

export default function Filters() {
  const dispatch = useDispatch<AppDispatch>();
  const filters = useSelector((s: any) => s.property.filters);

  const [searchInput, setSearchInput] = useState("");
  const [priceOpen, setPriceOpen] = useState(false);
  const [bedsOpen, setBedsOpen] = useState(false);

  const priceRef = useRef<HTMLDivElement>(null);
  const bedsRef = useRef<HTMLDivElement>(null);

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
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

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
    <div className="filter-bar">
      {/* SEARCH */}
      <input
        className="search-input"
        placeholder="Search by title"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {/* SEARCH BUTTON */}
      <button className="search-btn" onClick={() => dispatch(applyFilters())}>
        Search
      </button>

      {/* TYPE */}
      <Select
        options={typeOptions}
        placeholder="Property Type"
        className="filter-select"
        isClearable
        onChange={(val: any) =>
          dispatch(
            updateFilter({
              key: "type",
              value: val ? val.value : null,
            }),
          )
        }
      />

      {/* PRICE */}
      <div className="filter-dropdown" ref={priceRef}>
        <button onClick={() => setPriceOpen((p) => !p)}>Price ▾</button>

        {priceOpen && (
          <div className="dropdown-menu">
            <input
              type="number"
              placeholder="Min"
              onChange={(e) =>
                dispatch(
                  updateFilter({
                    key: "price",
                    value: {
                      ...filters.price,
                      min: e.target.value ? Number(e.target.value) : null,
                    },
                  }),
                )
              }
            />
            <input
              type="number"
              placeholder="Max"
              onChange={(e) =>
                dispatch(
                  updateFilter({
                    key: "price",
                    value: {
                      ...filters.price,
                      max: e.target.value ? Number(e.target.value) : null,
                    },
                  }),
                )
              }
            />
          </div>
        )}
      </div>

      {/* BEDS */}
      <div className="filter-dropdown" ref={bedsRef}>
        <button onClick={() => setBedsOpen((b) => !b)}>Beds ▾</button>

        {bedsOpen && (
          <div className="dropdown-menu">
            <input
              type="number"
              placeholder="Min"
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
            <input
              type="number"
              placeholder="Max"
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
        )}
      </div>

      {/* SIZE */}
      <div className="size-filter">
        <label>Size</label>
        <input
          type="range"
          min="0"
          max="10000"
          onChange={(e) =>
            dispatch(
              updateFilter({
                key: "size",
                value: {
                  ...filters.size,
                  max: Number(e.target.value),
                },
              }),
            )
          }
        />
      </div>

      {/* AMENITIES */}
      <Select
        isMulti
        options={amenitiesOptions}
        placeholder="Amenities"
        className="filter-select"
        onChange={(val: any) =>
          dispatch(
            updateFilter({
              key: "amenities",
              value: val ? val.map((v: any) => v.value) : [],
            }),
          )
        }
      />
    </div>
  );
}
