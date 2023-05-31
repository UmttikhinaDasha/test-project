import {FC, ReactNode} from 'react';
import {Header} from "../header/header";
import {Container} from "react-bootstrap";

interface ILayoutProps {
    children?: ReactNode
}

export const Layout: FC<ILayoutProps> = ({children}) => {
    return (
        <>
           <Header/>
            <Container className="p-4">
                {children}
            </Container>
        </>
    );
};
