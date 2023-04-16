import { axiosInstance, apiRequest } from './core/axios';

export const createUser = async (data) => {
  return await apiRequest(() => axiosInstance.post(`/api/v1/users`, data));
};

export const getAllUsers = async (filterQuery = '', sortQuery = '') => {
  return await apiRequest(() => axiosInstance.get(`/api/v1/users?${filterQuery}&${sortQuery}`));
};

export const updateUser = async (id, data) => {
  return await apiRequest(() => axiosInstance.put(`/api/v1/users/${id}`, data));
};

export const deleteUser = async (id) => {
  return await apiRequest(() => axiosInstance.delete(`/api/v1/users/${id}`));
};
