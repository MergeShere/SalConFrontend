import { removeService } from "../../redux/features/serviceSelectionSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import Button from "../shared/Button";


interface PaymentInformationProps {
  buttonText?: string;
  onContinue?: () => void;
  disabled?: boolean;
  date?: string;
}

function PaymentInformation({ buttonText = "continue", onContinue, disabled, date }: PaymentInformationProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selectedServices, subtotal, tax, total } = useAppSelector(state => state.selection);
  
  const hasSelectedServices = selectedServices.length > 0;
  
  const handleDefaultContinue = () => {
    if (hasSelectedServices) {
      navigate("/select-time");
    }
  };
  
  const handleContinueClick = onContinue || handleDefaultContinue;
  const isDisabled = disabled !== undefined ? disabled : !hasSelectedServices;

  const handleRemoveService = (serviceId:number) => {
    dispatch(removeService(serviceId));
  };


  return (
    <div>
      <div className="p-5 rounded-md w-full lg:w-[70%] sm:place-self-end lg:place-self-end bg-[#fafafa]">
        <h1 className="capitalize font-jarkataBold">
          {hasSelectedServices ? 'order details' : 'booking details'}
        </h1>
        
        <div className="mt-10">
          {!hasSelectedServices ? (
            <>
              <p className="font-jarkataLight capitalize text-[#52525B]">no services selected</p>
              <div className="mt-3 bg-[#ccc] h-[1px] w-full"/>
            </>
          ) : (
            <>
              <div className="space-y-3">
                {selectedServices.map((service) => (
                  <div key={service.id} className="flex items-center justify-between group">
                    <div>
                      <p className="font-jarkataLight">{service.name}</p>
                      {date && (
                        <p className="text-[12px] text-[#3F3F46]">{date}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="font-jarkataBold">GHS {service.price}</p>
                      <button
                        onClick={() => handleRemoveService(service.id)}
                        className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity text-sm hover:text-red-700"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
                
                {date && (
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-jarkataLight">Date</p>
                      <p className="text-[12px] text-[#3F3F46]">{date}</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 bg-[#ccc] h-[1px] w-full"/>
            </>
          )}
        </div>
        
        <div>
          {hasSelectedServices && (
            <>
              <div className="mt-3 font-jarkataLight flex items-center justify-between">
                <p className="capitalize">subtotal</p>
                <p className="uppercase">GHS {subtotal}</p>
              </div>
              <div className="mt-1 font-jarkataLight flex items-center justify-between">
                <p className="capitalize">tax</p>
                <p className="uppercase">GHS {tax}</p>
              </div>
            </>
          )}
          
          <div className="mt-3 font-jarkataBold flex items-center justify-between">
            <p className="capitalize">total</p>
            <p className="uppercase">GHS {hasSelectedServices ? total : 0}</p>
          </div>
          <div className="mt-1 bg-[#ccc] h-[1px] w-full"/>
        </div>

        <Button
          text={buttonText}
          className={`w-full font-jarkataBold text-center sm:text-[12px] lg:text-[18px] justify-center mt-[10rem] md:mt-[15rem] lg:mt-[20rem]
            ${!isDisabled
              ? 'bg-black text-white hover:bg-gray-800'
              : 'bg-[#eaeaea] text-gray-500 cursor-not-allowed'
            }`}
          onClick={!isDisabled ? handleContinueClick : undefined}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
}

export default PaymentInformation;