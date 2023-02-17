import axios from 'axios';
import { GifSearchParams } from '../models/gifsearch.model';
import instance from './instance.services';

export async function getTrendingGifs(params: GifSearchParams) {
    try {
        const response = await instance.get('/gifs/trending', {
            params: params,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response?.data;
        }

        return error;
    }
}

export async function getGifsBySearch(params: GifSearchParams) {
    try {
        const response = await instance.get('/gifs/search', {
            params: params,
        });

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return error.response?.data;
        }

        return error;
    }
}
