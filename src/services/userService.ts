import api from './api';

export interface UpdateProfilePayload {
  fullName?: string;
  phoneNumber?: string;
  avatar?: string;
  [key: string]: any;
}

export const userService = {
  getProfile: async () => {
    const response = await api.get('/users/profile');
    return response.data;
  },

  updateProfile: async (data: UpdateProfilePayload) => {
    const response = await api.put('/users/profile', data);
    return response.data;
  },

  getAllUsers: async () => {
    const response = await api.get('/users');
    return response.data;
  },
  
  getUserById: async (id: string) => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  }
};
