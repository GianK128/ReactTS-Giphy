import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import { Gif } from '../../components';
import { useTrendingGifs } from '../../hooks';
import { GifData } from '../../models';
import trending from '../../assets/trending.svg';
import { useCallback, useEffect, useRef, useState } from 'react';

const clamp = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(max, value));
};

export default function Home() {
    const trendingGifs = useTrendingGifs({ limit: 25 });
    const carouselRef = useRef<HTMLDivElement>(null);

    const [currentScroll, setCurrentScroll] = useState(0);
    const [currentWidth, setcurrentWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setcurrentWidth(
                carouselRef.current.scrollWidth -
                    carouselRef.current.offsetWidth
            );
        }
    }, [carouselRef]);

    const handleScrollRight = useCallback(() => {
        if (carouselRef.current) {
            const newLeft = clamp(
                carouselRef.current.scrollLeft +
                    carouselRef.current.offsetWidth,
                0,
                carouselRef.current?.scrollWidth -
                    carouselRef.current?.offsetWidth
            );

            carouselRef.current.scroll({ left: newLeft, behavior: 'smooth' });
            setCurrentScroll(newLeft);
        }
    }, [carouselRef, currentScroll]);

    const handleScrollLeft = useCallback(() => {
        if (carouselRef.current) {
            const newLeft = clamp(
                carouselRef.current.scrollLeft -
                    carouselRef.current.offsetWidth,
                0,
                carouselRef.current.scrollWidth
            );

            carouselRef.current.scroll({ left: newLeft, behavior: 'smooth' });
            setCurrentScroll(newLeft);
        }
    }, [carouselRef, currentScroll]);

    return (
        <Flex justifyContent={'center'} padding={'1em'} width={'full'}>
            <Flex direction="column" gap={'0.5em'} width={'100%'}>
                <Flex gap={'1em'}>
                    <Image src={trending} />
                    <Heading color={'white'} fontSize={'1.5em'}>
                        Trending
                    </Heading>
                </Flex>
                <Flex height={'100%'} position={'relative'}>
                    <Flex
                        ref={carouselRef}
                        gap={'1em'}
                        minWidth={'100%'}
                        overflowX={'hidden'}
                        padding={'0.5em 0'}
                    >
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
                    </Flex>
                    <Button
                        _hover={{
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        background={'#FF6666'}
                        height={'100%'}
                        left={0}
                        padding={'0.5em 0'}
                        position={'absolute'}
                        visibility={currentScroll <= 0 ? 'hidden' : 'visible'}
                        width={'2em'}
                        onClick={handleScrollLeft}
                    />
                    <Button
                        _hover={{
                            cursor: 'pointer',
                            background: 'transparent',
                        }}
                        background={'#FF6666'}
                        height={'100%'}
                        padding={'0.5em 0'}
                        position={'absolute'}
                        right={0}
                        visibility={
                            currentScroll >= currentWidth ? 'hidden' : 'visible'
                        }
                        width={'2em'}
                        onClick={handleScrollRight}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
}
