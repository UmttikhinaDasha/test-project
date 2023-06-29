import { ReactElement, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectorPosts, selectorPostsError, selectorPostsLoading, selectorTotalCount } from 'store/selectors/posts';
import { fetchPosts } from 'store/actionCreators/posts';
import { Pagination } from 'components/pagination/pagination';
import { Loading } from 'components/loading/loading';
import { Error } from 'components/error/error';
import { fetchComments } from 'store/actionCreators/comments';
import { Post } from 'components/post/post';
import { Col, Row } from 'react-bootstrap';
import { DropdownSort } from 'components/dropdownSort/dropdownSort';
import { TSort } from 'models/sort';
import { Search } from 'components/search/search';
import { useDebounce } from 'hooks/useDebounce';
import './postList.scss';
import { useSearchParams } from 'react-router-dom';

export const PostList = (): ReactElement => {
    const loading = useAppSelector(selectorPostsLoading);
    const error = useAppSelector(selectorPostsError);
    const posts = useAppSelector(selectorPosts);
    const totalCountPosts = useAppSelector(selectorTotalCount);

    const dispatch = useAppDispatch();

    const [sort, setSort] = useState<TSort>();

    const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
    const currentPage = Number(searchParams.get('page'));
    const search = searchParams.get('search') ?? '';

    const debouncedSearch = useDebounce(search, 600);

    const LIMIT_PAGE = 10;
    const totalCountPage = totalCountPosts / LIMIT_PAGE;

    useEffect(() => {
        dispatch(fetchPosts({
            page: currentPage,
            sort,
            search: debouncedSearch,
        }));
    }, [currentPage, sort, debouncedSearch]);

    const changeCurrentPage = (page: number): void => {
        setSearchParams(params => {
            params.set('page', page.toString());
            return params;
        });
    };

    const onChangeTypeSort = (typeSort: TSort | undefined): void => {
        setSort(typeSort);
        changeCurrentPage(1);
    };

    const changeSearchSrc = (src: string): void => {
        setSearchParams(params => {
            params.set('search', src);
            return params;
        });
        changeCurrentPage(1);
    };

    const getComments = (postId: number): void => {
        dispatch(fetchComments(postId));
    };

    const renderPosts = (): ReactElement | ReactElement[] => {
        if (loading) {
            return <Loading />;
        }

        if (error) {
            return <Error errorMessage={error} />;
        }

        if (posts.length === 0) {
            return <div className='post-list__emty'>Посты не найдены</div>;
        }

        return posts.map(post => <Post key={post.id}
            postId={post.id}
            userId={post.userId}
            titlePost={post.title}
            contentPost={post.body}
            getComments={getComments}
        />);
    };

    return (
        <Row className="row justify-content-center">
            <Col md={10}>
                <Search
                    searchSrc={search}
                    setSearchSrc={changeSearchSrc}
                    className='mb-3'
                />
                <DropdownSort
                    sortAscending={() => onChangeTypeSort('asc')}
                    sortDescending={() => onChangeTypeSort('desc')}
                    resetSorting={() => onChangeTypeSort(undefined)}
                />
                {renderPosts()}
                <Pagination
                    totalCountPage={totalCountPage}
                    currentPage={currentPage}
                    setCurrentPage={changeCurrentPage}
                />
            </Col>
        </Row>
    );
};
