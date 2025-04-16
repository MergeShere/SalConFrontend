import { FaFacebook, FaSquareInstagram } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { FeaturedCardProps } from '../../types';

const FeaturedCard = ({ name, title, image }: FeaturedCardProps) => {
  return (
    <div className="bg-white shadow-md">
      <div className="mb-4">
        <img className="w-full object-cover" src={image} alt={name} />
      </div>

      <div className="p-2 md:p-4">
        <h1 className="text-base text-dark-gray-clr md:text-xl font-semibold">
          {name}
        </h1>
        <h2 className="text-sm text-dark-gray-clr mb-3">{title}</h2>

        <div className="flex gap-4 text-xl text-gray-600">
          <FaFacebook />
          <FaSquareInstagram />
          <IoMail />
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
