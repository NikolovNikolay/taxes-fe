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
import Terms from "./components/terms/Terms";
import AboutMe from "./components/about/AboutMe";

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
                            <LinkContainer to={"/faq"}>
                                <Nav.Link href="">FAQ</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={"/about-me"}>
                                <Nav.Link href="">About me</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to={"/terms-of-use"}>
                                <Nav.Link href="">Terms of use</Nav.Link>
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
                        <Route path="/faq">
                            <Instructions/>
                        </Route>
                        <Route path="/terms-of-use">
                            <Terms/>
                        </Route>
                        <Route path="/about-me">
                            <AboutMe/>
                        </Route>
                    </Container>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
