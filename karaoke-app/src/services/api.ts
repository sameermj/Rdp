import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';

// Function to get user data
export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching user data');
    }
};

// Function to create a new team
export const createTeam = async (teamData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/teams`, teamData);
        return response.data;
    } catch (error) {
        throw new Error('Error creating team');
    }
};

// Function to get team details
export const getTeamDetails = async (teamId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/teams/${teamId}`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching team details');
    }
};

// Function to get songs
export const getSongs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/songs`);
        return response.data;
    } catch (error) {
        throw new Error('Error fetching songs');
    }
};

// Function to submit a performance
export const submitPerformance = async (performanceData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/performances`, performanceData);
        return response.data;
    } catch (error) {
        throw new Error('Error submitting performance');
    }
};