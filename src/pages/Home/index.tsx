import { Flex } from '@chakra-ui/react';
import TrendingGifs from './components/TrendingGifs.component';

export default function Home() {
    return (
        <Flex alignItems={'center'} direction={'column'} width={'full'}>
            <Flex justifyContent={'center'} padding={'1em'} width={'70vw'}>
                <TrendingGifs />
            </Flex>
        </Flex>
    );
}
