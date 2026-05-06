"use client";

import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import {
  setProperties,
  updateFilter,
  applyFilters,
} from "@/store/propertySlice";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { properties } from "@/mockdata/properties";
import { filterProperties } from "@/utils/filter";
import Filters from "./Filters";
import PropertyList from "./PropertyList";
import { AppDispatch } from "@/store";
import { LayoutGrid, Link, List } from "lucide-react";
import MortgageCalculatorForm from "../MortgageCalculatorForm";
import Stay from "../Stay";
import SectionHeading from "../SectionHeading";
import BrandsCard from "../Brands";
import { brands } from "@/mockdata/brands";
import FormCtaWithImage from "../sections/FormCtaWithImage";
import { Property } from "@/types/property";

export default function PropertyPage({ purpose }: any) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const { all, appliedFilters, viewMode } = useSelector((s: any) => s.property);
  const [page, setPage] = useState(1);
  const [isFiltering, setIsFiltering] = useState(true);
  const pageSize = 6;

  // 1️⃣ Load data
  useEffect(() => {
    const data: Property[] = properties
      .filter((p) => p.projectData.projectCard.purpose === purpose)
      .map((p) => {
        const card = p.projectData.projectCard;

        return {
          id: card.id,
          slug: card.slug,
          purpose: card.purpose,
          type: card.type,
          price: card.price,
          title: card.title,
          description: card.description,
          image: card.image,
          location: card.location,
          beds: card.beds,
          areasize: card.areasize,
          amenities: card.amenities,
          tags: card.tags,
          offplan: card.offplan,
        };
      });

    dispatch(setProperties(data));
    dispatch(updateFilter({ key: "purpose", value: purpose }));
    dispatch(applyFilters());
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
    const offplan = searchParams.get("offplan") === "true";

    if (type) {
      dispatch(updateFilter({ key: "type", value: type }));
    }

    if (sort) {
      dispatch(updateFilter({ key: "sort", value: sort }));
    }

    const searches = (
      searchAll?.length ? searchAll : searchSingle ? [searchSingle] : []
    )
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
        }),
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
        }),
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
        }),
      );
    }

    if (offplan) {
      dispatch(updateFilter({ key: "offplan", value: true }));
    }

    setIsFiltering(true);

    // apply filters from URL
    const timer = setTimeout(() => {
      dispatch(applyFilters());
      setIsFiltering(false);
    }, 300);

    return () => clearTimeout(timer);
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

    // offplan
    if (appliedFilters.offplan) next.set("offplan", "true");
    else next.delete("offplan");

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

    const byNum = (get: (p: any) => number) => (a: any, b: any) =>
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
    // setIsFiltering(true);
    // const timer = setTimeout(() => setIsFiltering(false), 300);
    // return () => clearTimeout(timer);
  }, [appliedFilters]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
  const safePage = Math.min(page, totalPages);
  const paged = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return sorted.slice(start, start + pageSize);
  }, [sorted, safePage]);

  useEffect(() => {
    if (!isFiltering) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [isFiltering, paged]);

  return (
    <div className="propertyPage">
      <Filters />

      <div className="property-header container mt-5 mb-4">
        <div className="property-header-inner d-flex flex-column flex-md-row justify-content-between align-items-md-center">
          <div>
            <h4 className="property-title fw-bold mb-1 text-uppercase">
              Properties For {purpose === "buy" ? "Sale" : "Rent"} In Dubai
            </h4>
            <p className="property-count mb-0 fw-semibold">
              {sorted.length.toLocaleString()} LISTINGS
            </p>
          </div>

          <div className="property-actions d-flex align-items-center gap-3 mt-3 mt-md-0">
            {/* Offplan Toggle */}
            {purpose === "buy" && (
              <>
                <div className="off-toggle">
                  <button
                    type="button"
                    className={`btn toggle-btn ${appliedFilters.offplan ? "active" : ""}`}
                    onClick={() => {
                      dispatch(
                        updateFilter({
                          key: "offplan",
                          value: !appliedFilters.offplan,
                        }),
                      );
                      dispatch(applyFilters());
                    }}
                  >
                    OFFPLAN
                  </button>
                </div>
                <div className="action-divider" />
              </>
            )}

            {/* View Toggle */}
            <div className="view-toggle d-flex gap-2">
              <button
                className={`btn toggle-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() =>
                  dispatch({ type: "property/setViewMode", payload: "list" })
                }
              >
                <List size={16} /> LIST
              </button>

              <button
                className={`btn toggle-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() =>
                  dispatch({ type: "property/setViewMode", payload: "grid" })
                }
              >
                <LayoutGrid size={16} /> GRID
              </button>
            </div>

            <div className="action-divider" />

            {/* Sort Dropdown */}
            <div className="sort-box d-flex align-items-center gap-2">
              <span className="sort-label">SORT BY:</span>
              <select
                className="form-select sort-select"
                value={appliedFilters.sort || "newest"}
                onChange={(e) => {
                  dispatch(
                    updateFilter({ key: "sort", value: e.target.value }),
                  );
                  dispatch(applyFilters());
                }}
              >
                <option value="newest">LATEST PROPERTIES</option>
                <option value="price_desc">PRICE: HIGH TO LOW</option>
                <option value="price_asc">PRICE: LOW TO HIGH</option>
                <option value="beds_desc">BEDS: HIGH TO LOW</option>
                <option value="beds_asc">BEDS: LOW TO HIGH</option>
                <option value="size_desc">SIZE: HIGH TO LOW</option>
                <option value="size_asc">SIZE: LOW TO HIGH</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {isFiltering ? (
        <div className="container project-section mb-4">
          <div className="row">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className={`mt-4 ${viewMode === "grid" ? "col-12 col-md-6 col-lg-4" : "col-12"}`}
              >
                <div
                  style={{
                    height: viewMode === "grid" ? "400px" : "220px",
                    backgroundColor: "#e2e8f0",
                    borderRadius: "12px",
                    animation: "pulse 1.5s infinite ease-in-out",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <PropertyList data={paged} />
      )}

      <div className="cusPagination">
        <div className="pagination-wrapper">
          <div className="pagination-inner">
            <button
              className="pagination-btn"
              disabled={safePage <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Prev
            </button>

            <span className="pagination-text">
              Page {safePage} of {totalPages}
            </span>

            <button
              className="pagination-btn"
              disabled={safePage >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      <section className="mortgage-calculator overflow-hidden position-relative">
        <div className="sec-wrapper mortgage-calculator-wrapper">
          <Stay />
          <div className="container position-relative">
            <div className="row vh-100 align-items-center">
              <div className="col-lg-6">
                <SectionHeading
                  className="mb-4"
                  text="Calculate your mortgage and plan your investment with confidence."
                  deps={viewMode}
                />

                <MortgageCalculatorForm variant={2} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brands-section sec-padding">
        <div className="sec-wrapper brands-section-wrapper">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 text-center">
                <SectionHeading
                  text="Discover high-performing Dubai locations, selected through data-driven intelligence."
                  deps={viewMode}
                />
              </div>
            </div>
            <div className="pt-5">
              <div className="brands-logo-wrapper">
                {brands.map((item) => (
                  <BrandsCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormCtaWithImage
        formImage="assets/images/buycta.jpg"
        formTitle="Start Your Real Estate Journey With Us!"
      />
    </div>
  );
}
