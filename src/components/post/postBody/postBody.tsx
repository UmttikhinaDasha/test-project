import {Button, Card, Col, Row} from "react-bootstrap";
import {FC} from "react";
import {Avatar} from "components/avatar/avatar";
import avatarPost from 'utils/images/defaultAvatar.png'
import './postBody.scss'

interface IPostBodyProps {
    /** Заголовок поста */
    readonly title: string
    /** Текст поста */
    readonly content: string;
    /** Значение для изменения видимости комм-ев */
    readonly showComments: boolean;
    /** Получить комментарии к посту */
    getComments(): void;
    /** Показать комментарии */
    onShowComments(): void;
    /** Скрыть комментарии */
    onHideComments(): void;
}

export const PostBody: FC<IPostBodyProps> = (props) => {
    const {title, content, getComments, onShowComments, onHideComments, showComments} = props;

    const getCommentsOfPost = () => {
        getComments();
        onShowComments()
    }

    return (
        <Row className="row justify-content-center">
            <Col md={9}>
                <Card className='post'>
                    <Card.Body>
                        <div className='post__header'>
                            <Avatar image={avatarPost} width={50} height={50}/>
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
            </Col>
        </Row>
    );
};
