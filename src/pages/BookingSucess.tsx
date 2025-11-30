import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function BookingSuccessPage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/dashboard');
  };

  return (
    <div className="relative custom-container py-5 px-4 sm:px-6 lg:px-8 lg:py-10 min-h-[70vh] flex items-center justify-center">
      
      {/* Success Content */}
      <div className="text-center max-w-md mx-auto">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-8">
          <Check className="w-10 h-10 text-white" />
        </div>

        {/* Success Message */}
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Booking Successful
        </h1>

        <p className="text-gray-600 font-light mb-8 leading-relaxed">
          Your booking has been successful. Check your email for more details
        </p>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="bg-black text-white px-8 py-3 rounded-md font-bold text-[16px] hover:bg-gray-800 transition-all min-w-[200px]"
        >
          Continue
        </button>
      </div>
      {/* Left Corner Image */}
     <img
  src="src/assets/images/Image.png"
  alt="decor"
  className="absolute bottom-0 left-0 w-[300px] md:w-[500px] lg:w-[600px] pointer-events-none"
  style={{ marginLeft: '-30px', marginBottom: '-220px' }} // pushes it tighter to the corner
/>
    </div>
  );
}

export default BookingSuccessPage;
