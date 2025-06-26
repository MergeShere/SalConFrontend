import { FaStar, FaMapMarkerAlt } from "react-icons/fa";

export const SalonDetailsCard = () => {
  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-500">
        Home - Products -{" "}
        <span className="text-gray-700 font-medium">Stone Ocean Salon</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-800">Stone Ocean Salon</h1>
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span className="font-medium">4.0</span>
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span>(300)</span>
        </div>
        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-red-500" />
          <span>Accra</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut amet a a
        blandit id non viverra massa semper. Varius bibendum suscipit sed mattis
        turpis enim in ornare. In orci condimentum id in. Sit sodales tempor,
        sed feugiat sit at fames a tellus.
      </p>
      <div className="mt-6">
        <h2 className="font-bold text-black">Services:</h2>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-2">
          <li>Haircuts</li>
          <li>Hair Coloring</li>
          <li>Hair Styling</li>
          <li>Perms and Relaxers</li>
          <li>Scalp Treatments</li>
        </ul>
      </div>
      <div className="flex mt-3 items-baseline gap-2">
        <span className="text-xl font-bold text-gray-800">GHS 250</span>
        <span className="text-sm font-semibold text-gray-800">
          Starting Price
        </span>
      </div>
      <div className="flex flex-col sm:flex-row mt-6 gap-4">
        <button className="bg-black text-white w-full sm:w-[185px] h-[55px] rounded-[5px] px-4 py-[14px] text-base font-medium hover:opacity-90">
          Book
        </button>
        <button className="border border-gray-300 w-full sm:w-[185px] h-[55px] rounded-[5px] px-4 py-[14px] text-base font-medium hover:bg-gray-100">
          ♡ Favorite
        </button>
      </div>
    </div>
  );
};
