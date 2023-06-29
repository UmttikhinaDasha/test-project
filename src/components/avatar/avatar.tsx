import { Image } from 'react-bootstrap';
import { FC } from 'react';

interface IAvatarProps {

    /** Ссылка на фотографию аватара.*/
    readonly image: string;

    /** Ширина аватара.*/
    readonly width?: number;

    /** Высота аватара.*/
    readonly height?: number;

    /** Css класс компонента.*/
    readonly className?: string;
}

export const Avatar: FC<IAvatarProps> = props => {
    const { image, width = 100, height = 120, className } = props;

    return (
        <Image src={image} rounded width={width} height={height} className={className} />
    );
};
