import {Button, Form, FormControl, FormLabel, FormText, InputGroup} from "react-bootstrap";
import {CopyToClipboard} from "react-copy-to-clipboard/lib/Component";
import {withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import React from 'react';
import axios from "axios";

const defaultCopyButtonLabel = "Copy";
const clickedCopyButtonLabel = "Copied";

class SuccessCheckout extends React.Component {

    static propTypes = {
        history: PropTypes.object.isRequired
    };

    requestId = this.props.requestId
    state = {
        coupon: "",
        requestCopyButtonLabel: defaultCopyButtonLabel,
        couponCopyButtonLabel: defaultCopyButtonLabel,
    }

    componentDidMount() {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        axios.post(`${baseUrl}/api/payments/obtain-coupon`,
            {
                "request_id": this.requestId,
            })
            .then(res => {
                const coupon = res.data.coupon
                if (this.state.coupon !== "" && coupon === "") {
                    return
                }
                this.setState({...this.state, coupon})
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleRequestIDCopyClick = () => {
        this.setState({...this.state, requestCopyButtonLabel: clickedCopyButtonLabel})
        setTimeout(() =>
            this.setState({...this.state, requestCopyButtonLabel: defaultCopyButtonLabel}), 500
        )
    }

    handleCouponCopyClick = () => {
        this.setState({...this.state, couponCopyButtonLabel: clickedCopyButtonLabel})
        setTimeout(() =>
            this.setState({...this.state, couponCopyButtonLabel: defaultCopyButtonLabel}), 500
        )
    }

    render() {
        const {history} = this.props;
        return (
            <Form>
                <Form.Group>
                    <FormText className="text-center">
                        <h4>Your request was processed successfully and a report is on its way to your mailbox</h4>
                    </FormText>
                </Form.Group>
                <br/>
                <Form.Group>
                    <FormLabel>Request ID</FormLabel>
                    <InputGroup className="mb-2">
                        <FormControl
                            value={this.requestId}
                            disabled
                            className="text-center"
                            placeholder=""
                        />
                        <InputGroup.Append>
                            <CopyToClipboard text={this.requestId}>
                                <Button disabled={this.requestId == null || this.requestId === ""}
                                        variant={"outline-secondary"}
                                        onClick={this.handleRequestIDCopyClick}>{this.state.requestCopyButtonLabel}</Button>
                            </CopyToClipboard>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
                <br/>
                <Form.Group>
                    <FormLabel>Coupon code</FormLabel>
                    <InputGroup className="mb-2">
                        <FormControl
                            value={this.state.coupon}
                            disabled
                            className="text-center"
                            placeholder=""
                        />
                        <InputGroup.Append>
                            <CopyToClipboard text={this.state.coupon}>
                                <Button disabled={this.state.coupon === ""}
                                        variant={"outline-secondary"}
                                        onClick={this.handleCouponCopyClick}>{this.state.couponCopyButtonLabel}</Button>
                            </CopyToClipboard>
                        </InputGroup.Append>
                    </InputGroup>
                </Form.Group>
                <br/>
                <br/>
                <Button block onClick={() => history.push("/")}>Try again</Button>
            </Form>
        )
    }
}

const SuccessCheckoutWithRouter = withRouter(SuccessCheckout);

export default SuccessCheckoutWithRouter;