import { FC } from 'react';
import { ListGroup } from 'react-bootstrap';
import '../comment/comment.scss';

interface ICommentProps {

    /** Почта автора комментария. */
    readonly userEmail?: string;

    /** Текст комментария. */
    readonly text?: string;
}

export const Comment: FC<ICommentProps> = props => {
    const { userEmail, text } = props;

    return (
        <ListGroup className='comment'>
            <ListGroup.Item>
                <div className='comment__title'>{userEmail}</div>
                <div>{text}</div>
            </ListGroup.Item>
        </ListGroup>
    );
};
