import {Col, Pagination as PaginationBootstrap, Row} from 'react-bootstrap';
import {FC, useState} from "react";

interface IPaginationProps {
    readonly totalCountPage: number;

    getNewPage(page: number): void;
}

export const Pagination: FC<IPaginationProps> = (props) => {
    const {totalCountPage, getNewPage} = props;
    const [active, setActive] = useState(1)

    const changePage = (index: number): void => {
        getNewPage(index + 1)
        setActive(index + 1)
    }

    const renderPaginationItems = () => {
        const paginationItems = []

        for (let i = 0; i < totalCountPage; i++) {
            paginationItems.push(
                <PaginationBootstrap.Item
                    key={i}
                    active={active === i + 1}
                    onClick={() => changePage(i)}>
                    {i + 1}
                </PaginationBootstrap.Item>
            )
        }

        return paginationItems;
    }

    return (
        <Row className="row justify-content-center">
            <Col md={9}>
                <PaginationBootstrap>
                    {renderPaginationItems()}
                </PaginationBootstrap>
            </Col>
        </Row>
    );
};
