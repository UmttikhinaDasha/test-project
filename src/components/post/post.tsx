import {FC, useState} from "react";
import {PostBody} from "components/post/postBody/postBody";
import {Comment} from "components/post/comment/comment";
import {useAppSelector} from "hooks/redux";
import {selectorComments, selectorCommentsError, selectorCommentsLoading} from "store/selectors/comments";
import {Loading} from "components/loading/loading";
import {Error} from "components/error/error";

interface IPostProps {
    /** Заголовок поста */
    readonly titlePost: string;
    /** Текст поста */
    readonly contentPost: string;
    /** Идентификатор поста*/
    readonly postId: number;
    /**
     * Получение комментарие к посту
     * @param postId - id поста.
     * */
    getComments(postId: number): void
}

export const Post: FC<IPostProps> = (props) => {
    const {titlePost, contentPost, postId, getComments} = props;

    const comments = useAppSelector(selectorComments);
    const loading = useAppSelector(selectorCommentsLoading);
    const error = useAppSelector(selectorCommentsError);

    const [showComments, setShowComments] = useState(false);

    const onShowComments = () => {
        setShowComments(true)
    }

    const onHideComments = () => {
        setShowComments(false)
    }

    const renderComments = () => {
        if(!comments[postId] && loading){
            return <Loading/>
        }

        if(!comments[postId] && error){
            return <Error errorMessage={error}/>
        }

        return comments[postId].map(comment => {
            return <Comment key={comment.id}
                            userEmail={comment.email}
                            text={comment.body}
            />
        })
    }

    return (
        <>
            <PostBody title={titlePost}
                      content={contentPost}
                      showComments={showComments}
                      getComments={() => getComments(postId)}
                      onShowComments={onShowComments}
                      onHideComments={onHideComments}
            />
            {showComments && renderComments()}
        </>
    );
};

