import { ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

export interface CarouselProps {
    children: ReactNode;
    loaded?: boolean;
}

export interface CarouselButtonProps {
    hideWhen: boolean;
    direction: 'left' | 'right';
    icon: IconType;
    onClick: () => void;
}
