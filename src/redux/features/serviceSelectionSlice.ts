import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServiceSelectionState } from "../../types/booking";
import { hairPriceServices } from "../../data/hairPriceData";


const initialState:ServiceSelectionState= {
    availableServices: hairPriceServices,
    selectedServices: [],
    subtotal: 0,
    tax: 0,
    total: 0,
    isModalOpen: false,
    selectedServiceForModal: null,
    bookingDate: null,
    bookingTime: null
}


const serviceSelectionSlice = createSlice({
    name: 'selection',
    initialState,
    reducers: {
        openModal: (state, action: PayloadAction<number>) => {
            const serviceId = action.payload;
            const service = state.availableServices.find(s => s.id === serviceId);

            if (service) {
                state.isModalOpen = true;
                state.selectedServiceForModal = service;
            }
        },

        closeModal: (state) => {
            state.isModalOpen = false;
            state.selectedServiceForModal = null;
        },

        addServiceToCart: (state) => {
            if (state.selectedServiceForModal) {
                const isAlreadySelected = state.selectedServices.find(
                    s => s.id === state.selectedServiceForModal!.id
                );

                if (!isAlreadySelected) {
                    state.selectedServices.push(state.selectedServiceForModal);
                    serviceSelectionSlice.caseReducers.calculateTotals(state);
                }

                state.isModalOpen = false;
                state.selectedServiceForModal = null;
            }
        },

        removeService: (state, action: PayloadAction<number>) => {
            const serviceId = action.payload;
            state.selectedServices = state.selectedServices.filter(s => s.id !== serviceId);
            serviceSelectionSlice.caseReducers.calculateTotals(state);
        },

        clearServices: (state) => {
            state.selectedServices = [];
            state.subtotal = 0;
            state.tax = 0;
            state.total = 0;
        },

        setBookingInfo: (state, action: PayloadAction<{ date: Date; time: string }>) => {
            state.bookingDate = action.payload.date;
            state.bookingTime = action.payload.time;
        },

        calculateTotals: (state) => {
            // Fixed: service.price instead of serviceSelectionSlice.price
            state.subtotal = state.selectedServices.reduce((total, service) => total + service.price, 0);
            state.tax = 0;
            state.total = state.subtotal + state.tax;
        }
    }
});

export const {
    openModal,
    closeModal,
    addServiceToCart,
    removeService,
    clearServices,
    setBookingInfo,
    calculateTotals
} = serviceSelectionSlice.actions;

export default serviceSelectionSlice.reducer;