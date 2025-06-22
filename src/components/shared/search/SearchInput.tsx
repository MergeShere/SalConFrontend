import { motion } from "framer-motion";

export const SearchInput: React.FC<{
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
}> = ({ value, onChange, placeholder, className = "" }) => (
  <motion.input
    whileFocus={{ scale: 1.02 }}
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    className={`outline-none text-gray-700  placeholder-gray-400 ${className}`}
  />
);


export const SearchButton: React.FC<{
  onClick: () => void;
  isLoading: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({ onClick, isLoading, className = "", children }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    animate={isLoading ? { scale: [1, 1.02, 1] } : { scale: 1 }}
    transition={isLoading ? { duration: 1, repeat: Infinity } : { duration: 0.2 }}
    onClick={onClick}
    disabled={isLoading}
    className={`bg-[#212121] hover:bg-gray-800 disabled:bg-gray-400 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl ${className}`}
  >
    {children}
  </motion.button>
);
