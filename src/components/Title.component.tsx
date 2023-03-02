import { Flex, Heading, Image } from '@chakra-ui/react';
import { TitleProps } from './models';

export default function Title(props: TitleProps) {
    return (
        <Flex gap={'1em'}>
            {props.icon ? <Image src={props.icon} /> : null}
            <Heading color={'white'} fontSize={'1.5em'}>
                {props.text}
            </Heading>
        </Flex>
    );
}
