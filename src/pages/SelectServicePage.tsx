import HairPricing from "../components/bookings/HairPricing"
import PaymentInformation from "../components/bookings/PaymentInformation"
import ServiceModal from "../components/bookings/ServiceModal" // Add this import

function SelectServicePage() {
  return (
    <div className="custom-container py-5 px-4 sm:px-6 lg:px-8 lg:py-10">
       <div>
        <div>
            <h3 className='text-[#52525B] text-sm capitalize font-jarkataLight'>product-Stone Ocean Salon-services</h3>

            <div className="pt-5 ">
                 <h1 className="text-2xl md:text-3xl lg:text-4xl capitalize font-jarkataBold">Stone ocean salon</h1>

                <div className="pt-5">
                      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-20">
                        
                        <div>
                          <h1 className="text-[18px] mb-10  text-[#3F3F46] lg:text-2xl font-jarkataLight">Select Service</h1>
                        <HairPricing/>
                        </div>
                        <PaymentInformation/>
                      </div>
                 </div>

                 <div>
                 </div>

                </div>
            </div>
        </div>
      
        <ServiceModal />
       </div>
  )
}

export default SelectServicePage