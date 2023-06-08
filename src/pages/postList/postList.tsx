import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {selectorPosts, selectorPostsError, selectorPostsLoading, selectorTotalCount} from "store/selectors/posts";
import {fetchPosts} from "store/actionCreators/posts";
import {Pagination} from "components/pagination/pagination";
import {Loading} from "components/loading/loading";
import {Error} from "components/error/error";
import {fetchComments} from "store/actionCreators/comments";
import {Post} from "components/post/post";


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

    const getComments = (postId: number) => {
        dispatch(fetchComments(postId))
    }

    const renderPosts = () => {
        if (loading) {
            return <Loading/>
        }

        if (error) {
            return <Error errorMessage={error}/>
        }

        return posts.map((post) => {
            return <Post key={post.id}
                         titlePost={post.title}
                         contentPost={post.body}
                         getComments={getComments}
                         postId={post.id}
            />
        })
    }

    return (
        <>
            {renderPosts()}
            <Pagination totalCountPage={totalCountPage} getNewPage={getPosts}/>
        </>
    );
};
