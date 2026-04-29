import { useState } from "react";
import { CreditCard, Smartphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PaymentInformation from "../components/bookings/PaymentInformation";

function SelectPaymentMethodPage() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const navigate = useNavigate();

  const paymentMethods = [
    {
      id: "card",
      name: "Card",
      icon: CreditCard,
    },
    {
      id: "mobile-money",
      name: "Mobile Money",
      icon: Smartphone,
    },
  ];

  const handlePaymentMethodSelect = (methodId: string) => {
    setSelectedPaymentMethod(methodId);
  };

  const handleContinue = () => {
    if (selectedPaymentMethod) {
      // Navigate to specific payment page based on selection
      if (selectedPaymentMethod === "card") {
        navigate("/payment/card");
      } else if (selectedPaymentMethod === "mobile-money") {
        navigate("/payment/mobile-money");
      }
    }
  };

  return (
    <div className="custom-container py-5 px-4 sm:px-6 lg:px-8 lg:py-10">
      <div>
        <div>
          <h3 className="text-[#52525B] text-sm capitalize font-light">
            Product - Stone Ocean Salon - Services - Time - Payment
          </h3>

          <div className="pt-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl capitalize font-bold">
              Stone Ocean Salon
            </h1>

            <div className="pt-5">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20">
                {/* Left side - Payment Method Selection */}
                <div>
                  <h1 className="text-[18px] mb-10 text-[#3F3F46] lg:text-2xl font-light">
                    Select Payment Method
                  </h1>

                  {/* Payment Methods */}
                  <div className="space-y-4">
                    {paymentMethods.map((method) => {
                      const IconComponent = method.icon;
                      return (
                        <div
                          key={method.id}
                          onClick={() => handlePaymentMethodSelect(method.id)}
                          className={`p-4 rounded-md border cursor-pointer transition-all flex items-center gap-3
                            ${
                              selectedPaymentMethod === method.id
                                ? "border-black bg-gray-50 font-bold"
                                : "border-[#D9D9D9] hover:border-gray-400 font-light"
                            }
                            w-full h-16`}
                        >
                          <IconComponent className="w-6 h-6 text-gray-600" />
                          <span className="text-[16px] lg:text-[18px]">
                            {method.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right side - Booking Details */}
                <PaymentInformation
                  buttonText="continue"
                  onContinue={handleContinue}
                  disabled={!selectedPaymentMethod}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectPaymentMethodPage;
