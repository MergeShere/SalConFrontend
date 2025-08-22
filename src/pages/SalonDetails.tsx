import { useParams } from 'react-router-dom';
import DetailedPageGallery from '../components/DetailedPageGallery';
import Carousel from '../components/Carousel';
import { salonData } from '../data/salonData';

const SalonDetails = () => {
  const { salonId } = useParams<{ salonId: string }>();
  
  if (!salonId || !salonData[salonId]) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Salon Not Found</h1>
          <p className="text-gray-600">The salon you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const salon = salonData[salonId];

  return (
    <section className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto pt-8 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          <div className="order-1 lg:order-1">
            <Carousel images={salon.images} />
          </div>
          <div className="order-2 lg:order-2">
            <DetailedPageGallery 
              salon={salon}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalonDetails;
