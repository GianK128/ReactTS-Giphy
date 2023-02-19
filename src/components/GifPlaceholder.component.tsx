import { Flex } from '@chakra-ui/react';
import { GifPlaceholderProps } from './models';

export default function GifPlaceholder(props: GifPlaceholderProps) {
    return (
        <Flex
            backgroundColor={'#FF6666'}
            borderRadius={'0.5em'}
            flexShrink={0}
            height={props.height}
            width={props.width}
        />
    );
}
