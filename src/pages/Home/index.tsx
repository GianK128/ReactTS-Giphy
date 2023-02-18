import { Flex, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Gif, GifResponse } from '../../models/gif.model';
import { GifPlaceholderProps } from '../../models/gifplaceholder.model';
import { getTrendingGifs } from '../../services/gifs.services';

function GifPlaceholder(props: GifPlaceholderProps) {
    return (
        <Flex
            backgroundColor={'#FF6666'}
            borderRadius={'0.5em'}
            height={props.height}
            width={props.width}
        />
    );
}

export default function Home() {
    const [gifs, setGifs] = useState<Gif[]>([]);

    useEffect(() => {
        getTrendingGifs({ limit: 7 }).then((data: GifResponse) =>
            setGifs(data.data)
        );
    }, []);

    return (
        <Flex justifyContent={'center'} padding={'1em'}>
            <Flex gap={'1em'}>
                {gifs.map((gif: Gif) => (
                    <Image
                        key={gif.id}
                        alt={`${gif.title} by ${gif.username}`}
                        borderRadius={'0.5em'}
                        fallback={
                            <GifPlaceholder height={'12em'} width={'10em'} />
                        }
                        height={'12em'}
                        objectFit={'cover'}
                        src={gif.images.downsized_medium.url}
                        width={'10em'}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
