import { CategorySelectorProps } from "@/types/categorySelector";
import { useState } from "react";

const CategorySelector = ({
  options,
  defaultValue,
  onChange,
}: CategorySelectorProps) => {
  const [selected, setSelected] = useState<string>(
    defaultValue || options[0]?.value,
  );

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="d-flex gap-2 justify-content-end">
      {options.map((option) => (
        <label
          key={option.value}
          className={`category-btn ${
            selected === option.value ? "active" : ""
          }`}
        >
          <input
            type="radio"
            name="category"
            value={option.value}
            checked={selected === option.value}
            onChange={() => handleChange(option.value)}
            hidden
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

export default CategorySelector;
