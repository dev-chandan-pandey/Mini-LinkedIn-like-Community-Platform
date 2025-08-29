import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // We need IDs for new entries

const API_URL = 'http://localhost:3001/professionals';

export const createProfessional = async (portfolioData) => {
  try {
    const dataToSubmit = {
      ...portfolioData,
      id: portfolioData.hero.name.toLowerCase().replace(/\s+/g, '-') + '-' + uuidv4().slice(0, 4) // Create a user-friendly unique ID
    };
    const response = await axios.post(API_URL, dataToSubmit);
    return response.data;
  } catch (error) {
    console.error("Error creating professional profile:", error);
    throw error;
  }
};

// In src/services/api.js

export const getProfessionals = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching professionals:", error);
        throw error;
    }
};


// In src/services/api.js

export const getProfessionalById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching professional with id ${id}:`, error);
        throw error;
    }
};