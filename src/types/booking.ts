export interface HairServiceProps {
  id: number;
  name: string;
  duration: string;
  price: number;
  category: string;
}


export interface ServiceSelectionState {
  availableServices: HairServiceProps[];
  selectedServices: HairServiceProps[];
  subtotal: number;
  tax: number;
  total: number;
  isModalOpen: boolean;
  selectedServiceForModal: HairServiceProps | null;
  bookingDate: Date | null;
  bookingTime: string | null;
}