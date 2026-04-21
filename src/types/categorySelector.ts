export interface CategoryOption {
  value: string;
  label: string;
}

export interface CategorySelectorProps {
  options: CategoryOption[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}