import { Layout } from 'components/layout/layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutMe } from 'pages/aboutMe/aboutMe';
import { ErrorPage } from 'pages/errorPage/errorPage';
import { PostList } from 'pages/postList/postList';
import { User } from 'pages/user/user';
import { ReactElement } from 'react';

export const Pages = (): ReactElement => (
    <Routes>
        <Route path='/' element={<Layout />}>
            <Route
                path='/posts'
                element={<PostList />}
            />
            <Route
                path='/about-me'
                element={<AboutMe />}
            />
            <Route
                path='/user/:userId'
                element={<User />}
            />
            <Route
                path='/'
                element={
                    <Navigate replace to='/posts' />
                }
            />
            <Route
                path='/'
                element={
                    <Navigate replace to='/posts' />
                }
            />
            <Route
                path='*'
                element={<ErrorPage />}
            />
        </Route>
    </Routes>
);
