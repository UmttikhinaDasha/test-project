import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ReactElement } from 'react';

import { Header } from '../header/header';

import './layout.scss';

export const Layout = (): ReactElement => (
    <div className='layout'>
        <Header />
        <Container className="p-4">
            <Outlet />
        </Container>
    </div>
);
