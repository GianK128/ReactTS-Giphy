import { GifProps } from './models';
import { Image } from '@chakra-ui/react';
import GifPlaceholder from './GifPlaceholder.component';

export default function Gif(props: GifProps) {
    const aspectRatio = Number(props.width) / Number(props.height);

    const newHeight = 150;
    const newWidth = newHeight * aspectRatio;

    return (
        <Image
            alt={props.altText}
            borderRadius={'0.5em'}
            fallback={
                <GifPlaceholder
                    height={`${newHeight}px`}
                    width={`${newWidth}px`}
                />
            }
            height={`${newHeight}px`}
            objectFit={'cover'}
            src={props.url}
            width={`${newWidth}px`}
        />
    );
}
