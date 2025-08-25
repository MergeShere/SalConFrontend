import { addServiceToCart, closeModal } from "../../redux/features/serviceSelectionSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store"
import Button from "../shared/Button";

function ServiceModal() {
    
    const dispatch = useAppDispatch();
    const {isModalOpen, selectedServiceForModal}= useAppSelector(state=>state.selection);

    if(!isModalOpen || !selectedServiceForModal) return null;

    const handleAddToCart=()=>{
        dispatch(addServiceToCart())
    }


    const handleCancel=()=>{
        dispatch(closeModal());
    }


    const handleBackdropClick=(e:React.MouseEvent<HTMLDivElement>)=>{
        if(e.target=== e.currentTarget){
            dispatch(closeModal());
        }
    };


return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-auto">
        <h1 onClick={handleCancel} className="place-self-end cursor-pointer">X</h1>
        <div className="text-center">
          <h2 className="text-lg lg:text-xl font-jarkataLight mb-2">{selectedServiceForModal.name}</h2>
          <p className="text-[#3F3F46] mb-2">{selectedServiceForModal.duration}</p>
          <p className="text-2xl  font-jarkataBold mb-8">GHS {selectedServiceForModal.price}</p>
        </div>
        
        <div className="flex gap-4">
          <Button 
            text="cancel"
            onClick={handleCancel}
            className="flex-1 bg-transparent border-2 text-center justify-center text-black hover:bg-gray-300"
          />
          <Button 
            text="add to cart"
            onClick={handleAddToCart}
            className="flex-1 bg-black  whitespace-nowrap  text-center justify-center text-white hover:bg-gray-800"
          />
        </div>
      </div>
    </div>
  );

  
}

export default ServiceModal
