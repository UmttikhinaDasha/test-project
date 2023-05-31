import {Avatar} from "../../components/avatar/avatar";
import {Col, Row} from "react-bootstrap";
// @ts-ignore
import avatar from "../../utils/images/avatar.jpg";


export const AboutMe = () => {
    return (
        <Row>
            <Col lg={3}>
                <Avatar image={avatar} width={190} height={220}/>
            </Col>
            <Col>
                <h2>Обо мне</h2>
                <p>Меня зовут Умрихина Дарья, мне 23 года. В данный момент проживаю в Турции, в городе Анталья.</p>
                <p>В 2022 году с отличием закончина Институт космических и информационных технологий Сибирского
                    Федерального Университета по специальности Программная инженерия. Сразу после получения диплома
                    устроилась frontend-разработчиком в красноярскую компанию и разрабатывала личные кабинеты для
                    студентов и преподавателей СибГУ.
                </p>
                <p>Стек технологий, которым я обладаю: React, CSS, Sass, typeScript, Redux, Git</p>
                <p>Являюсь ответственным и неконфликтным человеком, хорошо работаю в команде. </p>
            </Col>
        </Row>
    );
};