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

const PaymentCardPage = () => {
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    nameOnCard: "",
    expiryDate: "",
    cvv: "",
  });

  const bookingDetails: BookingDetails = {
    haircut: "Haircut",
    price: 250,
    date: "Thursday, 26 June 2025",
    time: "10:00 am",
    paymentMethod: "Credit Card",
    tax: 0,
    total: 250,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payment submitted:", cardDetails);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] font-sans">
      <div className="w-[1280px] h-[832px] bg-white flex flex-col px-20 py-14">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          Product - Stone Ocean Salon - Services - Time -{" "}
          <span className="text-gray-900 font-medium">Payment - Card</span>
        </nav>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Stone Ocean Salon
        </h1>
        <h2 className="text-xl font-medium text-gray-600 mb-8">Card Payment</h2>

        {/* Main layout */}
        <div className="flex gap-12 flex-grow">
          {/* Left: Payment Form */}
          <form onSubmit={handleSubmit} className="flex-1 space-y-6 max-w-md">
            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Card Number
              </label>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleInputChange}
                placeholder="XXXX XXXX XXXX XXXX"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Name on Card */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name on Card
              </label>
              <input
                type="text"
                name="nameOnCard"
                value={cardDetails.nameOnCard}
                onChange={handleInputChange}
                placeholder="ex: John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Expiry & CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YYYY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  CVV
                </label>
                <input
                  type="text"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                  placeholder="XXX"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>
          </form>

          {/* Right: Booking Details */}
          <div className="w-[442px] flex flex-col">
            <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Booking Details
              </h3>

              <div className="space-y-3 text-sm mb-10">
                <div className="flex justify-between pb-3 border-b border-gray-200">
                  <span className="text-gray-600 font-normal">Haircut</span>
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
                type="button"
                disabled
                className="w-full h-14 mt-32 rounded-md bg-[#EAEAEA] text-gray-400 font-medium cursor-not-allowed"
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

export default PaymentCardPage;
