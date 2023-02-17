import axios from 'axios';

const giphyUrl = import.meta.env.VITE_GIPHY_BASE_URL;
const instance = axios.create({
    baseURL: giphyUrl,
    timeout: 10000,
});

// Add api key to every request
instance.interceptors.request.use((config) => {
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

    config.params = { ...config.params, api_key: apiKey };

    return config;
});

export default instance;
