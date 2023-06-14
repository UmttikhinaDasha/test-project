import {Pagination as PaginationBootstrap} from 'react-bootstrap';
import {FC} from "react";

interface IPaginationProps {
    readonly currentPage: number;
    readonly totalCountPage: number;
    setCurrentPage(newCurrentPage: number): void;
}

export const Pagination: FC<IPaginationProps> = (props) => {
    const {totalCountPage, currentPage, setCurrentPage} = props;

    const changePage = (index: number): void => {
        setCurrentPage(index)
    }

    const renderPaginationItems = () => {
        const paginationItems = []

        for (let i = 1; i <= totalCountPage; i++) {
            paginationItems.push(
                <PaginationBootstrap.Item
                    key={i}
                    active={currentPage === i}
                    onClick={() => changePage(i)}>
                    {i}
                </PaginationBootstrap.Item>
            )
        }

        return paginationItems;
    }

    return (
        <PaginationBootstrap className='mt-4'>
            {renderPaginationItems()}
        </PaginationBootstrap>
    );
};
