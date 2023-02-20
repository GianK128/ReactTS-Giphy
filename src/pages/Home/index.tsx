import { Button, Flex, Heading, Image } from '@chakra-ui/react';
import { Gif } from '../../components';
import { useTrendingGifs } from '../../hooks';
import { GifData } from '../../models';
import trending from '../../assets/trending.svg';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const clamp = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(max, value));
};

export default function Home() {
    const { trendingGifs, loadedGifs } = useTrendingGifs({ limit: 25 });
    const carouselRef = useRef<HTMLDivElement>(null);

    const [currentScroll, setCurrentScroll] = useState(0);
    const [currentWidth, setCurrentWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setCurrentWidth(
                carouselRef.current.scrollWidth -
                    carouselRef.current.offsetWidth
            );
        }
    }, [
        carouselRef.current?.scrollWidth,
        carouselRef.current?.offsetWidth,
        loadedGifs,
    ]);

    const handleScrollRight = useCallback(() => {
        if (carouselRef.current) {
            const newLeft = clamp(
                carouselRef.current.scrollLeft +
                    carouselRef.current.offsetWidth,
                0,
                currentWidth
            );

            carouselRef.current.scroll({ left: newLeft, behavior: 'smooth' });
            setCurrentScroll(newLeft);
        }
    }, [carouselRef.current, currentScroll, currentWidth]);

    const handleScrollLeft = useCallback(() => {
        if (carouselRef.current) {
            const newLeft = clamp(
                carouselRef.current.scrollLeft -
                    carouselRef.current.offsetWidth,
                0,
                currentWidth
            );

            carouselRef.current.scroll({ left: newLeft, behavior: 'smooth' });
            setCurrentScroll(newLeft);
        }
    }, [carouselRef.current, currentScroll, currentWidth]);

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
                    <Flex height={'100%'} position={'relative'}>
                        <Flex
                            ref={carouselRef}
                            gap={'0.5em'}
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
                                background:
                                    'linear-gradient(90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%)',
                                color: 'white',
                            }}
                            alignItems={'center'}
                            background={
                                'linear-gradient(90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%)'
                            }
                            color={'gray.400'}
                            display={'flex'}
                            height={'100%'}
                            justifyContent={'center'}
                            left={0}
                            opacity={currentScroll <= 0 ? 0 : 1}
                            padding={'0.5em 0'}
                            position={'absolute'}
                            transition={
                                'opacity 0.5s ease-out 0s, width 0.5s ease-out 0s, color 0.05s ease'
                            }
                            type={'button'}
                            width={currentScroll <= 0 ? '0px' : '2em'}
                            onClick={handleScrollLeft}
                        >
                            <BsChevronLeft
                                fontSize={'2em'}
                                opacity={currentScroll <= 0 ? 0 : 1}
                                style={{
                                    strokeWidth: '0.5px',
                                }}
                            />
                        </Button>
                        <Button
                            _hover={{
                                background:
                                    'linear-gradient(-90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%)',
                                color: 'white',
                            }}
                            alignItems={'center'}
                            background={
                                'linear-gradient(-90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%)'
                            }
                            color={'gray.400'}
                            display={'flex'}
                            height={'100%'}
                            justifyContent={'center'}
                            opacity={currentScroll >= currentWidth ? 0 : 1}
                            padding={'0.5em 0'}
                            position={'absolute'}
                            right={0}
                            transition={
                                'opacity 0.5s ease-out 0s, width 0.5s ease-out 0s, color 0.05s ease'
                            }
                            type={'button'}
                            width={
                                currentScroll >= currentWidth ? '0px' : '2em'
                            }
                            onClick={handleScrollRight}
                        >
                            <BsChevronRight
                                fontSize={'2em'}
                                opacity={currentScroll >= currentWidth ? 0 : 1}
                                style={{
                                    strokeWidth: '0.5px',
                                }}
                            />
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
}
