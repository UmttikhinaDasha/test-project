import { Pagination as PaginationBootstrap } from 'react-bootstrap';
import { FC } from 'react';

interface IPaginationProps {

    /** Текущая страница. */
    readonly currentPage: number;

    /** Общее количество страниц. */
    readonly totalCountPage: number;

    /**
     * Установить текущую страницу.
     * @param newCurrentPage - Новая текущая страница.
     */
    setCurrentPage(newCurrentPage: number): void;
}

export const Pagination: FC<IPaginationProps> = props => {
    const { totalCountPage, currentPage, setCurrentPage } = props;

    const changePage = (index: number): void => {
        setCurrentPage(index);
    };

    const renderPaginationItems = (): JSX.Element[] => {
        const paginationItems = [];

        for (let i = 1; i <= totalCountPage; i++) {
            paginationItems.push(
                <PaginationBootstrap.Item
                    key={i}
                    active={currentPage === i}
                    onClick={() => changePage(i)}>
                    {i}
                </PaginationBootstrap.Item>,
            );
        }

        return paginationItems;
    };

    return (
        <PaginationBootstrap className='mt-4' style={{ minWidth: 300 }}>
            {renderPaginationItems()}
        </PaginationBootstrap>
    );
};
