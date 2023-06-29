import { UserCard } from 'components/userCard/userCard';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectorUser, selectorUserError, selectorUserLoading } from 'store/selectors/user';
import { ReactElement, useEffect } from 'react';
import { fetchUser } from 'store/actionCreators/user';
import { useParams } from 'react-router-dom';
import { selectorPosts, selectorPostsError, selectorPostsLoading } from 'store/selectors/posts';
import { Post } from 'components/post/post';
import { fetchComments } from 'store/actionCreators/comments';
import { fetchUserPosts } from 'store/actionCreators/userPosts';
import { Col, Row } from 'react-bootstrap';
import { ButtonBack } from 'components/buttonBack/buttonBack';
import { Loading } from 'components/loading/loading';
import { Error } from 'components/error/error';

export const User = (): ReactElement => {
    const { userId } = useParams();
    const userData = useAppSelector(selectorUser);
    const userPosts = useAppSelector(selectorPosts);
    const userLoading = useAppSelector(selectorUserLoading);
    const userError = useAppSelector(selectorUserError);
    const postsLoading = useAppSelector(selectorPostsLoading);
    const postsError = useAppSelector(selectorPostsError);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userId) {
            dispatch(fetchUser(Number(userId)));
            dispatch(fetchUserPosts(Number(userId)));
        }
    }, [userId]);

    const getComments = (postId: number): void => {
        dispatch(fetchComments(postId));
    };

    const renderUserPosts = (): ReactElement | ReactElement[] => {
        if (postsLoading) {
            return <Loading />;
        }

        if (postsError) {
            return <Error errorMessage={postsError} />;
        }

        return userPosts.map(post => <Post key={post.id}
            postId={post.id}
            userId={post.userId}
            titlePost={post.title}
            contentPost={post.body}
            getComments={getComments}
        />);
    };

    const renderUserData = (): ReactElement | ReactElement[] => {
        if (userLoading) {
            return <Loading />;
        }

        if (userError) {
            return <Error errorMessage={userError} />;
        }

        return <UserCard user={userData} />;
    };

    return (
        <Row className="row justify-content-center">
            <Col className='col-md-auto'>
                <ButtonBack link='/posts' />
            </Col>
            <Col md={10}>
                {renderUserData()}
                <h4 className='mt-4'>Посты пользователя:</h4>
                {renderUserPosts()}
            </Col>
        </Row>
    );
};
