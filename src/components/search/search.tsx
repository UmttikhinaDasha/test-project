import {Form, InputGroup} from "react-bootstrap";
import {ChangeEvent, FC} from "react";

interface ISearchProps {
    readonly searchSrc: string;
    readonly className?: string
    setSearchSrc(src: string): void;
}

export const Search: FC<ISearchProps> = (props) => {
    const {searchSrc, setSearchSrc, className} = props;

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchSrc(e.target.value)
    }

    return (
        <InputGroup className={className}>
            <Form.Control type='search'
                          placeholder="Поиск"
                          size="lg"
                          onChange={onChangeInput}
                          value={searchSrc}/>
        </InputGroup>
    );
};

