import { Flex } from '@chakra-ui/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { CarouselProps } from '../models';
import CarouselButton from './CarouselButton.component';

const clamp = (value: number, min: number, max: number) => {
    return Math.max(min, Math.min(max, value));
};

export default function Carousel(props: CarouselProps) {
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
    }, [carouselRef.current?.scrollWidth, carouselRef.current?.offsetWidth]);

    const handleScroll = useCallback(
        (where: 'left' | 'right') => {
            if (carouselRef.current) {
                let newLeft =
                    where === 'left'
                        ? carouselRef.current.scrollLeft -
                          carouselRef.current.offsetWidth
                        : carouselRef.current.scrollLeft +
                          carouselRef.current.offsetWidth;

                newLeft = clamp(newLeft, 0, currentWidth);

                carouselRef.current.scroll({
                    left: newLeft,
                    behavior: 'smooth',
                });
                setCurrentScroll(newLeft);
            }
        },
        [
            carouselRef.current,
            carouselRef.current?.scrollLeft,
            carouselRef.current?.offsetWidth,
            currentWidth,
        ]
    );

    return (
        <Flex height={'100%'} position={'relative'}>
            <CarouselButton
                direction={'left'}
                hideWhen={currentScroll <= 0}
                icon={BsChevronLeft}
                onClick={() => handleScroll('left')}
            />
            <Flex
                ref={carouselRef}
                gap={'0.5em'}
                minWidth={'100%'}
                overflowX={'hidden'}
                padding={'0.5em 0'}
            >
                {props.children}
            </Flex>
            <CarouselButton
                direction={'right'}
                hideWhen={currentScroll >= currentWidth}
                icon={BsChevronRight}
                onClick={() => handleScroll('right')}
            />
        </Flex>
    );
}
