export interface Option {
  value: string;
  label: string;
}

export interface FormData {
  query: string;
  location: string;
  price: string;
}

export interface DropdownProps {
  label: string;
  value: string;
  options: Option[];
  onSelect: (option: Option) => void;
  placeholder?: string;
  className?: string;
}