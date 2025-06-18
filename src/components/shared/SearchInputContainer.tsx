import React, { useState } from 'react'
import { Search } from "lucide-react";

function SearchInputContainer() {
    const [formData, setFormData] = useState({
        query: '',
        location: '',
        price: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.query || formData.query.length < 3) {
            newErrors.query = 'Search term must be at least 3 characters';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsSubmitting(true);
        console.log('search values', formData);
        
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
        }, 1000);
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };
    
    return (
        <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl mx-auto" onSubmit={handleSubmit}>
                {/* Mobile Layout (< 768px) */}
                <div className="md:hidden space-y-4">
                    {/* Search Input */}
                    <div className="bg-white rounded-2xl border-2 border-gray-100 shadow-sm">
                        <input
                            type="text"
                            value={formData.query}
                            onChange={(e) => handleInputChange('query', e.target.value)}
                            placeholder="Search for salons..."
                            className="w-full px-6 py-4 text-base outline-none text-gray-700 placeholder-gray-400 rounded-2xl"
                        />
                    </div>
                    
                    {/* Location and Price - Side by side on mobile */}
                    <div className="flex gap-3">
                        <div className="flex-1 bg-white rounded-2xl border-2 border-gray-100 shadow-sm">
                            <div className="px-4 py-2">
                                <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
                                <select
                                    value={formData.location}
                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                    className="w-full outline-none text-gray-700 bg-transparent text-sm"
                                >
                                    <option value="">Select location</option>
                                    <option value="downtown">Downtown</option>
                                    <option value="uptown">Uptown</option>
                                    <option value="suburbs">Suburbs</option>
                                    <option value="mall">Shopping Mall</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="flex-1 bg-white rounded-2xl border-2 border-gray-100 shadow-sm">
                            <div className="px-4 py-2">
                                <label className="block text-sm font-medium text-gray-600 mb-1">Price</label>
                                <select
                                    value={formData.price}
                                    onChange={(e) => handleInputChange('price', e.target.value)}
                                    className="w-full outline-none text-gray-700 bg-transparent text-sm"
                                >
                                    <option value="">Select price</option>
                                    <option value="low">$ - Budget</option>
                                    <option value="medium">$$ - Mid-range</option>
                                    <option value="high">$$$ - Premium</option>
                                    <option value="luxury">$$$$ - Luxury</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    {/* Search Button - Full width on mobile */}
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="w-full bg-[#212121] hover:bg-gray-800 disabled:bg-gray-400 flex items-center justify-center rounded-2xl py-4 text-white font-medium transition-all duration-200 shadow-lg"
                    >
                        <Search className="w-5 h-5 mr-2" />
                        {isSubmitting ? 'Searching...' : 'Search Salons'}
                    </button>
                </div>

                {/* Tablet Layout (768px - 1024px) */}
                <div className="hidden md:block lg:hidden">
                    <div className="bg-white rounded-3xl border-2 border-gray-100 shadow-lg p-4">
                        {/* First Row: Search Input */}
                        <div className="mb-4">
                            <input
                                type="text"
                                value={formData.query}
                                onChange={(e) => handleInputChange('query', e.target.value)}
                                placeholder="Search for salons..."
                                className="w-full px-6 py-4 text-lg outline-none text-gray-700 placeholder-gray-400 rounded-2xl border-2 border-gray-100 focus:border-gray-300 transition-colors"
                            />
                        </div>
                        
                        {/* Second Row: Location, Price, Button */}
                        <div className="flex items-end gap-4">
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-600 mb-2">Location</label>
                                <select
                                    value={formData.location}
                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                    className="w-full px-4 py-3 outline-none text-gray-700 bg-white border-2 border-gray-100 rounded-xl focus:border-gray-300 transition-colors"
                                >
                                    <option value="">Select location</option>
                                    <option value="downtown">Downtown</option>
                                    <option value="uptown">Uptown</option>
                                    <option value="suburbs">Suburbs</option>
                                    <option value="mall">Shopping Mall</option>
                                </select>
                            </div>
                            
                            <div className="flex-1">
                                <label className="block text-sm font-medium text-gray-600 mb-2">Price Range</label>
                                <select
                                    value={formData.price}
                                    onChange={(e) => handleInputChange('price', e.target.value)}
                                    className="w-full px-4 py-3 outline-none text-gray-700 bg-white border-2 border-gray-100 rounded-xl focus:border-gray-300 transition-colors"
                                >
                                    <option value="">Select price</option>
                                    <option value="low">$ - Budget</option>
                                    <option value="medium">$$ - Mid-range</option>
                                    <option value="high">$$$ - Premium</option>
                                    <option value="luxury">$$$$ - Luxury</option>
                                </select>
                            </div>
                            
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="bg-[#212121] hover:bg-gray-800 disabled:bg-gray-400 w-16 h-16 flex items-center justify-center rounded-2xl text-white font-medium transition-all duration-200 shadow-lg"
                            >
                                <Search className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout (>= 1024px) */}
                <div className="hidden lg:block">
                    <div className="flex items-center bg-white gap-6 xl:gap-10 rounded-full border-2 border-gray-100 shadow-lg overflow-hidden p-3 xl:p-5">
                        {/* Search Input */}
                        <div className="flex-1 flex items-center rounded-full px-4 xl:px-6 py-4 xl:py-5 border-2 border-gray-200 hover:border-gray-300 transition-colors">
                            <input
                                type="text"
                                value={formData.query}
                                onChange={(e) => handleInputChange('query', e.target.value)}
                                placeholder="Search for salons..."
                                className="w-full outline-none text-gray-700 placeholder-gray-400 text-base xl:text-lg"
                            />
                        </div>
                        
                        {/* Divider */}
                        <div className="w-[2px] xl:w-[3px] h-16 xl:h-20 bg-gray-200"/>
                        
                        {/* Location Dropdown */}
                        <div className="flex-shrink-0 w-32 xl:w-40 px-3 xl:px-4 py-3">
                            <div className="flex items-center justify-between cursor-pointer">
                                <span className="text-black text-base xl:text-lg font-medium">Location</span>
                            </div>
                            <select
                                value={formData.location}
                                onChange={(e) => handleInputChange('location', e.target.value)}
                                className="w-full mt-1 outline-none text-gray-700 text-sm xl:text-lg bg-transparent cursor-pointer"
                            >
                                <option value="">Select</option>
                                <option value="downtown">Downtown</option>
                                <option value="uptown">Uptown</option>
                                <option value="suburbs">Suburbs</option>
                                <option value="mall">Shopping Mall</option>
                                <option value="beachside">Beachside</option>
                            </select>
                        </div>
                        
                        {/* Divider */}
                        <div className="w-[2px] xl:w-[3px] h-16 xl:h-20 bg-gray-200"/>
                        
                        {/* Price Dropdown */}
                        <div className="flex-shrink-0 w-28 xl:w-32 px-3 xl:px-4 py-3">
                            <div className="flex items-center justify-between cursor-pointer">
                                <span className="text-black text-base xl:text-lg font-medium">Price</span>
                            </div>
                            <select
                                value={formData.price}
                                onChange={(e) => handleInputChange('price', e.target.value)}
                                className="w-full mt-1 outline-none text-gray-700 text-sm xl:text-lg bg-transparent cursor-pointer"
                            >
                                <option value="">Select</option>
                                <option value="low">$ Budget</option>
                                <option value="medium">$$ Mid</option>
                                <option value="high">$$$ Premium</option>
                                <option value="luxury">$$$$ Luxury</option>
                            </select>
                        </div>
                        
                        {/* Search Button */}
                        <div className="flex-shrink-0">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting}
                                className="bg-[#212121] hover:bg-gray-800 disabled:bg-gray-400 w-16 h-16 xl:w-20 xl:h-20 flex items-center justify-center rounded-full text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                <Search className="w-5 h-5 xl:w-6 xl:h-6" />
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* Error Messages */}
                {Object.keys(errors).length > 0 && (
                    <div className="mt-3 px-2 space-y-1">
                        {errors.query && <div className="text-red-500 text-sm">{errors.query}</div>}
                        {errors.location && <div className="text-red-500 text-sm">{errors.location}</div>}
                        {errors.price && <div className="text-red-500 text-sm">{errors.price}</div>}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SearchInputContainer