import { Nav, Offcanvas } from 'react-bootstrap';
import { ReactElement } from 'react';
import avatar from 'utils/images/avatar.jpg';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { Avatar } from '../../avatar/avatar';
import './contentMenu.scss';

export const ContentMenu = (): ReactElement => (
    <>
        <Offcanvas.Header closeButton>
            <Avatar image={avatar} />
            <div>
                <Offcanvas.Title id='menu-expand-false'>
                    Умрихина Дарья
                </Offcanvas.Title>
                darya.125viis.467@gmail.com
            </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to='posts'
                    className={({ isActive }) =>
                        clsx('content-menu__link',
                            isActive && 'content-menu__link--active')}>
                    Список постов
                </NavLink>
                <NavLink to='about-me'
                    className={({ isActive }) =>
                        clsx('content-menu__link',
                            isActive && 'content-menu__link--active')}>
                    Обо мне
                </NavLink>
            </Nav>
        </Offcanvas.Body>
    </>

);
