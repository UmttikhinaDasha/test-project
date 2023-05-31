import { Nav, Offcanvas} from "react-bootstrap";
import {Avatar} from "../../avatar/avatar";
// @ts-ignore
import avatar from "../../../utils/images/avatar.jpg";

export const ContentMenu = () => {
    return (
        <>
            <Offcanvas.Header closeButton>
                <Avatar image={avatar}/>
                <div>
                    <Offcanvas.Title id='menu-expand-false'>
                        Умрихина Дарья
                    </Offcanvas.Title>
                    darya.125viis.467@gmail.com
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="#action1">Список постов</Nav.Link>
                    <Nav.Link href="#action2">Обо мне</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </>

    );
};
