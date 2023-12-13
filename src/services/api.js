import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'; 

export const getTasks = () => axios.get(`${API_BASE_URL}/todos`).then((response) => response.data);

export const getTaskById = (taskId) =>
  axios.get(`${API_BASE_URL}/todos/${taskId}`).then((response) => response.data);

export const addTask = (taskData) => axios.post(`${API_BASE_URL}/todos`, taskData).then((response) => response.data);

export const updateTask = (taskId, taskData) =>
  axios.put(`${API_BASE_URL}/todos/${taskId}`, taskData).then((response) => response.data);

export const deleteTask = (taskId) => axios.delete(`${API_BASE_URL}/todos/${taskId}`);