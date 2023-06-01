import {Layout} from "components/layout/layout";
import {Routes, Route, Navigate} from "react-router-dom";
import {AboutMe} from "pages/aboutMe/aboutMe";
import {Post} from "components/post/post";
import {ErrorPage} from "pages/errorPage/errorPage";

export const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route
                    path='/posts'
                    element={<Post content='dkdkdkd' title='ldldldl'/>}
                />
                <Route
                    path='/about-me'
                    element={<AboutMe />}
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
                    element={<ErrorPage/>}
                />
            </Route>
        </Routes>
    );
};
