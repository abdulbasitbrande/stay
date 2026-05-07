import { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Search, Home, Building2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateFilter, applyFilters, setProperties } from "@/store/propertySlice";
import { properties as mockProperties } from "@/mockdata/properties";
import { Property } from "@/types/property";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

type OptionType = {
  value: string;
  label: string;
};

const SearchBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { all, filters } = useSelector((s: any) => s.property);

  const [searchVal, setSearchVal] = useState<any>(null);

  // Load all properties for typeahead if not already loaded
  useEffect(() => {
    if (!all || all.length === 0) {
      const data: Property[] = mockProperties.map((p) => {
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
    }
  }, [all, dispatch]);

  const purposeOptions: OptionType[] = [
    { value: "rent", label: "For Rent" },
    { value: "buy", label: "For Sale" },
  ];

  const propertyOptions = useMemo(() => {
    const types = Array.from(new Set((all ?? []).map((p: any) => p.type).filter(Boolean)));
    return types.map((t) => ({
      value: t as string,
      label: (t as string).charAt(0).toUpperCase() + (t as string).slice(1),
    }));
  }, [all]);

  const [searchTypeahead, setSearchTypeahead] = useState("");

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

  const handlePurposeChange = (selected: any) => {
    dispatch(updateFilter({ key: "purpose", value: selected ? selected.value : null }));
  };

  const handleTypeChange = (selected: any) => {
    dispatch(updateFilter({ key: "type", value: selected ? selected.value : null }));
  };

  const handleSearchChange = (selected: any) => {
    setSearchVal(selected);
    dispatch(updateFilter({ 
      key: "search", 
      value: selected ? (Array.isArray(selected) ? selected.map((s: any) => s.value) : [selected.value]) : [] 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(applyFilters());

    const params = new URLSearchParams();
    if (filters.type) params.set("type", filters.type);
    if (filters.search?.length) {
      filters.search.forEach((s: string) => params.append("search", s));
    }
    if (filters.offplan) params.set("offplan", "true");

    const targetPurpose = filters.purpose || "buy";
    const queryString = params.toString();
    router.push(`/${targetPurpose}${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <form className="search-bar-wrapper" onSubmit={handleSubmit}>
      <svg
        width="100%"
        height="100%"
        id="formshape"
        viewBox="0 0 1048 67"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.3074 0.5H1035.44C1041.79 0.5 1046.94 5.64873 1046.94 12V55C1046.94 61.3513 1041.79 66.5 1035.44 66.5H12.0242C1.69721 66.5 -3.39593 53.9443 4.01245 46.75L48.2966 3.75C50.4427 1.66614 53.3161 0.500083 56.3074 0.5Z"
          fill="transparent"
          stroke="black"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1103"
        height="117"
        id="formshapebg"
        preserveAspectRatio="none"
        viewBox="0 0 1103 117"
      >
        <path
          d="M1102.79 116.934H0C8.52545 116.934 16.7203 113.634 22.8672 107.727L91.04 42.207C97.1868 36.2994 105.382 33 113.907 33H1069.79C1088.01 33 1102.79 18.2253 1102.79 0V116.934Z"
          fill="white"
        />
      </svg>

      <div className="row g-0 align-items-center h-100 px-3">
        <div className="col-md-3 border-end d-flex align-items-center px-3">
          <Home size={18} className="me-2 text-secondary" />

          <Select
            options={purposeOptions}
            value={purposeOptions.find((o) => o.value === filters.purpose) || purposeOptions[0]}
            onChange={handlePurposeChange}
            className="w-100"
            classNamePrefix="custom-select"
            isSearchable={false}
          />
        </div>

        <div className="col-md-3 border-end d-flex align-items-center px-3">
          <Building2 size={18} className="me-2 text-secondary" />

          <Select
            options={propertyOptions}
            value={propertyOptions.find((o) => o.value === filters.type) || null}
            onChange={handleTypeChange}
            placeholder="Property Type"
            className="w-100"
            classNamePrefix="custom-select"
            isClearable
          />
        </div>
        <div className="col d-flex align-items-center px-3 searchbar-wrap">
          <Search size={18} className="text-secondary me-2" />
          <Select
            isMulti
            className="w-100"
            classNamePrefix="custom-select"
            options={searchTypeahead.length >= 3 ? searchOptions : []}
            placeholder="Search by location or building"
            value={searchVal}
            onChange={handleSearchChange}
            onInputChange={(val: string) => setSearchTypeahead(val)}
            noOptionsMessage={() =>
              searchTypeahead.length < 3
                ? "Type at least 3 letters"
                : "No results found"
            }
            isClearable
          />
        </div>

        <div className="col-auto p-1">
          <button type="submit" className="butn butn-primary-filled ">
            Search
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
