import {Col, Container, Row} from "react-bootstrap";
import {FC} from "react";
import './error.scss'

interface IErrorProps {
    readonly errorMessage: string | null;
}

export const Error: FC<IErrorProps> = (props) => {
    const {errorMessage} = props;

    return (
        <Container>
            <Row className="error">
                <Col xs='auto' className='error__text'>
                    {errorMessage}
                </Col>
            </Row>
        </Container>
    );
};
