import { useState } from 'react';
import PaymentInformation from '../components/bookings/PaymentInformation';

function CardPaymentPage() {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [nameOnCard, setNameOnCard] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [cvv, setCvv] = useState<string>('');

  const formatCardNumber = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Add spaces every 4 digits
    const formatted = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formatted;
  };

  const formatExpiryDate = (value: string): string => {
    // Remove all non-digits
    const digits = value.replace(/\D/g, '');
    // Add slash after 2 digits
    if (digits.length >= 2) {
      return digits.substring(0, 2) + '/' + digits.substring(2, 4);
    }
    return digits;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const formatted = formatCardNumber(e.target.value);
    if (formatted.length <= 19) { // 16 digits + 3 spaces
      setCardNumber(formatted);
    }
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const formatted = formatExpiryDate(e.target.value);
    if (formatted.length <= 5) { // MM/YY
      setExpiryDate(formatted);
    }
  };

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const digits = e.target.value.replace(/\D/g, '');
    if (digits.length <= 3) {
      setCvv(digits);
    }
  };

  const isFormValid = cardNumber.length >= 19 && nameOnCard.trim() && expiryDate.length === 5 && cvv.length >= 3;

  const handleContinue = (): void => {
    if (isFormValid) {
      console.log('Process card payment:', {
        cardNumber: cardNumber.replace(/\s/g, ''),
        nameOnCard,
        expiryDate,
        cvv
      });
    }
  };

  return (
    <div className="custom-container py-5 px-4 sm:px-6 lg:px-8 lg:py-10">
      <div>
        <div>
          <h3 className='text-[#52525B] text-sm capitalize font-light'>
            Product - Stone Ocean Salon - Services - Time - Payment - Card
          </h3>

          <div className="pt-5">
            <h1 className="text-2xl md:text-3xl lg:text-4xl capitalize font-bold">
              Stone Ocean Salon
            </h1>

            <div className="pt-5">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20">
                
                {/* Left side - Card Payment Form */}
                <div>
                  <h1 className="text-[18px] mb-10 text-[#3F3F46] lg:text-2xl font-light">
                    Card Payment
                  </h1>

                  {/* Card Payment Form */}
                  <div className="space-y-6">
                    {/* Card Number */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="w-full p-3 border border-[#D9D9D9] rounded-md focus:border-gray-400 focus:outline-none font-light"
                      />
                    </div>

                    {/* Name on Card */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        value={nameOnCard}
                        onChange={(e) => setNameOnCard(e.target.value)}
                        placeholder="eg. John Doe"
                        className="w-full p-3 border border-[#D9D9D9] rounded-md focus:border-gray-400 focus:outline-none font-light"
                      />
                    </div>

                    {/* Expiry Date and CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          value={expiryDate}
                          onChange={handleExpiryDateChange}
                          placeholder="MM/YY"
                          className="w-full p-3 border border-[#D9D9D9] rounded-md focus:border-gray-400 focus:outline-none font-light"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          value={cvv}
                          onChange={handleCvvChange}
                          placeholder="XXX"
                          className="w-full p-3 border border-[#D9D9D9] rounded-md focus:border-gray-400 focus:outline-none font-light"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right side - Booking Details */}
                <PaymentInformation 
                  buttonText="continue"
                  onContinue={handleContinue}
                  disabled={!isFormValid}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardPaymentPage;