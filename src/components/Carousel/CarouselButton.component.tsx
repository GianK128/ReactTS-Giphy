import { Button } from '@chakra-ui/react';
import { CarouselButtonProps } from '../models';

export default function CarouselButton(props: CarouselButtonProps) {
    const IconComponent = props.icon;
    const isRight = props.direction === 'right';

    return (
        <Button
            _hover={{
                background: isRight
                    ? 'linear-gradient(-90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%)'
                    : 'linear-gradient(90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%)',
                color: 'white',
            }}
            alignItems={'center'}
            background={
                isRight
                    ? 'linear-gradient(-90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%)'
                    : 'linear-gradient(90deg, rgba(18, 18, 18, 0.75) 0%, rgba(18, 18, 18, 0) 100%)'
            }
            color={'gray.400'}
            display={'flex'}
            height={'100%'}
            justifyContent={'center'}
            opacity={props.hideWhen ? 0 : 1}
            padding={'0.5em 0'}
            position={'absolute'}
            style={isRight ? { right: 0 } : { left: 0 }}
            transition={
                'opacity 0.5s ease-out 0s, width 0.5s ease-out 0s, color 0.05s ease'
            }
            type={'button'}
            width={props.hideWhen ? '0px' : '2em'}
            onClick={props.onClick}
        >
            <IconComponent
                fontSize={'2em'}
                opacity={props.hideWhen ? 0 : 1}
                style={{
                    strokeWidth: '0.5px',
                }}
            />
        </Button>
    );
}
