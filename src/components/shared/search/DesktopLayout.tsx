import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { SearchButton, SearchInput } from "./SearchInput";
import { CustomDropdown } from "./SearchCustomDropDown";
import {Option, FormData} from '../../../types/search'

export const DesktopLayout: React.FC<{
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  locationOptions: Option[];
  priceOptions: Option[];
}> = ({ formData, onInputChange, onSubmit, isSubmitting, locationOptions, priceOptions }) => (
  <div className="hidden lg:block">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex items-center bg-white gap-6 lg:gap-8 rounded-full border-2 border-gray-100 shadow-lg p-2 lg:px-10 lg:p-4 relative"
      style={{ overflow: 'visible' }} 
    >
      <div className="flex-1 flex items-center rounded-full px-6 lg:px-8 py-4 lg:py-5 border-2 border-[#212121] hover:border-gray-300 transition-colors">
        <SearchInput
          value={formData.query}
          onChange={(value) => onInputChange('query', value)}
          placeholder="Search for salons..."
          className="w-full text-lg lg:text-lg"
        />
      </div>
      
      <div className="w-[2px] lg:w-[3px] h-16 lg:h-16 bg-gray-200"/>
      
     
      <div className="flex-shrink-0 w-44 lg:w-52 px-4 lg:px-6 py-3 relative z-50">
        <CustomDropdown
          label="Location"
          value={formData.location}
          options={locationOptions}
          onSelect={(option) => onInputChange('location', option.value)}
          placeholder="Select"
        />
      </div>
      
      <div className="w-[2px] lg:w-[3px] h-16 lg:h-16 bg-gray-200"/>
      

      <div className="flex-shrink-0 w-36 lg:w-44 px-4 lg:px-6 py-3 relative z-40">
        <CustomDropdown
          label="Price"
          value={formData.price}
          options={priceOptions}
          onSelect={(option) => onInputChange('price', option.value)}
          placeholder="Select"
        />
      </div>
      
      <div className="flex-shrink-0">
        <SearchButton
          onClick={onSubmit}
          isLoading={isSubmitting}
          className="w-16 h-16 lg:w-16 lg:h-16 rounded-full flex items-center justify-center"
        >
          <Search className="w-5 h-5 lg:w-6 lg:h-6" />
        </SearchButton>
      </div>
    </motion.div>
  </div>
);