import { Dropdown } from 'react-bootstrap';
import { FC, useState } from 'react';

/** Перечисление вариантов сортировки. */
enum SortName {
    Asc = 'По возрастанию',
    Desc = 'По убыванию',
    Reset = 'Сбросить',
}

interface IDropdownSortProps {

    /** Ф-я сортировки по возрастанию. */
    sortAscending(): void;

    /** Ф-я сортировки по убыванию. */
    sortDescending(): void;

    /** Сброс сортировки. */
    resetSorting(): void;
}

export const DropdownSort: FC<IDropdownSortProps> = props => {
    const { sortAscending, sortDescending, resetSorting } = props;

    const [currentSortName, setCurrentSortName] = useState<SortName | ''>('');

    const onClickMenuItem = (onSort: () => void, sortName: SortName): void => {
        setCurrentSortName(sortName);
        onSort();
    };

    const renderToggle = (): string => {
        if (currentSortName === '' || currentSortName === SortName.Reset) {
            return 'Сортировка';
        }

        return `Сортировка: ${currentSortName}`;
    };

    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary">
                {renderToggle()}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item
                    onClick={() => onClickMenuItem(sortAscending, SortName.Asc)}>
                    {SortName.Asc}
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => onClickMenuItem(sortDescending, SortName.Desc)}>
                    {SortName.Desc}
                </Dropdown.Item>
                <Dropdown.Item onClick={() => onClickMenuItem(resetSorting, SortName.Reset)}>
                    {SortName.Reset}
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};
