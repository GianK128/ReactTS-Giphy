import { Flex, Heading, Image } from '@chakra-ui/react';
import { Gif } from '../../components';
import { useTrendingGifs } from '../../hooks';
import { GifData } from '../../models';
import trending from '../../assets/trending.svg';

export default function Home() {
    const trendingGifs = useTrendingGifs({ limit: 7 });

    return (
        <Flex justifyContent={'center'} padding={'1em'} width={'full'}>
            <Flex direction="column" width={'100%'}>
                <Flex gap={'1em'}>
                    <Image src={trending} />
                    <Heading color={'white'} fontSize={'1.5em'}>
                        Trending
                    </Heading>
                </Flex>
                <Flex gap={'1em'} overflowX={'auto'} width={'100%'}>
                    {trendingGifs.map((gif: GifData) => (
                        <Gif
                            key={gif.id}
                            altText={gif.title}
                            height={Number(gif.images.downsized_medium.height)}
                            url={gif.images.downsized_medium.url}
                            width={Number(gif.images.downsized_medium.width)}
                        />
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
}
