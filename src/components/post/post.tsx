import { FC, ReactElement, useState } from 'react';
import { PostBody } from 'components/post/postBody/postBody';
import { Comment } from 'components/post/comment/comment';
import { useAppSelector } from 'hooks/redux';
import { selectorComments, selectorCommentsError, selectorCommentsLoading } from 'store/selectors/comments';
import { Loading } from 'components/loading/loading';
import { Error } from 'components/error/error';

interface IPostProps {

    /** Заголовок поста.*/
    readonly titlePost: string;

    /** Текст поста.*/
    readonly contentPost: string;

    /** Идентификатор поста.*/
    readonly postId: number;

    /** Идентификатор автора поста.*/
    readonly userId: number;

    /**
     * Получение комментарие к посту.
     * @param postId - Id поста.
     */
    getComments(postId: number): void;
}

export const Post: FC<IPostProps> = props => {
    const { titlePost, contentPost, postId, userId, getComments } = props;

    const comments = useAppSelector(selectorComments);
    const loading = useAppSelector(selectorCommentsLoading);
    const error = useAppSelector(selectorCommentsError);

    const [showComments, setShowComments] = useState(false);

    const onShowComments = (): void => {
        setShowComments(true);
    };

    const onHideComments = (): void => {
        setShowComments(false);
    };

    const renderComments = (): ReactElement | ReactElement[] => {
        if (loading.includes(postId)) {
            return <Loading />;
        }

        if (!comments[postId] && error) {
            return <Error errorMessage={error} />;
        }

        return comments[postId]?.map(comment => <Comment key={comment.id}
            userEmail={comment.email}
            text={comment.body}
        />);
    };

    return (
        <>
            <PostBody title={titlePost}
                content={contentPost}
                userId={userId}
                showComments={showComments}
                getComments={() => getComments(postId)}
                onShowComments={onShowComments}
                onHideComments={onHideComments}
            />
            {showComments && renderComments()}
        </>
    );
};
