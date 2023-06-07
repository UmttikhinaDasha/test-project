import {useEffect} from "react";
import {Post} from "components/post/post";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {selectorPosts, selectorPostsError, selectorPostsLoading, selectorTotalCount} from "../../store/selectors/posts";
import {fetchPosts} from "../../store/actionCreators/posts";
import {Spinner} from "react-bootstrap";
import {Pagination} from "components/pagination/pagination";

export const PostList = () => {
    const loading = useAppSelector(selectorPostsLoading);
    const error = useAppSelector(selectorPostsError);
    const posts = useAppSelector(selectorPosts);
    const totalCountPosts = useAppSelector(selectorTotalCount);

    const LIMIT_PAGE = 10;
    const totalCountPage = totalCountPosts / LIMIT_PAGE;

    const dispatch = useAppDispatch();

    useEffect(() => {
        getPosts(1)
    }, []);

    const getPosts = (page: number) => {
        dispatch(fetchPosts(page));
    }

    const renderPosts = () => {
        if (loading) {
            return <Spinner animation="border" variant="primary"/>
        }

        if (error) {
            return <div>{error}</div>
        }

        return posts.map((post) => {
            return <Post key={post.id} title={post.title} content={post.body}/>
        })
    }

    return (
        <>
            {renderPosts()}
            <Pagination totalCountPage={totalCountPage} getNewPage={getPosts}/>
        </>
    );
};
