import { Form, InputGroup } from 'react-bootstrap';
import { ChangeEvent, FC } from 'react';

interface ISearchProps {

    /** Страка поиска.*/
    readonly searchSrc: string;

    /** Класс стилей для элемента.*/
    readonly className?: string;

    /** Ф-я изменения строки поиска.
     * @param src - Новая строка.
     */
    setSearchSrc(src: string): void;
}

export const Search: FC<ISearchProps> = props => {
    const { searchSrc, setSearchSrc, className } = props;

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
        setSearchSrc(e.target.value);
    };

    return (
        <InputGroup className={className}>
            <Form.Control type='search'
                placeholder="Поиск"
                size="lg"
                onChange={onChangeInput}
                value={searchSrc} />
        </InputGroup>
    );
};
