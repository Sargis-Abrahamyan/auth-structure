import axios from 'axios';

// Generalized authentication function
export const authenticate = async (formData, type) => {
  try {
    const endpoint = type === 'login' ? '/api/login' : '/api/register';
    const response = await axios.post(endpoint, formData);
    // Handle successful response
    return response.data;
  } catch (error) {
    // Handle error
    throw new Error(`${type} Authentication failed. Please try again.`);
  }
};
