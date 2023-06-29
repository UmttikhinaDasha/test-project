import { ReactElement } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const ErrorPage = (): ReactElement => (
    <Container>
        <Row className='text-center'>
            <h1>Такой страницы не существует</h1>
            <Link to='posts'>Перейти на главную страницу</Link>
        </Row>
    </Container>
);
