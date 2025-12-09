import api from './api';

export interface BookingPayload {
  salonId: string;
  serviceId: string;
  date: string;
  time: string;
  [key: string]: any;
}

export const bookingService = {
  createBooking: async (data: BookingPayload) => {
    const response = await api.post('/bookings', data);
    return response.data;
  },

  getMyBookings: async () => {
    const response = await api.get('/bookings/my-bookings');
    return response.data;
  },

  getBookingById: async (id: string) => {
    const response = await api.get(`/bookings/${id}`);
    return response.data;
  },
  
  cancelBooking: async (id: string) => {
    const response = await api.post(`/bookings/${id}/cancel`);
    return response.data;
  }
};
