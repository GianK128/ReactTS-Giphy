import { useEffect, useState } from 'react';
import { GifData, GifResponse, GifSearchParams } from '../models';
import { getTrendingGifs } from '../services/gifs.services';

export default function useTrendingGifs(params: GifSearchParams) {
    const [gifs, setGifs] = useState<GifData[]>([]);

    useEffect(() => {
        getTrendingGifs(params).then((data: GifResponse) => setGifs(data.data));
    }, []);

    return gifs;
}
