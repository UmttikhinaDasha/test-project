import React, {FC} from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {Avatar} from "components/avatar/avatar";
import avatarUser from "utils/images/defaultAvatar.png";
import {IUser} from "models/user";
import '../userCard/userCard.scss';

interface IUserCardProps {
    readonly user: IUser;
}

export const UserCard: FC<IUserCardProps> = (props) => {
    const {user} = props;

    return (
        <Card className='user-card'>
            <Card.Body>
                <Row className='align-items-start m-1'>
                    <Col className='col-md-auto'>
                        <Avatar image={avatarUser}
                                width={150}
                                height={170}
                                className='user-card__image'
                        />
                    </Col>
                    <Col>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>User nickname: {user.userName}</Card.Text>
                        <Card.Text>Email: {user.email}</Card.Text>
                        <Card.Text>Address: {user.address}</Card.Text>
                        <Card.Text>Phone: {user.phone}</Card.Text>
                        <Card.Text>Website: {user.website}</Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};
