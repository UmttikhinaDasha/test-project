import {Col, Container, Row, Spinner} from "react-bootstrap";
import '../loading/loading.scss'

export const Loading = () => {
    return (
        <Container>
            <Row className="loading">
                <Col xs='auto'>
                    <Spinner animation="border" variant="primary"/>
                </Col>
            </Row>
        </Container>
    );
};
