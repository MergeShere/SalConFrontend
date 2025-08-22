import { useNavigate } from 'react-router-dom';
import DashboardHero from '../components/layouts/DashboardHero';
import Featured from '../components/home/Featured';
import FeaturedSalons from '../components/dashboard/FeaturedSalons';
import Footer from '../components/Footer';

interface SearchFilters {
  location: string;
  price: string;
}

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string, filters: SearchFilters) => {
    console.log('Search query:', query);
    console.log('Filters:', filters);
  };

  const handleSalonClick = (salonId: string) => {
    navigate(`/salon/${salonId}`);
  };

  return (
    <div className="min-h-screen">
      <DashboardHero
        title="Find your Perfect Salon"
        subtitle="Discover and book the best beauty services from top rated salons across Ghana"
        onSearch={handleSearch}
      />
      <FeaturedSalons onSalonClick={handleSalonClick} />
      <Featured />
      <Footer />
    </div>
  );
};

export default DashboardPage;
