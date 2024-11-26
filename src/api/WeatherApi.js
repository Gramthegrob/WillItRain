import axios from 'axios';

const API_KEY = 'a22c29696b304b839d985332241111'; // Ganti dengan API key Anda
const BASE_URL = 'http://api.weatherapi.com/v1';

export const fetchWeather = async (city) => {
    try {
        const response = await axios.get(`${BASE_URL}/current.json`, {
            params: { key: API_KEY, q: city }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw error;
    }
};

export const fetchForecast = async (city, days = 3) => {
    try {
        const response = await axios.get(`${BASE_URL}/forecast.json`, {
            params: { key: API_KEY, q: city, days }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching forecast data:", error);
        throw error;
    }
};
