import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { getTrendingGifs } from '../../services/gifs.services';

export default function Home() {
    const [gifs, setGifs] = useState();

    useEffect(() => {
        getTrendingGifs({ limit: 5 }).then((data) => console.log(data));
    }, []);

    return (
        <Box>
            <h1>Hello</h1>
        </Box>
    );
}
