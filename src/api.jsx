// src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.31:4000/admin/', // Replace with your API URL
});

export const createAuthenticatedInstance = (token) => {
  return axios.create({
    baseURL: 'http://192.168.1.31:4000/admin/', // Replace with your API URL
    headers: {
      // Add your custom headers here, including the Bearer token
      'Authorization': `Bearer ${token}`, // Example: 'Bearer abc123'
      'Content-Type': 'application/json', // You can add other headers as needed
    },
  });
};

export const fetchPosts = async (token) => {
  const bearerInstance = createAuthenticatedInstance(token);
  const response = await bearerInstance.get('/userList');
  return response.data;
};

export const createPost = async (token,postData) => {
  const bearerInstance = createAuthenticatedInstance(token);
  const response = await bearerInstance.post('/addUser', postData);
  return response.data;
};

export const deletePost = async (token,postData) => {
  const bearerInstance = createAuthenticatedInstance(token);
  const response = await bearerInstance.post('/userDelete', postData);
  return response.data;
};
export const updatepost = async (token,postData) => {
  const bearerInstance = createAuthenticatedInstance(token);
  const response = await bearerInstance.post('/userUpdate', postData);
  return response.data;
};

export const login = async (postData) => {
  console.log("postData",postData)
  const response = await instance.post('/login', postData);
  return response.data;
};