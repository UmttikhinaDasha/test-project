import {Image} from "react-bootstrap";
import {FC} from "react";

interface IAvatarProps {
    /* Ссылка на фотографию аватара **/
    readonly image: string;
    /* Ширина аватара **/
    readonly width?: number;
    /* Высота аватара **/
    readonly height?: number
}

export const Avatar: FC<IAvatarProps> = (props) => {
    const {image, width = 100, height= 120} = props;

    return (
        <Image src={image} rounded width={width} height={height} className='m-2'/>
    );
};

