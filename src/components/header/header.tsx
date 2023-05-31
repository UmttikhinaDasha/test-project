import {Container,  Navbar} from "react-bootstrap";
import {ContentMenu} from "./contentMenu/contentMenu";

export const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="false">
            <Container fluid className='p-2'>
                <Navbar.Toggle aria-controls='menu-expand-false'  className='ms-auto'/>
                <Navbar.Offcanvas
                    id='menu-expand-false'
                    aria-labelledby='menu-expand-false'
                    placement="end"
                >
                    <ContentMenu/>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

