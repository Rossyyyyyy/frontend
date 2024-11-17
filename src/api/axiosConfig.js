import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Ensure this is your backend's API base URL


export const fetchUserInfo = async (token) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user-info`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });
        return response;
    } catch (error) {
        console.error('Error fetching user info:', error);
        throw error;
    }
};
// Function for phishing detection
export const detectPhishing = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/detect/`, data);
        return response; 
    } catch (error) {
        console.error('Error during phishing detection:', error);
        throw error; 
    }
};

// Function for user registration
export const registerUser = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register/`, data);
        return response; 
    } catch (error) {
        console.error('Error during registration:', error);
        throw error; 
    }
};

// Function for user login
export const loginUser = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login/`, data);
        
        // If your backend responds with a token, you can store it here
        if (response.data.token) {
            localStorage.setItem('authToken', response.data.token); // Store token in localStorage or sessionStorage
        }

        return response; // Return the response from the backend
    } catch (error) {
        console.error('Error during login:', error);
        throw error; 
    }
};
