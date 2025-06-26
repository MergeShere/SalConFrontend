import { useState } from "react";
import { DesktopLayout } from "./DesktopLayout";
import { MobileLayout } from "./MobileSearchLayout";
import {FormData} from '../../../types/search'
import { locationOptions, priceOptions } from "../../../lib/data";
import { toast } from "sonner";

export const SearchContainer: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    query: '',
    location: '',
    price: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);



  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.query || formData.query.length < 3) {
      toast.error('Search characters must be atleast 3');
      return;
    }
    
    setIsSubmitting(true);
    console.log('Search values:', formData);
  
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl mx-auto">
        <MobileLayout
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          locationOptions={locationOptions}
          priceOptions={priceOptions}
        />
        
        <DesktopLayout
          formData={formData}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          locationOptions={locationOptions}
          priceOptions={priceOptions}
        />
      </div>
    </div>
  );
};