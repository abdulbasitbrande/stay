import dynamic from "next/dynamic";
import { useState } from "react";

const Select = dynamic(() => import("react-select"), {
    ssr: false,
});

type OptionType = {
    value: string;
    label: string;
};

const SortFilter = () => {
    const [purpose, setSortFilter] = useState<OptionType | null>({
        value: "latest",
        label: "latest blogs",
    });

    const sortFilterOptions: OptionType[] = [
        { value: "latest", label: "latest blogs" },
        { value: "buy", label: "For Sale" },
    ];
    return (
        <>
            <div className="sorting-wrapper text-uppercase">
                <span>Sort by:</span>
                <div className="dropdown-wrapper">
                    <Select
                        options={sortFilterOptions}
                        value={purpose}
                        onChange={(selected: any) => setSortFilter(selected)}
                        className="w-100"
                        classNamePrefix="custom-select"
                        isSearchable={false}
                    />
                </div>
            </div>
        </>
    );
}

export default SortFilter;

