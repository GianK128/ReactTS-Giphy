import { Flex, Heading, Image } from '@chakra-ui/react';
import { Carousel, Gif } from '../../components';
import { useTrendingGifs } from '../../hooks';
import { GifData } from '../../models';
import trending from '../../assets/trending.svg';

export default function Home() {
    const { trendingGifs } = useTrendingGifs({ limit: 25 });

    return (
        <Flex alignItems={'center'} direction={'column'} width={'full'}>
            <Flex justifyContent={'center'} padding={'1em'} width={'70vw'}>
                <Flex direction="column" gap={'0.5em'} width={'100%'}>
                    <Flex gap={'1em'}>
                        <Image src={trending} />
                        <Heading color={'white'} fontSize={'1.5em'}>
                            Trending
                        </Heading>
                    </Flex>
                    <Carousel>
                        {trendingGifs.map((gif: GifData) => (
                            <Gif
                                key={gif.id}
                                altText={gif.title}
                                height={Number(
                                    gif.images.downsized_medium.height
                                )}
                                url={gif.images.downsized_medium.url}
                                width={Number(
                                    gif.images.downsized_medium.width
                                )}
                            />
                        ))}
                    </Carousel>
                </Flex>
            </Flex>
        </Flex>
    );
}
