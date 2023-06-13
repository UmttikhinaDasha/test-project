import {FC} from "react";
import {Link} from "react-router-dom";
import './buttonBack.scss'

interface IButtonBackProps {
    /* Ссылка на предыдущую страницу**/
    readonly link: string;
}

export const ButtonBack: FC<IButtonBackProps> = (props) => {
    const {link} = props;

    return (
        <Link to={link} className='button-back'>
            Назад
        </Link>
    );
};

