import React from 'react';
import DashboardHero from '../components/layouts/DashboardHero';

interface SearchFilters {
  location: string;
  price: string;
}

const DashboardPage: React.FC = () => {
  const handleSearch = (query: string, filters: SearchFilters) => {
    console.log('Search query:', query);
    console.log('Filters:', filters);
    
   
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <DashboardHero
        title="Find your Perfect Salon"
        subtitle="Discover and book the best beauty services from top rated salons across Ghana"
        onSearch={handleSearch}
      />
      
      
    </div>
  );
};

export default DashboardPage;