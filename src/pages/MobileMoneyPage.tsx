import React, { useState } from "react";

interface BookingDetails {
  haircut: string;
  price: number;
  date: string;
  time: string;
  paymentMethod: string;
  tax: number;
  total: number;
}

const MobileMoneyPage = () => {
  const [mobileMoneyDetails, setMobileMoneyDetails] = useState({
    networkProvider: "",
    phoneNumber: "",
    accountName: "",
  });

  const bookingDetails: BookingDetails = {
    haircut: "Haircut",
    price: 250,
    date: "Thursday, 26 June 2025",
    time: "10:00 am",
    paymentMethod: "Mobile Money",
    tax: 0,
    total: 250,
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMobileMoneyDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Mobile Money payment submitted:", mobileMoneyDetails);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] font-sans">
      <div className="w-[1280px] h-[832px] bg-white flex flex-col px-20 py-14">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          Product - Stone Ocean Salon - Services - Time - Payment -{" "}
          <span className="text-gray-900 font-medium">Mobile Money</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Stone Ocean Salon
        </h1>
        <h2 className="text-xl font-medium text-gray-600 mb-8">
          Mobile Money Payment
        </h2>

        {/* Main layout */}
        <div className="flex gap-12 flex-grow">
          {/* Left: Payment Form */}
          <form onSubmit={handleSubmit} className="flex-1 space-y-6 max-w-md">
            {/* Mobile Network */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Network
              </label>
              <select
                name="networkProvider"
                value={mobileMoneyDetails.networkProvider}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Network Provider</option>
                <option value="MTN">XXXXX</option>
                <option value="Vodafone">XXXXXXX</option>
                <option value="AirtelTigo">XXXXXXXXX</option>
              </select>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={mobileMoneyDetails.phoneNumber}
                onChange={handleInputChange}
                placeholder="ex: 0241234567"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Account Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Account Name
              </label>
              <input
                type="text"
                name="accountName"
                value={mobileMoneyDetails.accountName}
                onChange={handleInputChange}
                placeholder="ex: John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </form>

          {/* Right: Booking Details */}
          <div className="flex-1 max-w-sm">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Booking Details
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-normal">
                    {bookingDetails.haircut}
                  </span>
                  <span className="text-gray-900 font-medium">
                    GHS {bookingDetails.price}
                  </span>
                </div>

                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-normal">Date</span>
                  <span className="text-gray-900 font-medium">
                    {bookingDetails.date}
                  </span>
                </div>

                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-normal">Time</span>
                  <span className="text-gray-900 font-medium">
                    {bookingDetails.time}
                  </span>
                </div>

                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-normal">
                    Payment method
                  </span>
                  <span className="text-gray-900 font-medium">
                    {bookingDetails.paymentMethod}
                  </span>
                </div>

                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-normal">Tax</span>
                  <span className="text-gray-900 font-medium">
                    GHS {bookingDetails.tax}
                  </span>
                </div>

                <div className="flex justify-between text-base font-semibold mb-6">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">
                    GHS {bookingDetails.total}
                  </span>
                </div>
              </div>

              {/* Continue Button inside Booking Details */}
              <button
                type="submit"
                className="w-full h-14 mt-32 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMoneyPage;
