import { Flex } from '@chakra-ui/react';
import { Carousel, Gif, Title } from '../../../components';
import { useTrendingGifs } from '../../../hooks';
import { GifData } from '../../../models';
import trending from '../../../assets/trending.svg';

export default function TrendingGifs() {
    const { trendingGifs } = useTrendingGifs({ limit: 25 });

    return (
        <Flex direction="column" gap={'0.5em'} width={'100%'}>
            <Title icon={trending} text={'Trending'} />
            <Carousel>
                {trendingGifs.map((gif: GifData) => (
                    <Gif
                        key={gif.id}
                        altText={gif.title}
                        height={Number(gif.images.downsized_medium.height)}
                        url={gif.images.downsized_medium.url}
                        width={Number(gif.images.downsized_medium.width)}
                    />
                ))}
            </Carousel>
        </Flex>
    );
}
