import './App.css';
import Upload from "./components/upload/Upload";
import {Container, Nav, Navbar} from "react-bootstrap";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, HashRouter, Route, Switch} from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import {LinkContainer} from 'react-router-bootstrap'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto">
                        <LinkContainer to={"/"}>
                            <Nav.Link href="">Submit statements</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/"}>
                            <Nav.Link href="">Instructions</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/checkout"}>
                            <Nav.Link href="">Pricing</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar>

                <Switch>
                    <Container>
                        <Route path="/" exact>
                            <Elements stripe={stripePromise}>
                                <Upload stripePromise={stripePromise}/>
                            </Elements>
                        </Route>
                        <Route path="/checkout">
                            <Checkout/>
                        </Route>
                    </Container>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
