import {Header} from "../header/header";
import {Container} from "react-bootstrap";
import {Outlet} from "react-router-dom";


export const Layout = () => {
    return (
        <>
           <Header/>
            <Container className="p-4">
                <Outlet />
            </Container>
        </>
    );
};
