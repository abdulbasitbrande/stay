"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Search, Home, Building2 } from "lucide-react";

const Select = dynamic(() => import("react-select"), {
  ssr: false,
});

type OptionType = {
  value: string;
  label: string;
};

const SearchBar = () => {
  const [purpose, setPurpose] = useState<OptionType | null>({
    value: "rent",
    label: "For Rent",
  });

  const [propertyType, setPropertyType] = useState<OptionType | null>(null);

  const purposeOptions: OptionType[] = [
    { value: "rent", label: "For Rent" },
    { value: "buy", label: "For Sale" },
  ];

  const propertyOptions: OptionType[] = [
    { value: "apartment", label: "Apartment" },
    { value: "villa", label: "Villa" },
    { value: "office", label: "Office" },
  ];

  return (
    <form className="search-bar-wrapper">
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
            value={purpose}
            onChange={(selected: any) => setPurpose(selected)}
            className="w-100"
            classNamePrefix="custom-select"
            isSearchable={false}
          />
        </div>

        <div className="col-md-3 border-end d-flex align-items-center px-3">
          <Building2 size={18} className="me-2 text-secondary" />

          <Select
            options={propertyOptions}
            value={propertyType}
            onChange={(selected: any) => setPropertyType(selected)}
            placeholder="Property Type"
            className="w-100"
            classNamePrefix="custom-select"
          />
        </div>

        <div className="col d-flex align-items-center px-3">
          <Search size={18} className="text-secondary me-2" />
          <input
            type="text"
            className="form-control border-0 shadow-none small"
            placeholder="Search by location or building"
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
