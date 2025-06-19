import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { SearchButton, SearchInput } from "./SearchInput";
import { CustomDropdown } from "./SearchCustomDropDown";
import {Option, FormData} from '../../../types/search'

export const MobileLayout: React.FC<{
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  locationOptions: Option[];
  priceOptions: Option[];
}> = ({ formData, onInputChange, onSubmit, isSubmitting, locationOptions, priceOptions }) => (

  <div className="lg:hidden space-y-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border-2 border-gray-100 shadow-sm"
    >
      <SearchInput
        value={formData.query}
        onChange={(value) => onInputChange('query', value)}
        placeholder="Search for salons..."
        className="w-full px-6 py-4 text-base rounded-2xl"
      />
    </motion.div>
    
    <div className="flex gap-3">
      <div className="flex-1 bg-white rounded-2xl border-2 border-gray-100 shadow-sm p-4">
        <CustomDropdown
          label="Location"
          value={formData.location}
          options={locationOptions}
          onSelect={(option) => onInputChange('location', option.value)}
        />
      </div>
      
      <div className="flex-1 bg-white rounded-2xl border-2 border-gray-100 shadow-sm p-4">
        <CustomDropdown
          label="Price"
          value={formData.price}
          options={priceOptions}
          onSelect={(option) => onInputChange('price', option.value)}
        />
      </div>
    </div>
    
    <SearchButton
      onClick={onSubmit}
      isLoading={isSubmitting}
      className="w-full rounded-2xl py-4 flex items-center justify-center"
    >
      <Search className="w-5 h-5 mr-2" />
      {isSubmitting ? 'Searching...' : 'Search Salons'}
    </SearchButton>
  </div>
);