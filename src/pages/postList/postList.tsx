import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "hooks/redux";
import {selectorPosts, selectorPostsError, selectorPostsLoading, selectorTotalCount} from "store/selectors/posts";
import {fetchPosts} from "store/actionCreators/posts";
import {Pagination} from "components/pagination/pagination";
import {Loading} from "components/loading/loading";
import {Error} from "components/error/error";
import {fetchComments} from "store/actionCreators/comments";
import {Post} from "components/post/post";
import {Col, Row} from "react-bootstrap";
import {DropdownSort} from "components/dropdownSort/dropdownSort";
import {TSort} from "models/sort";
import {Search} from "components/search/search";
import {useDebounce} from "hooks/useDebounce";
import './postList.scss'


export const PostList = () => {
    const loading = useAppSelector(selectorPostsLoading);
    const error = useAppSelector(selectorPostsError);
    const posts = useAppSelector(selectorPosts);
    const totalCountPosts = useAppSelector(selectorTotalCount);

    const dispatch = useAppDispatch();

    const [currentPage, setCurrentPage] = useState(1)
    const [sort, setSort] = useState<TSort>();
    const [search, setSearch] = useState('');

    const debouncedSearch = useDebounce(search, 500);

    const LIMIT_PAGE = 10;
    const totalCountPage = totalCountPosts / LIMIT_PAGE;

    useEffect(() => {
        getPosts(currentPage, sort, debouncedSearch)
    }, [currentPage, sort, debouncedSearch]);

    const getPosts = (page: number, sort?: TSort, search?: string) => {
        dispatch(fetchPosts({page, sort, search}));
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

        if(posts.length === 0){
            return <div className='post-list__emty'>Посты не найдены</div>
        }

        return posts.map((post) => {
            return <Post key={post.id}
                         postId={post.id}
                         userId={post.userId}
                         titlePost={post.title}
                         contentPost={post.body}
                         getComments={getComments}
            />
        })
    }

    const onSortAscending = () => {
        setSort('asc');
        setCurrentPage(1);
    }

    const onSortDescending = () => {
        setSort('desc');
        setCurrentPage(1);
    }

    const onResetSorting = () => {
        setSort(undefined);
        setCurrentPage(1);
    }

    return (
        <Row className="row justify-content-center">
            <Col md={10}>
                <Search searchSrc={search}
                        setSearchSrc={setSearch}
                        className='mb-3'
                />
                <DropdownSort sortAscending={onSortAscending}
                              sortDescending={onSortDescending}
                              resetSorting={onResetSorting}
                />
                {renderPosts()}
                <Pagination totalCountPage={totalCountPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                />
            </Col>
        </Row>
    );
};
