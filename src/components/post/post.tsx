import {Button, Card, Col, Row} from "react-bootstrap";
import {FC} from "react";
import {Avatar} from "components/avatar/avatar";
import avatarPost from 'utils/images/defaultAvatar.png'
import './post.scss'

interface IPostProps {
    title: string
    content: string;
}

export const Post: FC<IPostProps> = (props) => {
    const {title, content} = props;

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
                        <Button className='m-1' variant="primary" >Комментарии</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

    );
};
