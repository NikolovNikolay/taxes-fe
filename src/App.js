import './App.css';
import Upload from "./components/upload/Upload";
import {Container, Nav, Navbar} from "react-bootstrap";
import {loadStripe} from "@stripe/stripe-js/pure";
import {Elements} from "@stripe/react-stripe-js";
import 'bootstrap/dist/css/bootstrap.min.css';

import {HashRouter, Route, Switch} from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import {LinkContainer} from 'react-router-bootstrap'
import Instructions from "./components/instructions/Instructions";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_SECRET);

function App() {
    return (
        <HashRouter>
            <div className="App">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <LinkContainer to={"/"}>
                                <Nav.Link href="">Submit statements</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={"/instructions"}>
                                <Nav.Link href="">Instructions</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
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
                        <Route path="/instructions">
                            <Instructions/>
                        </Route>
                    </Container>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
