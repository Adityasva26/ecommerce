// src/api.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API URL
});

export const fetchPosts = async () => {
  const response = await instance.get('/posts');
  return response.data;
};

export const createPost = async (postData) => {
    const response = await instance.post('/posts', postData);
    return response.data;
  };