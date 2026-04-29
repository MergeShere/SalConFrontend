import { useState } from "react";
import { CreditCard, Zap } from "lucide-react";

export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const bookingDetails = {
    service: "Haircut",
    price: 250,
    date: "Thursday, 26 June 2025",
    time: "10:00 am",
    tax: 0,
  };

  const handleSelect = (method: string) => {
    setSelectedMethod(method);
  };

  const paymentMethods = [
    { name: "Card", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Mobile Money", icon: <Zap className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 py-10 md:px-20">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Product - Stone Ocean Salon - Services - Time -{" "}
        <span className="font-semibold">Payment</span>
      </p>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">Stone Ocean Salon</h1>
      <p className="text-gray-600 mb-8">Select Payment Method</p>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Payment Method Options */}
        <div className="col-span-2 space-y-4">
          {paymentMethods.map((method) => (
            <button
              key={method.name}
              onClick={() => handleSelect(method.name)}
              className={`flex items-center justify-between w-[250px] p-3 border rounded-lg shadow-sm transition ${
                selectedMethod === method.name
                  ? "border-black bg-gray-100"
                  : "border-gray-300"
              }`}
            >
              <span className="font-medium">{method.name}</span>
              {method.icon}
            </button>
          ))}
        </div>

        {/* Booking Details */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-6 h-[80vh] flex flex-col mt-[-100px]">
          <h2 className="font-semibold mb-4">Booking Details</h2>
          <div className="text-sm text-gray-700 divide-y divide-gray-200 flex-grow">
            <div className="flex justify-between py-2">
              <span>{bookingDetails.service}</span>
              <span className="font-medium">GHS {bookingDetails.price}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Date</span>
              <span>{bookingDetails.date}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Time</span>
              <span>{bookingDetails.time}</span>
            </div>
            <div className="flex justify-between py-2">
              <span>Tax</span>
              <span>GHS {bookingDetails.tax}</span>
            </div>
            <div className="flex justify-between py-2 font-semibold">
              <span>Total</span>
              <span>GHS {bookingDetails.price + bookingDetails.tax}</span>
            </div>
          </div>

          {/* Continue Button pinned bottom */}
          <button
            disabled={!selectedMethod}
            className={`w-full mt-6 py-3 rounded-lg text-white font-medium transition ${
              selectedMethod
                ? "bg-black hover:bg-gray-800"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
