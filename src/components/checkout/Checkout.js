import {useLocation} from "react-router-dom";
import SuccessCheckoutWithRouter from "./Success";
import FailCheckout from "./Fail";
import './Checkout.css'
import {Col, Container, Row} from "react-bootstrap";
import * as React from "react";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Checkout() {
    let query = useQuery()
    let ri = query.get("request_id")
    let success = query.get("success")

    return (
        <Container fluid id="checkout-container">
            <Row className="justify-content-md-center">
                <Col className="justify-content-md-center" md={7} sm={15}>
                    {
                        success === "true" ?
                            <SuccessCheckoutWithRouter requestId={ri}/> :
                            <FailCheckout requestId={ri}/>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Checkout;