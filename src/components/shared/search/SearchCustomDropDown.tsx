import { useRef, useState } from "react";
import { useKeyboardNavigation } from "../../../hooks/useNavigate";
import { useClickOutside } from "../../../hooks/useSearchClick";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { DropdownProps } from "../../../types/search";

export const CustomDropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onSelect,
  placeholder = "Select",
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  useClickOutside(dropdownRef, () => setIsOpen(false));
  
  const highlightedIndex = useKeyboardNavigation(
    isOpen,
    options,
    (option) => {
      onSelect(option);
      setIsOpen(false);
    },
    () => setIsOpen(false)
  );

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left focus:outline-none"
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center justify-between cursor-pointer">
          <div className="flex-1">
            <span className="text-gray-800 text-[15px] xl:text-xl font-medium block mb-1">
              {label}
            </span>
            <span className="text-[13px] xl:text-[15px] text-gray-400 block">
              {selectedOption ? selectedOption.label : placeholder}
            </span>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="ml-2"
          >
            <ChevronDown className="w-5 h-5 xl:w-6 xl:h-6 text-gray-600" />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-200 z-50 overflow-hidden"
          >
            {options.map((option, index) => (
              <motion.button
                key={option.value}
                type="button"
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 text-base xl:text-lg ${
                  highlightedIndex === index ? 'bg-gray-50' : ''
                } ${selectedOption?.value === option.value ? 'bg-blue-50 text-blue-700' : 'text-gray-700'}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};