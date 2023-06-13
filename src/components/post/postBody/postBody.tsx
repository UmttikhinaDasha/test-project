import {Button, Card} from "react-bootstrap";
import {FC} from "react";
import {Avatar} from "components/avatar/avatar";
import avatarPost from 'utils/images/defaultAvatar.png'
import './postBody.scss'
import {Link} from "react-router-dom";

interface IPostBodyProps {
    /** Заголовок поста */
    readonly title: string
    /** Текст поста */
    readonly content: string;
    /** Значение для изменения видимости комм-ев */
    readonly showComments: boolean;
    /** Идентификатор автора поста*/
    readonly userId: number;
    /** Получить комментарии к посту */
    getComments(): void;
    /** Показать комментарии */
    onShowComments(): void;
    /** Скрыть комментарии */
    onHideComments(): void;
}

export const PostBody: FC<IPostBodyProps> = (props) => {
    const {
        title,
        content,
        userId,
        getComments,
        onShowComments,
        onHideComments,
        showComments} = props;

    const getCommentsOfPost = () => {
        getComments();
        onShowComments()
    }

    return (
        <Card className='post'>
            <Card.Body>
                <div className='post__header'>
                    <Link to={`/user/${userId}`}
                          title='Показать информацию о пользователе'>
                        <Avatar image={avatarPost}
                                width={60}
                                height={60}
                                className='post__header-avatar'
                        />
                    </Link>
                    <Card.Title>{title}</Card.Title>
                </div>
                <Card.Text className='m-2'>{content}</Card.Text>
                {!showComments &&
                    <Button className='m-1'
                            variant="primary"
                            onClick={getCommentsOfPost}>
                        Комментарии
                    </Button>
                }
                {showComments &&
                    <Button className='m-1'
                            variant="primary"
                            onClick={onHideComments}>
                        Скрыть комментарии
                    </Button>
                }
            </Card.Body>
        </Card>
    );
};
