import './App.css';
import Upload from "./components/upload/Upload";
import {Container, Nav, Navbar} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Instructions</Nav.Link>
                    <Nav.Link href="#upload">Submit statements</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar>
            <Container>
                <Upload/>
            </Container>
        </div>
    );
}

export default App;
