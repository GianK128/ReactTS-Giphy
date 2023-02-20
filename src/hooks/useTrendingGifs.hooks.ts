import { useEffect, useState } from 'react';
import { GifData, GifResponse, GifSearchParams } from '../models';
import { getTrendingGifs } from '../services/gifs.services';

export default function useTrendingGifs(params: GifSearchParams) {
    const [gifs, setGifs] = useState<GifData[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getTrendingGifs(params).then((data: GifResponse) => {
            setGifs(data.data);
            setLoaded(true);
        });
    }, []);

    return { trendingGifs: gifs, loadedGifs: loaded };
}
