import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useAppSelector } from "../redux/store";
import PaymentInformation from "../components/bookings/PaymentInformation";
import { useNavigate } from "react-router-dom";

function MobileMoneyPaymentPage() {
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [showNetworkDropdown, setShowNetworkDropdown] = useState(false);
  const navigate = useNavigate();

  const { bookingDate } = useAppSelector((state) => state.selection);

  const mobileNetworks = [
    "MTN Mobile Money",
    "Vodafone Cash",
    "AirtelTigo Money",
    "Telecel Cash",
  ];

  const handleNetworkSelect = (network: string) => {
    setSelectedNetwork(network);
    setShowNetworkDropdown(false);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow digits and limit to 10 characters
    const digits = e.target.value.replace(/\D/g, "");
    if (digits.length <= 10) {
      setPhoneNumber(digits);
    }
  };

  const isFormValid =
    selectedNetwork && phoneNumber.length === 10 && accountName.trim();

  const handleContinue = () => {
    if (isFormValid) {
      console.log("Process mobile money payment:", {
        network: selectedNetwork,
        phoneNumber,
        accountName,
      });
      // Navigate to success page or next step
      navigate("/booking-success");
    }
  };

  // Format date for display using native JavaScript
  const formattedDate = bookingDate
    ? new Date(bookingDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <div className="custom-container py-5 px-4 sm:px-6 lg:px-8 lg:py-10">
      <div>
        <div>
          <h3 className="text-[#52525B] text-sm capitalize font-light">
            Product - Stone Ocean Salon - Services - Time - Payment - Mobile
            Money
          </h3>

          <div className="pt-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl capitalize font-bold">
              Stone Ocean Salon
            </h1>

            <div className="pt-5">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Left side - Mobile Money Payment Form */}
                <div>
                  <h1 className="text-[18px] mb-10 text-[#3F3F46] lg:text-2xl font-light">
                    Mobile Money Payment
                  </h1>

                  {/* Mobile Money Form */}
                  <div className="space-y-6">
                    {/* Mobile Network Dropdown */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mobile Network
                      </label>
                      <div className="relative">
                        <div
                          onClick={() =>
                            setShowNetworkDropdown(!showNetworkDropdown)
                          }
                          className="w-full p-3 border border-[#D9D9D9] rounded-md cursor-pointer focus:border-gray-400 font-light bg-white flex items-center justify-between"
                        >
                          <span
                            className={
                              selectedNetwork
                                ? "text-gray-900"
                                : "text-gray-500"
                            }
                          >
                            {selectedNetwork || "Select Network Provider"}
                          </span>
                          <ChevronDown
                            className={`w-5 h-5 text-gray-400 transition-transform ${
                              showNetworkDropdown ? "rotate-180" : ""
                            }`}
                          />
                        </div>

                        {showNetworkDropdown && (
                          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#D9D9D9] rounded-md shadow-lg z-10">
                            {mobileNetworks.map((network) => (
                              <div
                                key={network}
                                onClick={() => handleNetworkSelect(network)}
                                className="p-3 hover:bg-gray-50 cursor-pointer font-light border-b border-gray-100 last:border-b-0"
                              >
                                {network}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-[#D9D9D9] bg-gray-50 text-gray-500 text-sm font-light">
                          +233
                        </span>
                        <input
                          type="text"
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          placeholder="0123456789"
                          className="flex-1 p-3 border border-[#D9D9D9] rounded-r-md focus:border-gray-400 focus:outline-none font-light"
                        />
                      </div>
                    </div>

                    {/* Account Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Account Name
                      </label>
                      <input
                        type="text"
                        value={accountName}
                        onChange={(e) => setAccountName(e.target.value)}
                        placeholder="Enter account name"
                        className="w-full p-3 border border-[#D9D9D9] rounded-md focus:border-gray-400 focus:outline-none font-light"
                      />
                    </div>
                  </div>
                </div>

                {/* Right side - Booking Details */}
                <PaymentInformation
                  buttonText="continue"
                  onContinue={handleContinue}
                  disabled={!isFormValid}
                  date={formattedDate}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMoneyPaymentPage;
