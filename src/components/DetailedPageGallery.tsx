import { Star, MapPin, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


interface Salon {
  id: string;
  name: string;
  rating: number;
  reviewCount: number;
  location: string;
  description: string;
  services: string[];
  startingPrice: number;
}

interface DetailedPageGalleryProps {
  salon: Salon;
}

const DetailedPageGallery = ({ salon }: DetailedPageGalleryProps) => {
  const navigate = useNavigate(); // Move this to the top level of the component

  const handleBookClick = () => {
    navigate("/select-service");
  };

  return (
    <div className="bg-white p-0 h-fit">
      <nav className="flex mb-4 text-sm">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="/" className="text-gray-500 hover:text-gray-700">Home</a>
          </li>
          <li className="text-gray-500">-</li>
          <li>
            <a href="/products" className="text-gray-500 hover:text-gray-700">Products</a>
          </li>
          <li className="text-gray-500">-</li>
          <li className="text-gray-900 font-medium">{salon.name}</li>
        </ol>
      </nav>

      <div className="mb-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {salon.name}
        </h1>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-900">{salon.rating}</span>
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <Star 
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(salon.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-gray-500">({salon.reviewCount})</span>
          </div>
          
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">{salon.location}</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed">
          {salon.description}
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Services:</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {salon.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <div className="border border-gray-300 rounded-md p-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              GHS {salon.startingPrice}
            </span>
            <span className="text-sm text-gray-500">Starting Price</span>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <button 
          onClick={handleBookClick}
          className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200" 
        >
          Book
        </button>
        
        <button
          className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-md font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <Heart className="w-4 h-4 text-gray-600" />
          Favorite
        </button>
      </div>
    </div>
  );
};

export default DetailedPageGallery;