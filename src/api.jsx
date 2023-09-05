// src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.1.31:4000/api/futurePedia/', // Replace with your API URL
});

export const fetchPosts = async () => {
  const response = await instance.get('/userList');
  return response.data;
};

export const createPost = async (postData) => {
  const response = await instance.post('/addUser', postData);
  return response.data;
};

export const deletePost = async (postData) => {
  const response = await instance.post('/userDelete', postData);
  return response.data;
};
export const updatepost = async (postData) => {
  const response = await instance.post('/userUpdate', postData);
  return response.data;
};