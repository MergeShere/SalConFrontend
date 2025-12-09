import api from './api';

export interface Salon {
  id: string;
  name: string;
  address: string;
  description: string;
  rating: number;
  images: string[];
  [key: string]: any;
}

export const salonService = {
  getAllSalons: async (params?: any) => {
    const response = await api.get('/salons', { params });
    return response.data;
  },

  getSalonById: async (id: string) => {
    const response = await api.get(`/salons/${id}`);
    return response.data;
  },

  createSalon: async (data: any) => {
    const response = await api.post('/salons', data);
    return response.data;
  },
  
  updateSalon: async (id: string, data: any) => {
    const response = await api.put(`/salons/${id}`, data);
    return response.data;
  },
  
  deleteSalon: async (id: string) => {
    const response = await api.delete(`/salons/${id}`);
    return response.data;
  }
};
