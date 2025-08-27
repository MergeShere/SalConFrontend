import { openModal } from "../../redux/features/serviceSelectionSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store"

function HairPricing() {
  const dispatch = useAppDispatch();
  const {availableServices, selectedServices} = useAppSelector(state=>state.selection)


  const handleServiceClick=(serviceId:number)=>{
    dispatch(openModal(serviceId));
  }

  const isServiceSelected=(serviceId:number)=>{
    return selectedServices.some(s=>s.id === serviceId)
  };



 return (
    <div className="space-y-4">
      {availableServices.map((service) => (
        <div 
          key={service.id}
          onClick={() => handleServiceClick(service.id)}
          className={`p-5 rounded-md border cursor-pointer transition-all
          text-[16px] lg:text-[18px]
          ${isServiceSelected(service.id) 
            ? 'border-black bg-gray-50' 
            : 'border-[#D9D9D9] hover:border-gray-400'
          }
          w-auto h-20 font-jarkataLight flex lg:items-center justify-between flex-row`}
        >
          <div className="space-y-2">
            <h1 className={isServiceSelected(service.id) ? 'font-jarkataBold' : ''}>{service.name}</h1>
            <p className="text-[12px] text-[#3F3F46]">{service.duration}</p>
          </div>
          <div className="flex items-center gap-2">
            <h1 className={isServiceSelected(service.id) ? 'font-jarkataBold' : ''}>GHS {service.price}</h1>
            {/* {isServiceSelected(service.id) && (
              <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HairPricing