import './App.css';
import Upload from "./components/upload/Upload";
import {Container} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Container>
                <Upload/>
            </Container>
        </div>
    );
}

export default App;
