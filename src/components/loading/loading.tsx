import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { ReactElement } from 'react';
import '../loading/loading.scss';

export const Loading = (): ReactElement => (
    <Container>
        <Row className="loading">
            <Col xs='auto'>
                <Spinner animation="border" variant="primary" />
            </Col>
        </Row>
    </Container>
);
