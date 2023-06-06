import {useEffect} from "react";
import {Post} from "components/post/post";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {selectorPosts, selectorPostsError, selectorPostsLoading} from "../../store/selectors/posts";
import {fetchPosts} from "../../store/actionCreators/posts";
import {Spinner} from "react-bootstrap";

export const PostList = () => {
    const loading = useAppSelector(selectorPostsLoading);
    const error = useAppSelector(selectorPostsError);
    const posts = useAppSelector(selectorPosts);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    const renderPosts = () => {
        return posts.map((post) => {
            return <Post key={post.id} title={post.title} content={post.body}/>
        })
    }

    if (loading) {
        return <Spinner animation="border" variant="primary"/>
    }

    if (error) {
        return <div>{error}</div>
    }

    return (
        <>
            {renderPosts()}
        </>
    );
};
